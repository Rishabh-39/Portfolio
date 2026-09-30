import Pill from './Pill'
import Button from './Button'
import HeroPhoto from './HeroPhoto'
import StatCard from './StatCard'
import Reveal from './Reveal'
import { profile, stats } from '../data/content'

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative pt-14 sm:pt-20">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <div className="hero-in">
          <div className="hero-step">
            <Pill>HELLO, I’M</Pill>
          </div>
          <h1 id="hero-title" className="pixel-heading mt-6 text-[clamp(3.6rem,10.5vw,8.4rem)]">
            <span className="line-mask"><span>{profile.firstName}</span></span>
            <span className="line-mask">
              <span>
                {profile.lastName}
                <span className="text-ember">.</span>
              </span>
            </span>
          </h1>
          <p style={{ animationDelay: '180ms' }} className="hero-step mt-7 text-[clamp(1.35rem,2.4vw,1.75rem)] font-medium tracking-[-0.01em]">
            {profile.role}
          </p>
          <p style={{ animationDelay: '240ms' }} className="hero-step mt-4 max-w-[52ch] text-[17px] leading-relaxed text-muted">{profile.intro}</p>
          <div style={{ animationDelay: '300ms' }} className="hero-step mt-9 flex flex-wrap gap-3">
            <Button href="#projects">View My Work</Button>
            <Button href={profile.resume} variant="light" icon="download" target="_blank" rel="noreferrer">
              Download Resume
            </Button>
          </div>
        </div>

        <HeroPhoto />
      </div>

      <Reveal stagger className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.title} {...s} />
        ))}
      </Reveal>
    </section>
  )
}
