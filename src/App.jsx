import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import ExperienceTimeline from './components/ExperienceTimeline'
import Projects from './components/Projects'
import WhyMe from './components/WhyMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import { useSmoothScroll } from './lib/useSmoothScroll'

export default function App() {
  useSmoothScroll()
  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* faint technical texture fading out from the top */}
      <div
        className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-[900px] opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]"
        aria-hidden="true"
      />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="relative mx-auto max-w-page px-4 sm:px-6">
        <Hero />
        <About />
        <Skills />
        <ExperienceTimeline />
        <Projects />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
