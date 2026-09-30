import { useEffect, useRef, useState } from 'react'

/** Returns [ref, visible]. Becomes true once the element enters the viewport. */
export function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setVisible(true); return }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); io.disconnect() }
    }, options)
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, visible]
}
