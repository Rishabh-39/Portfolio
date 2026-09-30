import { ArrowUpRight, Github } from 'lucide-react'
import ProjectPreview from './ProjectPreview'

export default function ProjectCard({ project }) {
  const dark = project.featured
  return (
    <article
      className={`group card card-hover flex flex-col p-4 ${dark ? 'border-ink bg-ink text-paper' : ''}`}
    >
      <a href={project.liveUrl} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true" className="block">
        <ProjectPreview id={project.id} dark={dark} />
      </a>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="pixel-heading text-[2.2rem] leading-none">{project.name}</h3>
            <p className={`mt-2 text-[14px] ${dark ? 'text-paper/65' : 'text-muted'}`}>{project.type}</p>
          </div>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} source code on GitHub`}
            title="Source code on GitHub"
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors ${
              dark ? 'border-paper/20 hover:border-paper/60' : 'border-line hover:border-ink/40'
            }`}
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <p className={`mt-4 text-[14.5px] leading-relaxed ${dark ? 'text-paper/80' : 'text-ink/80'}`}>{project.description}</p>

        <dl className={`mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border [&>*:last-child:nth-child(odd)]:col-span-2 ${dark ? 'border-paper/10 bg-paper/10' : 'border-line bg-line'}`}>
          {project.highlights.map((h) => (
            <div key={h.label} className={`${dark ? 'bg-ink' : 'bg-paper'} p-3.5`}>
              <dt className="sr-only">{h.label}</dt>
              <dd className="text-[18px] font-semibold tracking-[-0.01em]">{h.value}</dd>
              <dd className={`text-[12.5px] ${dark ? 'text-paper/55' : 'text-muted'}`}>{h.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`rounded-full border px-3 py-1.5 text-[12.5px] leading-none ${
                dark ? 'border-paper/20 text-paper/85' : 'border-line bg-cream/70 text-ink/75'
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-7 text-[14.5px] font-medium">
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="group/btn inline-flex items-center gap-2">
            <span className={`border-b pb-0.5 ${dark ? 'border-paper/30' : 'border-ink/25'}`}>View Live Demo</span>
            <ArrowUpRight className="h-4 w-4 text-ember transition-transform group-hover/btn:translate-x-[2px] group-hover/btn:-translate-y-[2px]" aria-hidden="true" />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1.5 transition-colors ${dark ? 'text-paper/65 hover:text-paper' : 'text-muted hover:text-ink'}`}
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            Source code
          </a>
        </div>
      </div>
    </article>
  )
}
