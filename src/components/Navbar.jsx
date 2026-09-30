import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Menu, X, ArrowDownToLine } from 'lucide-react'
import { navLinks, profile } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const listRef = useRef(null)
  const [marker, setMarker] = useState({ left: 0, width: 0, ready: false })

  // Sliding highlight that travels between links as the active section changes.
  useLayoutEffect(() => {
    const place = () => {
      const link = listRef.current?.querySelector(`[data-id="${active}"]`)
      if (!link) return
      const li = link.closest('li')
      setMarker({ left: li.offsetLeft, width: li.offsetWidth, ready: true })
    }
    place()
    window.addEventListener('resize', place)
    document.fonts?.ready.then(place)
    return () => window.removeEventListener('resize', place)
  }, [active])

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) window.__lenis?.stop()
    else window.__lenis?.start()
  }, [open])

  return (
    <header className="sticky z-50 px-4 pt-4 sm:px-6" style={{ top: 'env(safe-area-inset-top, 0px)' }}>
      <nav className="mx-auto flex max-w-page items-center justify-between rounded-full border border-line bg-paper py-2 pl-2 pr-2">
        <a href="#home" className="flex items-center gap-3 rounded-full pr-2" aria-label="Rishabh Tomar, back to top">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-pixel text-[17px] font-black text-paper">
            RT
          </span>
          <span className="hidden text-[15px] font-semibold sm:block">Rishabh Tomar</span>
        </a>

        <ul ref={listRef} className="relative hidden items-center gap-1 lg:flex">
          <li
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 rounded-full bg-cream transition-[left,width,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
            style={{ left: marker.left, width: marker.width, opacity: marker.ready ? 1 : 0 }}
          >
            <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-[1px] bg-ember" />
          </li>
          {navLinks.map((l) => (
            <li key={l.id} className="relative">
              <a
                href={`#${l.id}`}
                data-id={l.id}
                aria-current={active === l.id ? 'true' : undefined}
                className={`relative block rounded-full px-3.5 py-2 text-[14px] transition-colors duration-300 ${
                  active === l.id ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="group hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[14px] font-medium text-paper sm:inline-flex"
          >
            Resume
            <ArrowDownToLine className="h-4 w-4 text-ember transition-transform group-hover:translate-y-[2px]" />
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="mx-auto mt-2 max-w-page rounded-[22px] border border-line bg-paper p-3 lg:hidden">
          <ul className="grid">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-[16px] hover:bg-cream"
                >
                  {l.label}
                  {active === l.id && <span className="h-1.5 w-1.5 rounded-[1px] bg-ember" />}
                </a>
              </li>
            ))}
          </ul>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ink py-3 text-paper sm:hidden">
            Download Resume <ArrowDownToLine className="h-4 w-4 text-ember" />
          </a>
        </div>
      )}
    </header>
  )
}
