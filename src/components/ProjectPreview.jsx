import { useEffect, useRef, useState } from 'react'

/** Lightweight illustrative previews drawn with markup, one per project. */
export default function ProjectPreview({ id, dark = false }) {
  if (id === 'hirelens') return <HireLensPreview dark={dark} />
  if (id === 'bitsync') return <BitSyncPreview />
  return <AlgoSortPreview />
}

function Frame({ children, dark = false }) {
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-[16px] border transition-transform duration-500 ease-out group-hover:scale-[1.02] ${
        dark ? 'border-paper/10 bg-[#1F1E1B]' : 'border-line bg-cream'
      }`}
    >
      <div className={`${dark ? 'dot-grid-light' : 'dot-grid-fine'} absolute inset-0`} aria-hidden="true" />
      <div className="relative flex h-full flex-col p-4">{children}</div>
    </div>
  )
}

function HireLensPreview({ dark }) {
  const rows = [
    ['Software Engineer', 92],
    ['Full Stack Developer', 81],
    ['Backend Developer', 68],
  ]
  return (
    <Frame dark={dark}>
      <div className="flex items-center gap-2">
        <span className={`h-6 w-6 rounded-md ${dark ? 'bg-ember' : 'bg-ink'}`} />
        <span className={`h-2 w-24 rounded-full ${dark ? 'bg-paper/20' : 'bg-ink/15'}`} />
      </div>
      <div className={`mt-auto space-y-2 rounded-xl border p-3 ${dark ? 'border-paper/10 bg-[#2A2926]' : 'border-line bg-paper'}`}>
        {rows.map(([r, v]) => (
          <div key={r} className="flex items-center gap-3 text-[11px]">
            <span className={`w-32 shrink-0 truncate ${dark ? 'text-paper/70' : 'text-ink/70'}`}>{r}</span>
            <span className={`h-1.5 flex-1 rounded-full ${dark ? 'bg-paper/10' : 'bg-line'}`}>
              <span className={`block h-full rounded-full ${dark ? 'bg-paper' : 'bg-ink'}`} style={{ width: `${v}%` }} />
            </span>
          </div>
        ))}
      </div>
      <p className={`mt-2 text-right text-[10px] ${dark ? 'text-paper/40' : 'text-muted'}`}>Illustrative match view</p>
    </Frame>
  )
}

function BitSyncPreview() {
  return (
    <Frame>
      <div className="flex items-center gap-2 text-[11px] text-ink/70">
        <span className="h-2 w-2 rounded-full bg-ember" /> # general
      </div>
      <div className="mt-auto space-y-2 text-[11px]">
        <div className="w-fit max-w-[70%] rounded-2xl rounded-bl-sm border border-line bg-paper px-3 py-2">Pushed the channel APIs</div>
        <div className="ml-auto w-fit max-w-[70%] rounded-2xl rounded-br-sm bg-ink px-3 py-2 text-paper">Testing group chat now</div>
        <div className="flex w-fit gap-1 rounded-2xl rounded-bl-sm border border-line bg-paper px-3 py-2.5" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span key={i} className="blink h-1 w-1 rounded-full bg-ink/60" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
      </div>
    </Frame>
  )
}

function AlgoSortPreview() {
  const initial = [7, 3, 9, 2, 6, 10, 4, 8, 1, 5, 11, 6]
  const [bars, setBars] = useState(initial)
  const [cursor, setCursor] = useState(0)
  const [onScreen, setOnScreen] = useState(false)
  const boxRef = useRef(null)

  // Only run while the card is on screen, so it costs nothing during scrolling elsewhere.
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting))
    if (boxRef.current) io.observe(boxRef.current)
    return () => io.disconnect()
  }, [])

  // One bubble-sort compare/swap per tick; restarts when sorted.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !onScreen) return
    let arr = [...initial]
    let i = 0
    let j = 0
    const t = setInterval(() => {
      if (i >= arr.length - 1) {
        arr = [...initial]; i = 0; j = 0
      } else {
        if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        j++
        if (j >= arr.length - 1 - i) { j = 0; i++ }
      }
      setBars([...arr]); setCursor(j)
    }, 260)
    return () => clearInterval(t)
  }, [onScreen])

  return (
    <div ref={boxRef}>
    <Frame>
      <div className="flex items-center justify-between text-[11px] text-ink/60">
        <span>Bubble Sort</span>
        <span className="rounded-full border border-line bg-paper px-2 py-0.5">speed 60%</span>
      </div>
      <div className="mt-3 flex min-h-0 flex-1 items-end gap-[6px]" aria-hidden="true">
        {bars.map((v, k) => (
          <div
            key={k}
            className="flex-1 rounded-[3px] transition-[height] duration-200"
            style={{
              height: `${(v / 11) * 100}%`,
              backgroundImage: `radial-gradient(circle, ${k === cursor || k === cursor + 1 ? '#E0592A' : 'rgba(22,21,19,.85)'} 1.6px, transparent 2px)`,
              backgroundSize: '6px 6px',
              backgroundPosition: 'center bottom',
            }}
          />
        ))}
      </div>
    </Frame>
    </div>
  )
}
