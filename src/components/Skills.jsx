import SectionHeader from './SectionHeader'
import SkillCard, { FeaturedSkillCard } from './SkillCard'
import Reveal from './Reveal'
import { featuredSkills, skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="pt-32">
      <SectionHeader
        id="skills-title"
        pill="SKILLS"
        lines={['Tools I use', 'to build.']}
        copy="Technologies I use to turn ideas into responsive, scalable and production-ready applications."
      />

      <Reveal stagger className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featuredSkills.map((s) => (
          <FeaturedSkillCard key={s.name} skill={s} />
        ))}
      </Reveal>

      <Reveal stagger className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <SkillCard key={g.title} {...g} />
        ))}
      </Reveal>
    </section>
  )
}
