export default function SkillChip({ children, strong = false }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[13.5px] leading-none ${
        strong ? 'border-ink/25 bg-paper text-ink' : 'border-line bg-cream/70 text-ink/75'
      }`}
    >
      {strong && <span className="mr-1.5 h-1 w-1 rounded-[1px] bg-ember" aria-hidden="true" />}
      {children}
    </span>
  )
}
