import { useEffect } from 'react'
import Lenis from 'lenis'

// Where a section's content should land after a menu click (clears the sticky nav).
const LAND_AT = 110

/**
 * True for trackpads and high-resolution wheels (small pixel deltas), false
 * for classic notched mouse wheels (large steps, or line/page mode).
 */
const isPrecisionScroll = (e) => {
  if (e.deltaMode !== 0) return false // Firefox line/page mode = notched wheel
  if (e.wheelDeltaY && e.wheelDeltaY === -3 * e.deltaY) return true // WebKit/Blink trackpad signature
  return Math.abs(e.deltaY) < 50 && Math.abs(e.deltaX) < 50
}

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

/**
 * Light smooth scrolling.
 *
 * Only notched mouse wheels, which jump in coarse steps, are smoothed, with
 * a high `lerp` so each notch settles in ~150 ms. Trackpads, touch screens and
 * small scroll movements stay fully native, so they respond instantly.
 * Reduced-motion users get plain native scroll.
 *
 * In-page links glide to their section; any wheel/touch/key input during a
 * glide cancels it. The target section's pill pulses on arrival.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const arrive = (section) => {
      const pill = section?.querySelector('[data-pill]')
      if (!pill || reduce) return
      pill.classList.remove('pill-ping')
      void pill.offsetWidth
      pill.classList.add('pill-ping')
      setTimeout(() => pill.classList.remove('pill-ping'), 2000)
    }

    const lenis = reduce
      ? null
      : new Lenis({
          lerp: 0.35,
          wheelMultiplier: 1.7,
          smoothWheel: true,
          syncTouch: false,
        })

    window.__lenis = lenis
    let raf
    if (lenis) {
      const loop = (time) => { lenis.raf(time); raf = requestAnimationFrame(loop) }
      raf = requestAnimationFrame(loop)
    }

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      const target = id === '#' ? null : document.querySelector(id)
      if (!target) return
      e.preventDefault()
      const anchor = target.firstElementChild || target
      const y = Math.max(0, id === '#home' ? 0 : anchor.getBoundingClientRect().top + window.scrollY - LAND_AT)
      history.replaceState(null, '', id)

      if (!lenis) {
        window.scrollTo({ top: y, behavior: 'instant' })
        return arrive(target)
      }
      const dist = Math.abs(y - window.scrollY)
      lenis.scrollTo(y, {
        duration: Math.min(1.1, Math.max(0.55, dist / 3300)),
        easing: easeInOutCubic,
        force: true,
        onComplete: () => arrive(target),
      })
    }

    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('click', onClick)
      if (raf) cancelAnimationFrame(raf)
      lenis?.destroy()
      window.__lenis = null
    }
  }, [])
}
