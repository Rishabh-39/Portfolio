import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="pt-32">
      <SectionHeader
        id="projects-title"
        pill="PROJECTS"
        lines={['Ideas', 'into impact.']}
        copy="A selection of projects where I applied frontend, backend and engineering skills to build practical products."
      />
      <Reveal stagger className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Reveal>
    </section>
  )
}
