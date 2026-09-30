import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react'

const icons = { email: Mail, phone: Phone, linkedin: Linkedin, github: Github }

export default function ContactCard({ kind, label, value, href }) {
  const Icon = icons[kind]
  const external = kind === 'linkedin' || kind === 'github'
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="group card card-hover flex items-center gap-4 p-5"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-cream">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[13px] text-muted">{label}</span>
        <span className="block truncate text-[15.5px] font-medium">{value}</span>
      </span>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:-translate-y-[2px] group-hover:translate-x-[2px] group-hover:text-ember" aria-hidden="true" />
    </a>
  )
}
