import SectionHeader from './SectionHeader'
import ReasonCard from './ReasonCard'
import Reveal from './Reveal'
import { reasons } from '../data/content'

export default function WhyMe() {
  return (
    <section id="why-me" aria-labelledby="why-title" className="pt-32">
      <SectionHeader
        id="why-title"
        pill="WHY HIRE ME"
        lines={['More than', 'just code.']}
        copy="I combine full-stack development with real internship experience, strong CS fundamentals and an engineer’s approach to problem solving."
      />
      <Reveal stagger className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <ReasonCard key={r.title} {...r} emphasis={i === 0} />
        ))}
      </Reveal>
    </section>
  )
}
