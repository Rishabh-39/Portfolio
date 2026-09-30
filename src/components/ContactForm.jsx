import { useState } from 'react'
import { Send } from 'lucide-react'
import { profile } from '../data/content'

/**
 * No backend: on submit, the message opens in the visitor's email app,
 * pre-filled and addressed to Rishabh. Swap `handleSubmit` for a form
 * service (Formspree, EmailJS, your own API) to send directly.
 */
export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!values.name.trim()) e.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'Enter an email address like name@example.com.'
    if (values.message.trim().length < 10) e.message = 'Write a message of at least 10 characters.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`)
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const field =
    'mt-2 w-full rounded-xl border border-line bg-cream/50 px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 transition-colors focus:border-ink/40 focus:bg-paper focus:outline-none'

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-[14px] font-medium">Name</span>
          <input className={field} value={values.name} onChange={set('name')} autoComplete="name" placeholder="Your name" aria-invalid={!!errors.name} />
          {errors.name && <span className="mt-1.5 block text-[13px] text-ember">{errors.name}</span>}
        </label>
        <label className="block">
          <span className="text-[14px] font-medium">Email</span>
          <input className={field} type="email" value={values.email} onChange={set('email')} autoComplete="email" placeholder="you@company.com" aria-invalid={!!errors.email} />
          {errors.email && <span className="mt-1.5 block text-[13px] text-ember">{errors.email}</span>}
        </label>
      </div>
      <label className="mt-5 block">
        <span className="text-[14px] font-medium">Message</span>
        <textarea className={`${field} min-h-[160px] resize-y`} value={values.message} onChange={set('message')} placeholder="Tell me about the role or project" aria-invalid={!!errors.message} />
        {errors.message && <span className="mt-1.5 block text-[13px] text-ember">{errors.message}</span>}
      </label>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[13px] text-muted" aria-live="polite">
          {sent ? 'Your email app has opened with the message ready to send.' : 'Opens in your email app, ready to send.'}
        </p>
        <button type="submit" className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-paper hover:bg-black">
          Send Message
          <Send className="h-4 w-4 text-ember transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" aria-hidden="true" />
        </button>
      </div>
    </form>
  )
}
