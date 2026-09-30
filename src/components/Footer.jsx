import PixelShape from './PixelShape'
import { clusterCells } from '../lib/pixels'

const strip = clusterCells(60, 4, 3).map(([c, r]) => [c, 3 - r])

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-line">
      <PixelShape cells={strip} cols={60} rows={4} className="mx-auto -mt-px block h-6 w-full max-w-page px-4 text-ink/15 sm:px-6" stagger={8} />
      <div className="mx-auto max-w-page px-4 py-8 text-center text-[14px] text-muted sm:px-6">
        <p>
          © {new Date().getFullYear()} · Built by <span className="font-medium text-ink">Rishabh Tomar</span>
        </p>
      </div>
    </footer>
  )
}
