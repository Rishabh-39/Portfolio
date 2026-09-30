import PixelShape from './PixelShape'
import SkillChip from './SkillChip'
import { atomCells, serverCells, dbCells } from '../lib/pixels'

const server = serverCells(22)
const art = {
  atom: { cells: atomCells(27), cols: 27, rows: 27 },
  server: { cells: server.cells, cols: 22, rows: 20, accent: server.accent },
  db: { cells: dbCells(22, 26), cols: 22, rows: 26 },
}

const FEATURED = new Set(['React.js', 'NestJS', 'Node.js', 'PostgreSQL'])

/**
 * Featured card for each layer of the stack. Same footprint as the
 * other cards' rhythm; The first card uses the dark tile.
 */
export function FeaturedSkillCard({ skill, primary = false }) {
  const a = art[skill.kind]
  const accent = a.accent ?? (skill.kind === 'atom' ? a.cells.filter(([c, r]) => Math.abs(c - 13) + Math.abs(r - 13) <= 1) : [])
  const dark = primary

  return (
    <article
      className={`card card-hover relative flex h-full flex-col overflow-hidden p-6 ${
        dark ? 'border-ink bg-ink text-paper' : ''
      }`}
    >
      {dark && <div className="dot-grid-light absolute inset-0 opacity-50" aria-hidden="true" />}
      <div className="relative flex items-start justify-between gap-4">
        <PixelShape
          cells={a.cells}
          cols={a.cols}
          rows={a.rows}
          accent={accent}
          dot={0.38}
          stagger={18}
          className={`h-12 w-12 ${
            dark ? 'text-paper' : 'text-ink'
          }`}
        />
        <span
          className={`rounded-full border px-2.5 py-1 text-[12px] ${
            dark ? 'border-paper/20 text-paper/80' : 'border-line text-muted'
          }`}
        >
          {skill.layer}
        </span>
      </div>
      <h3 className="pixel-heading relative mt-6 text-[clamp(1.7rem,2.4vw,2.1rem)]">{skill.name}</h3>
      <p className={`relative mt-2 text-[14.5px] leading-relaxed ${dark ? 'text-paper/70' : 'text-muted'}`}>
        {skill.tagline}
      </p>
      <div className="relative mt-auto flex flex-wrap gap-1.5 pt-5">
        {skill.usedIn.map((u) =>
          dark ? (
            <span key={u} className="rounded-full border border-paper/20 px-3 py-1.5 text-[12.5px] leading-none text-paper/85">
              {u}
            </span>
          ) : (
            <SkillChip key={u}>{u}</SkillChip>
          ),
        )}
      </div>
    </article>
  )
}

/** Compact grouped card for the rest of the stack. */
export default function SkillCard({ title, items }) {
  return (
    <article className="card card-hover p-6">
      <h3 className="text-[15px] font-semibold">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {items.map((i) => (
          <SkillChip key={i} strong={FEATURED.has(i)}>
            {i}
          </SkillChip>
        ))}
      </div>
    </article>
  )
}
