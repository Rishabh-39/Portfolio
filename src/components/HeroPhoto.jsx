import { profile } from '../data/content'

/**
 * The portrait is already rendered as ink dots on a transparent background,
 * so it sits straight on the page with no frame. The bottom edge dissolves
 * into the page.
 */
export default function HeroPhoto() {
  return (
    <div className="hero-photo relative mx-auto w-full max-w-[640px] lg:-mr-10">
      <img
        src={profile.photo}
        alt="Portrait of Rishabh Tomar"
        width="1210"
        height="1026"
        className="relative block h-auto w-full select-none [mask-image:linear-gradient(to_bottom,black_78%,transparent)]"
        draggable="false"
      />



      <div className="absolute -bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-paper px-4 py-2 text-[13px] text-ink shadow-soft">
        <span className="blink h-2 w-2 rounded-[1px] bg-ember" aria-hidden="true" />
        Open to software development roles
      </div>
    </div>
  )
}
