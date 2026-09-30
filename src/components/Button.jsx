import { ArrowUpRight, Download } from 'lucide-react'

const icons = { arrow: ArrowUpRight, download: Download }

export default function Button({ href, variant = 'dark', icon = 'arrow', children, className = '', ...rest }) {
  const Icon = icons[icon]
  const base =
    'group inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-[15px] font-medium transition-colors duration-200'
  const styles =
    variant === 'dark'
      ? 'bg-ink text-paper hover:bg-black'
      : 'border border-ink/15 bg-paper text-ink hover:border-ink/40'
  const move = icon === 'download' ? 'group-hover:translate-y-[2px]' : 'group-hover:translate-x-[2px] group-hover:-translate-y-[2px]'
  const Tag = href ? 'a' : 'button'
  return (
    <Tag href={href} className={`${base} ${styles} ${className}`} {...rest}>
      {children}
      <Icon className={`h-4 w-4 transition-transform duration-200 ${move} ${variant === 'dark' ? 'text-ember' : ''}`} aria-hidden="true" />
    </Tag>
  )
}
