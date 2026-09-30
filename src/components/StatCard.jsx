import { ArrowUpRight } from 'lucide-react'

/** One of the four highlight cards under the hero; each jumps to its section. */
export default function StatCard({ title, lines, href }) {
  return (
    <a href={href} className="group card card-hover relative flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <p className="pixel-heading text-[clamp(1.35rem,1.9vw,1.7rem)] leading-[1.05]">{title}</p>
        <ArrowUpRight
          className="h-4 w-4 shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] group-hover:text-ember"
          aria-hidden="true"
        />
      </div>
      <div className="mt-3 space-y-0.5 text-[14px] leading-snug text-muted">
        {lines.map((l) => (
          <p key={l}>{l}</p>
        ))}
      </div>
    </a>
  )
}
