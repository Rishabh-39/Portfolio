import Pill from './Pill'
import Reveal from './Reveal'

/** Pill + two-line pixel heading on the left, supporting copy on the right. */
export default function SectionHeader({ pill, lines, copy, id }) {
  return (
    <Reveal stagger className="section-head grid gap-8 md:grid-cols-[1.35fr_1fr] md:items-end">
      <div>
        <Pill>{pill}</Pill>
        <h2 id={id} className="pixel-heading mt-6 text-[clamp(2.6rem,6.4vw,5.4rem)]">
          {lines.map((l, i) => (
            <span key={l} className="line-mask">
              <span>
                {i === lines.length - 1 ? (
                  <>
                    {l.replace(/\.$/, '')}
                    <span className="text-ember">.</span>
                  </>
                ) : (
                  l
                )}
              </span>
            </span>
          ))}
        </h2>
      </div>
      <p className="max-w-[42ch] text-[17px] leading-relaxed text-muted md:justify-self-end md:pb-2">{copy}</p>
    </Reveal>
  )
}
