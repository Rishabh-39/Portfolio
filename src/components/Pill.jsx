export default function Pill({ children, className = '' }) {
  return (
    <span data-pill className={`inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 transition-colors duration-500 py-1.5 text-[12px] font-medium tracking-[0.08em] text-ink ${className}`}>
      <span className="h-1.5 w-1.5 rounded-[1px] bg-ember" aria-hidden="true" />
      {children}
    </span>
  )
}
