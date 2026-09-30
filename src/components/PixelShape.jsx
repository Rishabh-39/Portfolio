import { memo } from 'react'
import { useInView } from '../lib/useInView'

/**
 * Renders a list of [col,row] cells as dots. The whole shape fades in once
 * when it scrolls into view — a single composited opacity change, rather than
 * hundreds of per-dot transitions that would cost a frame mid-scroll.
 * (`stagger` is accepted for backwards compatibility and ignored.)
 */
function PixelShape({ cells, cols, rows, className = '', accent = [], dot = 0.36 }) {
  const [ref, visible] = useInView({ threshold: 0, rootMargin: '0px 0px 15% 0px' })
  const w = cols ?? Math.max(...cells.map((c) => c[0])) + 1
  const h = rows ?? Math.max(...cells.map((c) => c[1])) + 1
  const accentSet = new Set(accent.map(([c, r]) => `${c},${r}`))

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${w} ${h}`}
      className={`transition-opacity duration-500 ease-out ${visible ? 'opacity-100' : 'opacity-0'} ${className}`}
      aria-hidden="true"
    >
      {cells.map(([c, r]) => (
        <circle
          key={`${c}-${r}`}
          cx={c + 0.5}
          cy={r + 0.5}
          r={dot}
          fill={accentSet.has(`${c},${r}`) ? '#E0592A' : 'currentColor'}
        />
      ))}
    </svg>
  )
}

export default memo(PixelShape)
