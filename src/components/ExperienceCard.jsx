import SkillChip from './SkillChip'
import { MapPin, ArrowUpRight } from 'lucide-react'

export default function ExperienceCard({ item }) {
  return (
    <article className="card card-hover p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-semibold tracking-[-0.01em]">{item.company}</h3>
          <p className="mt-1 text-[15px] text-ink/80">{item.role}</p>
        </div>
        <div className="flex flex-col items-start gap-2 sm:items-end">
          <span className="inline-flex items-center gap-1.5 text-[13px] text-muted">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {item.location}
          </span>
          {item.certificate && (
            <a
              href={item.certificate}
              target="_blank"
              rel="noreferrer"
              className="group/cert inline-flex items-center gap-1.5 rounded-full border border-line bg-cream/60 px-3 py-1.5 text-[13px] font-medium text-ink transition-colors hover:border-ink/40"
            >
              View certificate
              <ArrowUpRight className="h-3.5 w-3.5 text-ember transition-transform group-hover/cert:-translate-y-[1px] group-hover/cert:translate-x-[1px]" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <p className="mt-5 max-w-[62ch] text-[15px] leading-relaxed text-muted">{item.summary}</p>

      <ul className="mt-5 space-y-2.5">
        {item.points.map((p) => (
          <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-ink/85">
            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-[1px] bg-ember" aria-hidden="true" />
            {p}
          </li>
        ))}
      </ul>

      {item.modules && (
        <div className="mt-6 rounded-2xl border border-line bg-cream/60 p-4">
          <p className="text-[13px] text-muted">DayCare Management System — modules I worked on</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.modules.map((m) => (
              <SkillChip key={m} strong={m === 'Leave Management'}>
                {m}
              </SkillChip>
            ))}
          </div>
        </div>
      )}

      {item.metrics && (
        <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {item.metrics.map((m) => (
            <div key={m.label} className="bg-cream/60 p-4">
              <p className="pixel-heading text-[2rem] leading-none">{m.value}</p>
              <p className="mt-2 text-[13px] text-muted">{m.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-1.5">
        {item.stack.map((s) => (
          <SkillChip key={s} strong={false}>
            {s}
          </SkillChip>
        ))}
      </div>
    </article>
  )
}
