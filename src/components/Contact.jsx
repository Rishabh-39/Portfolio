import SectionHeader from './SectionHeader'
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'
import Reveal from './Reveal'
import { profile } from '../data/content'

export default function Contact() {
  const cards = [
    { kind: 'email', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { kind: 'phone', label: 'Phone', value: profile.phone, href: profile.phoneHref },
    { kind: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/rishabh-tomar', href: profile.linkedin },
    { kind: 'github', label: 'GitHub', value: 'github.com/Rishabh-39', href: profile.github },
  ]
  return (
    <section id="contact" aria-labelledby="contact-title" className="pt-32">
      <SectionHeader
        id="contact-title"
        pill="CONTACT"
        lines={["Let's", 'connect.']}
        copy="I’m open to software development opportunities, collaborations and interesting projects."
      />
      <Reveal stagger className="mt-14 grid gap-4 lg:grid-cols-[1fr_1.5fr]">
        <div className="grid content-start gap-4">
          {cards.map((c) => (
            <ContactCard key={c.kind} {...c} />
          ))}
        </div>
        <ContactForm />
      </Reveal>
    </section>
  )
}
