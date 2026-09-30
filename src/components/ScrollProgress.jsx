import { useRef } from 'react'
import { useScrollProgress } from '../lib/useScrollProgress'

/** Thin orange reading-progress line pinned to the top edge. */
export default function ScrollProgress() {
  const barRef = useRef(null)
  useScrollProgress({ targetRef: barRef, axis: 'x' })
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px]" style={{ top: 'env(safe-area-inset-top, 0px)' }} aria-hidden="true">
      <div ref={barRef} className="h-full origin-left bg-ember will-change-transform" style={{ transform: 'scaleX(0)' }} />
    </div>
  )
}
