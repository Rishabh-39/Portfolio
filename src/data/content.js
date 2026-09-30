// All copy is taken from Rishabh's resume. Edit here, not in components.

export const profile = {
  name: 'Rishabh Tomar',
  firstName: 'Rishabh',
  lastName: 'Tomar',
  role: 'Software Developer',
  intro:
    'I build full-stack web applications end to end — React.js interfaces, NestJS and Express APIs, and PostgreSQL databases — backed by production internship work and a foundation in DSA and system design.',
  about: [
    'I’m Rishabh Tomar, an Electronics Engineering student at RGIPT whose journey into software started with embedded systems and robotics and gradually evolved into full-stack development. Working across hardware and software taught me how systems communicate, scale and fail — a mindset I now apply while building applications using React, JavaScript, TypeScript, Node.js, NestJS, REST APIs and PostgreSQL.',
    'My internships gave me the opportunity to move beyond academic projects and work on real-world production systems. From understanding existing codebases and debugging APIs to developing complete features such as a Leave Management module for a DayCare platform, I’ve experienced the full software development lifecycle — requirement understanding, database design, backend development, frontend integration, testing, and collaboration with a development team.',
  ],
  phone: '+91 93438 39055',
  phoneHref: 'tel:+919343839055',
  // Dot-rendered portrait on a transparent background (see README)
  photo: '/rishabh.webp',
  // Opens the resume on Google Drive in a new tab
  resume: 'https://drive.google.com/file/d/1PLlvhaRcEnMH2jHzcyFQWe-VsWFIMte8/view?usp=drive_link',
  email: 'rishabhtomar.in@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rishabh-tomar-8a7885243/',
  github: 'https://github.com/Rishabh-39',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'why-me', label: 'Why Me' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { title: 'B.Tech', lines: ['RGIPT', '2023–2027'], href: '#about' },
  { title: '2 Internships', lines: ['Teamarcs + BEL'], href: '#experience' },
  { title: '1st Runner-Up', lines: ['Meshmerize', 'IIT Bombay TechFest'], href: '#leadership' },
  { title: 'Full-Stack', lines: ['React.js', 'NestJS', 'PostgreSQL'], href: '#skills' },
]

export const education = {
  school: 'Rajiv Gandhi Institute of Petroleum Technology',
  degree: 'B.Tech in Electronics Engineering',
  years: '2023–2027',
  place: 'Amethi, Uttar Pradesh',
}

// One card per layer of the stack.
export const featuredSkills = [
  {
    name: 'React.js',
    layer: 'Frontend',
    kind: 'atom',
    tagline: 'Component-driven interfaces with JavaScript and Tailwind CSS',
    usedIn: ['Teamarcs', 'HireLens', 'BitSync', 'AlgoSort'],
  },
  {
    name: 'NestJS · Node.js',
    layer: 'Backend',
    kind: 'server',
    tagline: 'REST APIs, JWT authentication and real-time services with Express and Socket.IO',
    usedIn: ['Teamarcs', 'HireLens', 'BitSync'],
  },
  {
    name: 'PostgreSQL',
    layer: 'Database',
    kind: 'db',
    tagline: 'Schema design and database integration, plus MySQL',
    usedIn: ['Teamarcs', 'HireLens', 'BitSync'],
  },
]

