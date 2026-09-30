import Pill from './Pill'
import Reveal from './Reveal'
import { profile, education } from '../data/content'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="pt-6">
      <Reveal className="card relative grid gap-8 overflow-hidden p-7 sm:p-10 md:grid-cols-[1fr_1.6fr]">
        <div className="relative">
          <Pill>ABOUT ME</Pill>
          <h2 id="about-title" className="pixel-heading mt-5 text-[clamp(2rem,3.6vw,2.8rem)]">
            Who I am<span className="text-ember">.</span>
          </h2>
          <dl className="mt-7 space-y-1 text-[14px] text-muted">
            <dt className="sr-only">Education</dt>
            <dd className="text-ink">{education.degree}</dd>
            <dd>{education.school}</dd>
            <dd>
              {education.place}, {education.years}
            </dd>
          </dl>
        </div>
        <div className="space-y-5 self-center">
          {profile.about.map((para, i) => (
            <p
              key={i}
              className={i === 0 ? 'text-[clamp(1.08rem,1.6vw,1.25rem)] leading-[1.65] text-ink/90' : 'text-[16px] leading-[1.7] text-muted'}
            >
              {para}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
