import SectionHeader from './SectionHeader'
import ExperienceCard from './ExperienceCard'
import Reveal from './Reveal'
import { useRef } from 'react'
import { useScrollProgress } from '../lib/useScrollProgress'
import { experience, leadership } from '../data/content'

/**
 * Vertical timeline. Desktop: date column | rail with square node | card.
 * Mobile: rail on the left, date sits above each card.
 */
function Row({ period, children, small = false }) {
  return (
    <Reveal as="li" className="relative grid grid-cols-[20px_1fr] gap-x-5 md:grid-cols-[170px_28px_1fr] md:gap-x-6">
      <p className={`col-start-2 mb-3 text-[13px] font-medium text-muted md:col-start-1 md:row-start-1 md:mb-0 md:text-right ${small ? 'md:pt-6' : 'md:pt-8'}`}>
        {period}
      </p>
      <div className="relative col-start-1 row-span-2 row-start-1 flex justify-center md:col-start-2 md:row-span-1">
        <span
          className={`relative z-10 mt-1 grid place-items-center rounded-[4px] border border-ink bg-paper ${small ? 'md:mt-7' : 'md:mt-8'} ${
            small ? 'h-3 w-3' : 'h-4 w-4'
          }`}
          aria-hidden="true"
        >
          {!small && <span className="h-1.5 w-1.5 rounded-[1px] bg-ember" />}
        </span>
      </div>
      <div className="col-start-2 md:col-start-3 md:row-start-1">{children}</div>
    </Reveal>
  )
}

export default function ExperienceTimeline() {
  const railRef = useRef(null)
  const fillRef = useRef(null)
  useScrollProgress({ trackRef: railRef, targetRef: fillRef, axis: 'y' })
  return (
    <section id="experience" aria-labelledby="experience-title" className="pt-32">
      <SectionHeader
        id="experience-title"
        pill="EXPERIENCE"
        lines={['My', 'journey.']}
        copy="From classroom concepts to production applications and embedded systems, these experiences shaped how I approach engineering and problem solving."
      />

      <div ref={railRef} className="relative mt-16">
        {/* rail: dashed track, with a solid line that draws down as you scroll */}
        <div
          className="absolute bottom-4 left-[9.5px] top-2 w-px bg-[repeating-linear-gradient(to_bottom,#CFC6B6_0_3px,transparent_3px_7px)] md:left-[calc(170px+24px+13.5px)]"
          aria-hidden="true"
        >
          <div ref={fillRef} className="h-full w-full origin-top bg-ink will-change-transform" style={{ transform: 'scaleY(0)' }} />
        </div>
        <ol className="space-y-8">
          {experience.map((e) => (
            <Row key={e.company} period={e.period}>
              <ExperienceCard item={e} />
            </Row>
          ))}
        </ol>

        <div id="leadership" className="relative my-12 grid grid-cols-[20px_1fr] gap-x-5 md:grid-cols-[170px_28px_1fr] md:gap-x-6">
          <h3 className="col-start-2 text-[15px] font-semibold md:col-start-3">Leadership &amp; achievements</h3>
        </div>

        <ol className="grid gap-4">
          {leadership.map((l) => (
            <Row key={l.title + l.org} period={l.period} small>
              <article className="card card-hover flex flex-col gap-2 p-5 sm:flex-row sm:items-baseline sm:gap-6 sm:p-6">
                <div className="sm:w-[44%] sm:shrink-0">
                  <p className="text-[16px] font-semibold">{l.title}</p>
                  <p className="text-[14px] text-muted">{l.org}</p>
                </div>
                <p className="text-[14.5px] leading-relaxed text-ink/80">{l.detail}</p>
              </article>
            </Row>
          ))}
        </ol>
      </div>
    </section>
  )
}
