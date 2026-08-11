import { motion } from 'framer-motion'
import {
  ArrowDown,
  Award,
  BriefcaseBusiness,
  Code2,
  CircleUser,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Mail,
  Menu,
  Phone,
  Rocket,
  Server,
  Sparkles,
  Trophy,
  X,
} from 'lucide-react'
import { useState } from 'react'

const navItems = ['Hero', 'About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Achievements', 'Contact']

const techBadges = ['React', 'Node.js', 'Express.js', 'MongoDB', 'Java', 'Python', 'AWS']

const skills = [
  { category: 'Languages', icon: Code2, items: ['C', 'C++', 'Java', 'Python'] },
  { category: 'Frontend', icon: Sparkles, items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { category: 'Backend', icon: Server, items: ['Node.js', 'Express.js'] },
  { category: 'Database', icon: Database, items: ['MongoDB', 'MySQL'] },
  { category: 'Core Concepts', icon: GraduationCap, items: ['DSA', 'OOP', 'DBMS'] },
  { category: 'Cloud', icon: Rocket, items: ['AWS'] },
]

const projects = [
  {
    title: 'Smart Tourist Safety Platform',
    description: 'AI-powered tourist safety platform helping travelers with emergency support and route assistance.',
    tech: ['MERN', 'Gemini AI', 'Google Maps'],
    features: ['Emergency SOS', 'AI safety assistant', 'Route guidance', 'Incident reporting'],
    accent: 'from-gold/30 via-gold/10 to-transparent',
  },
  {
    title: 'Farm2Basket',
    description: 'Platform connecting farmers directly with consumers.',
    tech: ['MERN'],
    features: ['Product listings', 'Farmer marketplace', 'Order management', 'Delivery coordination'],
    accent: 'from-emerald-400/20 via-gold/10 to-transparent',
  },
  {
    title: 'FinWise',
    description: 'AI-powered financial literacy platform.',
    tech: ['React', 'Node.js', 'MongoDB', 'Python'],
    features: ['User authentication', 'Financial education', 'Semantic search', 'REST APIs'],
    accent: 'from-sky-400/20 via-gold/10 to-transparent',
  },
]

const certifications = ['C Programming', 'Data Structures & Algorithms', 'SQL Basics and Intermediate']

const achievements = [
  'Winner of Freshathon at Sri Eshwar College of Engineering',
  'Selected for SIH 2025 National Level Submission Round',
]

const experienceHighlights = [
  'Developed MERN applications',
  'Created REST APIs',
  'Integrated MongoDB Atlas',
  'Built scalable backend services',
  'Improved frontend usability',
]

const contactItems = [
  { label: 'Email', value: 'Available on request', icon: Mail, href: 'aadithya2807@gmail.com' },
  { label: 'Phone', value: 'Available on request', icon: Phone, href: '+91 9488355023' },
  { label: 'GitHub', value: 'GitHub Profile', icon: GitBranch, href: 'https://github.com/aadithya2007' },
  { label: 'LinkedIn', value: 'LinkedIn Profile', icon: CircleUser, href: 'https://www.linkedin.com/in/aadithya-a-9a97b1304' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

function scrollToSection(section) {
  const id = section.toLowerCase()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-8 text-mist/75 sm:text-lg">{description}</p>}
    </motion.div>
  )
}

function GlassCard({ children, className = '' }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-glass backdrop-blur-2xl ${className}`}
    >
      {children}
    </motion.div>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNav = (item) => {
    setIsOpen(false)
    scrollToSection(item)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-obsidian/60 backdrop-blur-2xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <button onClick={() => handleNav('Hero')} className="group flex items-center gap-3" aria-label="Go to hero section">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-gold/35 bg-gold/10 text-gold shadow-gold transition group-hover:bg-gold group-hover:text-obsidian">
            A
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.28em] text-white sm:block">Aadithya</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.slice(1).map((item) => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              className="rounded-full px-4 py-2 text-sm font-medium text-mist/75 transition hover:bg-gold/10 hover:text-gold"
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-2xl border border-white/10 p-2 text-white transition hover:border-gold/40 hover:text-gold lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-obsidian/95 px-5 py-4 lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.slice(1).map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item)}
                className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-mist/80 transition hover:bg-gold/10 hover:text-gold"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(252,163,17,0.16),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(20,33,61,0.72),transparent_38%),linear-gradient(135deg,#000000_0%,#070b13_48%,#14213D_100%)]" />
      <motion.div
        animate={{ y: [0, -18, 0], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-8 top-32 h-40 w-40 rounded-full bg-gold-radial blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 22, 0], x: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-28 right-10 h-56 w-56 rounded-full border border-gold/20 bg-navy/35 blur-sm"
      />
      <div className="absolute inset-0 opacity-[0.06] luxury-grid" />

      <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.h1 variants={fadeUp} className="text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
          Aadithya <span className="gold-text">A</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-5 text-xl font-semibold text-mist sm:text-2xl">
          Full Stack Developer | MERN Developer
        </motion.p>
        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-3xl text-base leading-8 text-mist/75 sm:text-lg">
          Passionate software developer focused on building modern web applications, AI-powered solutions, and scalable backend systems.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap justify-center gap-3">
          {techBadges.map((badge, index) => (
            <motion.span
              key={badge}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.15, ease: 'easeInOut' }}
              className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-mist backdrop-blur-xl hover:border-gold/40 hover:text-gold"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="/Aadithya-A-Resume.pdf" className="btn-primary">
            <Download size={18} /> Download Resume
          </a>
          <button onClick={() => scrollToSection('Projects')} className="btn-secondary">
            <ExternalLink size={18} /> View Projects
          </button>
          <button onClick={() => scrollToSection('Contact')} className="btn-ghost">
            <Mail size={18} /> Contact Me
          </button>
        </motion.div>
      </motion.div>

      <button onClick={() => scrollToSection('About')} className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/10 p-3 text-gold transition hover:border-gold/50 hover:bg-gold/10" aria-label="Scroll to about section">
        <ArrowDown className="animate-bounce" size={22} />
      </button>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader eyebrow="About" title="Clean architecture, purposeful products" description="A focused engineering profile blending academic foundations, internship experience, and a strong passion for full-stack product development." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="lg:row-span-2">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
            <GraduationCap size={28} />
          </div>
          <h3 className="text-2xl font-bold text-white">Education</h3>
          <p className="mt-4 text-lg font-semibold text-mist">Bachelor of Engineering in Computer Science and Engineering</p>
          <p className="mt-2 text-mist/70">Sri Eshwar College of Engineering</p>
          <div className="mt-6 inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">CGPA: 8.14</div>
        </GlassCard>
        <GlassCard>
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
            <BriefcaseBusiness size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white">Experience</h3>
          <p className="mt-3 text-mist/80">Software Development Intern at <span className="text-gold">Dyashin Technosoft</span>, working across MERN applications, APIs, MongoDB integration, and professional project architecture.</p>
        </GlassCard>
        <GlassCard>
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
            <Rocket size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white">Career Objective</h3>
          <p className="mt-3 text-mist/80">Aspiring software engineer passionate about full-stack development, cloud technologies, and building impactful digital solutions.</p>
        </GlassCard>
      </motion.div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader eyebrow="Skills" title="Modern engineering toolkit" description="A practical stack for building polished frontends, robust APIs, reliable databases, and cloud-aware applications." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ category, icon: Icon, items }) => (
          <GlassCard key={category}>
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/10 text-gold"><Icon size={24} /></div>
              <h3 className="text-xl font-bold text-white">{category}</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {items.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm font-medium text-mist/85 transition hover:border-gold/40 hover:text-gold">{item}</span>
              ))}
            </div>
          </GlassCard>
        ))}
      </motion.div>
    </section>
  )
}

function BrowserPreview({ project }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.06] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-gold" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
      </div>
      <div className={`bg-gradient-to-br ${project.accent} p-5`}>
        <div className="rounded-xl border border-gold/20 bg-obsidian/55 p-5 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.28em] text-gold">Project Preview</p>
          <h4 className="mt-4 text-2xl font-black text-white">{project.title}</h4>
          <div className="mt-5 grid gap-2">
            {project.tech.map((tech) => (
              <div key={tech} className="h-3 rounded-full bg-white/10"><div className="h-3 rounded-full bg-gold/70" style={{ width: `${Math.min(90, 38 + tech.length * 7)}%` }} /></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeader eyebrow="Projects" title="Product-minded project work" description="No screenshots or stock visuals: each case study uses a sleek miniature browser card to keep the interface cohesive and premium." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <GlassCard key={project.title} className="flex flex-col">
            <BrowserPreview project={project} />
            <h3 className="mt-6 text-2xl font-bold text-white">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-mist/75">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => <span key={tech} className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">{tech}</span>)}
            </div>
            <ul className="mt-5 space-y-2">
              {project.features.map((feature) => <li key={feature} className="flex items-center gap-2 text-sm text-mist/80"><span className="h-1.5 w-1.5 rounded-full bg-gold" />{feature}</li>)}
            </ul>
          </GlassCard>
        ))}
      </motion.div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeader eyebrow="Experience" title="Industry internship foundation" description="Hands-on exposure to full-stack MERN workflows, API construction, database connectivity, and scalable service design." />
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="mx-auto max-w-4xl">
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-glass backdrop-blur-2xl sm:p-8">
          <div className="absolute bottom-8 left-8 top-8 hidden w-px bg-gradient-to-b from-gold via-gold/50 to-transparent sm:block" />
          <div className="relative sm:pl-14">
            <span className="absolute left-[-64px] top-1 hidden h-6 w-6 rounded-full border-4 border-obsidian bg-gold shadow-gold sm:block" />
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-gold">Software Development Intern</p>
            <h3 className="mt-3 text-3xl font-bold text-white">Dyashin Technosoft</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {experienceHighlights.map((highlight) => (
                <div key={highlight} className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-mist/80">{highlight}</div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeader eyebrow="Certifications" title="Verified learning milestones" description="Focused credentials that support programming fundamentals, problem solving, and database fluency." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-5 md:grid-cols-3">
        {certifications.map((certification) => (
          <GlassCard key={certification} className="text-center">
            <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gold/10 text-gold"><Award size={28} /></div>
            <h3 className="text-xl font-bold text-white">{certification}</h3>
          </GlassCard>
        ))}
      </motion.div>
    </section>
  )
}

function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <SectionHeader eyebrow="Achievements" title="Recognition and impact" description="Highlights that reflect initiative, teamwork, ideation, and competitive product-building capability." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-5 md:grid-cols-2">
        {achievements.map((achievement) => (
          <GlassCard key={achievement}>
            <div className="flex gap-5">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gold/10 text-gold"><Trophy size={28} /></div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Achievement</p>
                <h3 className="mt-3 text-xl font-bold leading-8 text-white">{achievement}</h3>
              </div>
            </div>
          </GlassCard>
        ))}
      </motion.div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section-shell pb-12">
      <SectionHeader eyebrow="Contact" title="Let's Build Something Amazing Together" description="Open to placement opportunities, internships, collaboration, and full-stack software engineering conversations." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {contactItems.map(({ label, value, icon: Icon, href }) => (
          <motion.a
            key={label}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            href={href}
            className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 text-center shadow-glass backdrop-blur-2xl transition hover:border-gold/40"
          >
            <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gold/10 text-gold"><Icon size={26} /></div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">{label}</p>
            <p className="mt-3 text-sm text-mist/75">{value}</p>
          </motion.a>
        ))}
      </motion.div>
      <footer className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-mist/50">
        <p>© 2026 Aadithya A. Crafted with React, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </section>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-obsidian font-sans text-white selection:bg-gold selection:text-obsidian">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Achievements />
      <Contact />
    </main>
  )
}
