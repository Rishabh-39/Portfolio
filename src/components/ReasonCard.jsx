import { Code2, Briefcase, Puzzle, Layers, Users, Zap } from 'lucide-react'

const icons = { code: Code2, briefcase: Briefcase, puzzle: Puzzle, layers: Layers, users: Users, zap: Zap }

export default function ReasonCard({ icon, title, text, emphasis = false }) {
  const Icon = icons[icon]
  return (
    <article className="card card-hover relative overflow-hidden p-7">
      <div className="dot-grid-fine absolute right-0 top-0 h-20 w-28 opacity-70 [mask-image:linear-gradient(to_bottom_left,black,transparent_70%)]" aria-hidden="true" />
      <span
        className={`relative grid h-11 w-11 place-items-center rounded-xl border ${
          emphasis ? 'border-ink bg-ink text-paper' : 'border-line bg-cream text-ink'
        }`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="relative mt-6 text-[18px] font-semibold tracking-[-0.01em]">{title}</h3>
      <p className="relative mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
    </article>
  )
}