export const skillGroups = [
  { title: 'Languages', items: ['C++', 'Python', 'Java', 'JavaScript', 'TypeScript'] },
  { title: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'JWT Authentication'] },
  { title: 'Databases', items: ['PostgreSQL', 'MySQL'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Docker', 'AWS', 'Postman', 'DBeaver', 'VS Code'] },
  { title: 'Core', items: ['DSA', 'OOP', 'System Design', 'API Development'] },
]

export const experience = [
  {
    period: 'May 2026 – Jul 2026',
    company: 'Teamarcs Technologies Pvt. Ltd.',
    role: 'Software Engineer Intern',
    location: 'Noida',
    certificate: 'https://drive.google.com/file/d/1Ja3UOtzqTfPNyKH5tyl7l4GzvOQeBrHQ/view',
    stack: ['React.js', 'JavaScript', 'NestJS', 'PostgreSQL'],
    summary:
      'Worked on the DayCare Management System, a production enterprise application, across frontend, backend, REST APIs and database integration.',
    points: [
      'Developed and improved the Admin Panel, Children Management, Staff Management, Waitlist and Dashboard modules.',
      'Built the complete Leave Management module end-to-end: Allocation, Application, Summary, Balance Tracking, History and Analytics.',
    ],
    modules: ['Admin Panel', 'Children Management', 'Staff Management', 'Waitlist', 'Dashboard', 'Leave Management'],
  },
  {
    period: 'May 2025 – Jul 2025',
    company: 'Bharat Electronics Limited',
    role: 'Embedded Systems Intern',
    location: 'Pune',
    certificate: 'https://drive.google.com/file/d/1_3K-sexUP56pXJzAU3w4me9TWOCAraGW/view',
    stack: ['PCB Design', 'Sensor Fusion', 'Control Algorithms'],
    summary: 'Hardware and control-systems work for defence electronics and autonomous robotics.',
    points: [
      'Designed and tested a power adapter PCB for a Laser Range Finder, cutting design iteration time by 20%.',
      'Developed sensor fusion and navigation control algorithms for robotics, lowering navigation error by 15%.',
    ],
    metrics: [
      { value: '20%', label: 'faster design iteration' },
      { value: '15%', label: 'lower navigation error' },
    ],
  },
]

export const leadership = [
  { period: '2025–2026', title: 'Vice Secretary', org: 'IEEE Robotics and Automation Society', detail: 'Organized 12+ workshops for 100+ members.' },
  { period: '2024', title: 'Winner', org: 'Urjotsav', detail: 'Built an autonomous maze-solving robot, competing against 250+ teams from 40+ colleges.' },
  { period: '2024', title: '1st Runner-Up', org: 'Meshmerize, IIT Bombay TechFest', detail: 'Podium finish among 2,000+ participants and 150+ teams.' },
  { period: '2023', title: 'Event Coordinator', org: 'Urjotsav Technical Fest', detail: 'Coordinated 8+ technical events for 200+ participants.' },
]

export const projects = [
  {
    id: 'hirelens',
    name: 'HireLens',
    type: 'AI-Powered Recruitment Platform',
    description:
      'Resume uploads, role-based access, and a parsing and job-matching engine that turns resumes into tailored role recommendations.',
    tech: ['React.js', 'NestJS', 'PostgreSQL', 'Gemini API', 'JWT'],
    highlights: [
      { value: '150+', label: 'resumes analyzed' },
      { value: '100+', label: 'candidate profiles' },
      { value: '20+', label: 'REST APIs' },
      { value: '<300 ms', label: 'avg. response time' },
    ],
    liveUrl: 'https://hire-lens-one-ashy.vercel.app/',
    repoUrl: 'https://github.com/Rishabh-39/HireLens',
    featured: true,
  },
  {
    id: 'bitsync',
    name: 'BitSync',
    type: 'Real-Time Chat Application',
    description:
      'One-to-one and group messaging over Socket.IO, with JWT authentication, secure sessions and REST APIs for users, messages and channels.',
    tech: ['React.js', 'Express.js', 'PostgreSQL', 'Socket.IO', 'JWT'],
    highlights: [
      { value: '<100 ms', label: 'message latency' },
      { value: '1:1', label: 'direct chat' },
      { value: 'Groups', label: 'group chat' },
    ],
    liveUrl: 'https://bit-sync-chat-app.vercel.app/',
    repoUrl: 'https://github.com/Rishabh-39/BitSync-Chat-App',
  },
  {
    id: 'algosort',
    name: 'AlgoSort',
    type: 'Sorting Algorithm Visualizer',
    description:
      'Step-by-step animated Bubble, Merge and Quick Sort built with React hooks and GSAP, with speed controls and 4 configurable array sizes.',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'GSAP'],
    highlights: [
      { value: '3', label: 'algorithms' },
      { value: '98%', label: 'max speed control' },
      { value: '4', label: 'array sizes' },
    ],
    liveUrl: 'https://algo-sort-visualizer-tau.vercel.app/',
    repoUrl: 'https://github.com/Rishabh-39/AlgoSort-Visualizer',
  },
]

export const reasons = [
  { icon: 'layers', title: 'Full-Stack Development', text: 'React.js frontends, NestJS and Express APIs, PostgreSQL databases — I built the Leave Management module across every layer.' },
  { icon: 'briefcase', title: 'Real Internship Experience', text: 'Production work on an enterprise app at Teamarcs and engineering exposure at BEL.' },
  { icon: 'code', title: 'Strong CS Fundamentals', text: 'C++, Java and Python alongside DSA, OOP and system design — the base under every stack I use.' },
  { icon: 'puzzle', title: 'Engineering Breadth', text: 'Beyond web apps: PCB design, sensor fusion and navigation control at BEL, with measurable results.' },
  { icon: 'users', title: 'Leadership & Collaboration', text: 'Vice Secretary at IEEE RAS and coordinator for 8+ events at Urjotsav.' },
  { icon: 'zap', title: 'Quick Learner', text: 'Picked up tools like NestJS, Socket.IO, GSAP and the Gemini API and shipped them in real projects.' },
]
