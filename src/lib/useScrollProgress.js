import { useEffect } from 'react'

/**
 * Writes 0→1 scroll progress straight onto an element's transform, without
 * re-rendering React on every frame.
 *  - trackRef: element to measure (omit to track the whole page)
 *  - targetRef: element to transform
 *  - axis: 'x' → scaleX, 'y' → scaleY
 */
export function useScrollProgress({ trackRef, targetRef, axis = 'x' }) {
  useEffect(() => {
    let frame = null
    const update = () => {
      frame = null
      let p
      if (trackRef?.current) {
        const r = trackRef.current.getBoundingClientRect()
        p = (window.innerHeight * 0.6 - r.top) / r.height
      } else {
        const max = document.documentElement.scrollHeight - window.innerHeight
        p = max > 0 ? window.scrollY / max : 0
      }
      p = Math.min(1, Math.max(0, p))
      if (targetRef.current) targetRef.current.style.transform = axis === 'x' ? `scaleX(${p})` : `scaleY(${p})`
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
}
