# Rishabh Tomar — Portfolio

React.js + Vite + JavaScript + Tailwind CSS.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Before deploying

1. **Photo** — `public/rishabh.webp` is your dotted portrait with the paper background removed (ink dots on transparent), so it blends into the page.
2. **Links** — live demos, GitHub repos, internship certificates and LinkedIn are set in `src/data/content.js` (`liveUrl`, `repoUrl`, `certificate`, `linkedin`).
3. **Contact form** — it opens the visitor's email app pre-filled. To send directly, replace `handleSubmit` in `src/components/ContactForm.jsx` with a form service (Formspree, EmailJS) or your own API.

All copy lives in `src/data/content.js`.

## Structure

```
src/
  data/content.js          resume content
  lib/pixels.js            dot-matrix shape generators (atom, waves, JS glyphs, clusters)
  lib/useInView.js         scroll reveal hook
  lib/useSmoothScroll.js   light Lenis smoothing (tuned responsive) + eased menu glides
  lib/useScrollProgress.js page / element scroll progress (top bar, timeline rail)
  components/
    Navbar  Hero  HeroPhoto  About  StatCard
    SectionHeader  Pill  Button  Reveal  PixelShape
    Skills  SkillCard  SkillChip
    ExperienceTimeline  ExperienceCard
    Projects  ProjectCard  ProjectPreview
    WhyMe  ReasonCard
    Contact  ContactCard  ContactForm  Footer
```

Fonts: Doto (dot-matrix headings), Geist (body), loaded from Google Fonts in `index.html`.
