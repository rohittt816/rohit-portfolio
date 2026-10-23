import { useEffect, useState } from 'react'
import { Mail } from 'lucide-react';

import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAndroid,
} from 'react-icons/fa';

import {
  SiSpringboot,
  SiReact,
  SiMysql,
  SiTailwindcss,
  SiPostman,
} from 'react-icons/si';

/* ---------- Editable data ---------- */
const PROFILE = {
  name: 'Rohit Jangid',
  email: 'rohitjangidrj396@gmail.com',
  github: 'https://github.com/rohittt816',
  linkedin: 'https://www.linkedin.com/',
  resume: '/resume.pdf',
  photo: '/profile.jpg',
}

const NAV = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Internship', 'Contact']

const ROLES = ['Java Full Stack Developer', 'Spring Boot + React', 'Android with Java']

const SKILLS = [
  { title: 'Languages', icon: '{ }', items: ['Java', 'JavaScript', 'SQL'] },
  { title: 'Backend', icon: '⚙', items: ['Spring Boot', 'REST APIs', 'Spring Security', 'JPA', 'Hibernate'] },
  { title: 'Frontend', icon: '◧', items: ['React', 'HTML', 'CSS', 'Tailwind CSS'] },
  { title: 'Database', icon: '▤', items: ['MySQL'] },
  { title: 'Tools', icon: '⌘', items: ['Git', 'GitHub', 'Postman', 'Maven', 'Android Studio'] },
  { title: 'Core concepts', icon: '∑', items: ['OOP', 'DSA', 'DBMS', 'HTTP'] },
]

const PROJECTS = [
  {
    name: 'JMD EV HUB',
    category: 'Full Stack',
    description:
      'An electric scooter showroom application with product listings, accessories, customer accounts, orders, and service management.',
    features: ['Product and accessory listings', 'Customer accounts and orders', 'Service management'],
    stack: ['React', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/rohittt816/jmd-ev-hub',
    demo: '', // add live URL
    image: '/projects/JMD_logo.png',
  },
  {
    name: 'Finance Tracker',
    category: 'Android',
    description:
      'A personal finance application designed to track income, expenses, transactions, and financial summaries.',
    features: ['Income and expense tracking', 'Transaction history', 'Financial summaries'],
    stack: ['Android Java', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/rohittt816/FinanceTracker',
    demo: '',
    image: '/projects/ft_logo_image.png',
  },
  {
    name: 'Portfolio Website',
    category: 'Frontend',
    description: 'This site: a responsive single-page portfolio built with React and Tailwind CSS.',
    features: ['Responsive layout', 'Section navigation', 'Data-driven content'],
    stack: ['React', 'Vite', 'Tailwind CSS'],
    github: '', // add repo URL
    demo: '', // add Vercel URL
    image: '/projects/JR_portfolio.png',
  },
]

const CERTIFICATES = [
  {
    title: 'Cybersecurity Analyst Job Simulation',
    issuer: 'Tata (via Forage)',
    date: 'April 2026',
    skills: ['IAM', 'Security analysis', 'Solution design'],
    link: 'https://drive.google.com/file/d/1p2uPlM13TZcsaC_YiTkyH9ZK3FKHX4e7/view',
    image: '/certificates/forage.png',
  },
  {
    title: 'Cloud Foundations',
    issuer: 'AWS Academy',
    date: 'October 2025',
    skills: ['Cloud computing', 'AWS services', 'Cloud security'],
    link: 'https://drive.google.com/file/d/1rzU8nk81Ho_1RmUPxzau4qu4gNtUG4e8/view',
    image: '/certificates/AWS.png',
  },
  {
    title: 'Prompt Design in Vertex AI',
    issuer: 'Google Cloud',
    date: 'April 2026',
    skills: ['Prompt engineering', 'Vertex AI', 'Generative AI'],
    link: 'https://drive.google.com/file/d/1jJdeQzA0wzQ8Z85fQGVqRT--1dtvdHLY/view',
    image: '/certificates/googlecloud.png',
  },
];

const INTERNSHIP = {
  org: 'Internz Valley',
  role: 'Data Science Intern',
  duration: '27 Mar 2024 – 9 May 2024',
  description:
    'Two-month internship with practical exposure to data science concepts, building analytical and problem-solving skills and applying data-driven techniques to real-world problems.',
  link: 'https://drive.google.com/file/d/1jAladwuk-lEhsYjHC22s0Haygt5Gki2j/view',
  image: '/internships/Internzvally-logo.png',
}
/* ---------- Shared bits ---------- */
const focus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400'
const btnPrimary = `rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-300 ${focus}`
const btnGhost = `rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300 ${focus}`
const card = 'rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-emerald-400/40'

function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 max-w-2xl leading-7 text-gray-400">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}

function Badge({ children }) {
  return (
    <span className="rounded-md border border-emerald-400/20 bg-emerald-400/5 px-2.5 py-1 text-xs text-emerald-200">
      {children}
    </span>
  )
}

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 ${focus}`}>
      {children} <span aria-hidden>↗</span>
    </a>
  )
}

/* ---------- App ---------- */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
      setShowTop(window.scrollY > 600)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    NAV.forEach((n) => {
      const el = document.getElementById(n.toLowerCase())
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2800)
    return () => clearInterval(t)
  }, [])

  const categories = ['All', ...new Set(PROJECTS.map((p) => p.category))]
  const visible = PROJECTS.filter((p) => filter === 'All' || p.category === filter)

  return (
    <div className="min-h-screen bg-[#0c0f0e] text-white antialiased [scroll-behavior:smooth]">
      <style>{`
        html{scroll-behavior:smooth}
        @keyframes rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        .rise{animation:rise .7s cubic-bezier(.2,.7,.2,1) both}
        @keyframes fadeRole{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
        .role{animation:fadeRole .45s ease both}
        @media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}.rise,.role{animation:none}*{transition:none!important}}
      `}</style>

      <div className="fixed left-0 top-0 z-[60] h-0.5 bg-emerald-400" style={{ width: `${progress}%` }} aria-hidden />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c0f0e]/90 backdrop-blur-xl">
        <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className={`text-lg font-bold tracking-tight ${focus}`}>
            Rohit<span className="text-emerald-400">.816</span>
          </a>
          <button
            className={`rounded-lg border border-white/15 px-3 py-2 text-sm lg:hidden ${focus}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <ul className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <li key={n}>
                <a href={`#${n.toLowerCase()}`}
                  aria-current={active === n.toLowerCase() ? 'true' : undefined}
                  className={`text-sm transition hover:text-emerald-300 ${focus} ${active === n.toLowerCase() ? 'text-emerald-400' : 'text-gray-400'
                    }`}>
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {menuOpen && (
          <ul id="mobile-nav" className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 lg:hidden">
            {NAV.map((n) => (
              <li key={n}>
                <a href={`#${n.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                  className={`${active === n.toLowerCase() ? 'text-emerald-400' : 'text-gray-300'} ${focus}`}>
                  {n}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="mx-auto grid min-h-[88vh] max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="rise text-lg text-gray-400">Hi, I’m {PROFILE.name}.</p>
            <h1 className="rise mt-4 text-4xl font-semibold leading-[1.08] tracking-tight [animation-delay:.1s] sm:text-6xl">
              Building scalable applications.
              <br />
              <span className="text-gray-400">Solving real problems.</span>
            </h1>
            <p className="rise mt-6 h-8 text-xl text-emerald-300 [animation-delay:.2s]" aria-live="polite">
              <span key={roleIndex} className="role inline-block">{ROLES[roleIndex]}</span>
            </p>
            <p className="rise mt-4 max-w-xl leading-8 text-gray-400 [animation-delay:.3s]">
              I build full-stack applications with Java, Spring Boot, React, REST APIs, and MySQL, and
              Android apps in Java, with responsive interfaces and secure backend services.
            </p>
            <div className="rise mt-9 flex flex-wrap gap-4 [animation-delay:.4s]">
              <a href="#projects" className={btnPrimary}>Explore My Projects</a>
              <a href={PROFILE.resume} download="Rohit-Jangid-Resume.pdf" className={btnGhost}>Download Resume</a>
            </div>
            <div className="rise mt-8 flex gap-6 [animation-delay:.5s]">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="text-white transition-colors hover:text-orange-400"
              >
                GitHub ↗
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-white transition-colors hover:text-sky-400"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="rise mx-auto w-full max-w-sm [animation-delay:.3s]">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-emerald-400/15 blur-2xl" aria-hidden />
              <img src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} width="384" height="460"
                className="relative aspect-[5/6] w-full rounded-[2rem] border border-white/10 object-cover object-center" />
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about" title="About">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5 leading-8 text-gray-400">
              <p>
                I’m a Computer Science Engineering student (B.Tech, Parul University, 2023–2027)
                focused on Java full-stack development. I like building practical applications:
                responsive interfaces on the front, Spring Boot and MySQL APIs behind them.
              </p>
              <p>
                I learn by shipping real projects, and I’m looking for software development
                opportunities and internships where I can keep doing that.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                ['Backend', 'Java, Spring Boot, MySQL'],
                ['Frontend', 'React, Tailwind CSS'],
                ['Mobile', 'Android with Java'],
                ['Projects', 'JMD EV HUB, Finance Tracker'],
              ].map(([k, v]) => (
                <div key={k} className={`${card} p-5`}>
                  <dt className="text-sm text-gray-500">{k}</dt>
                  <dd className="mt-1 font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Skills */}

        <Section id="skills" title="Skills">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((g) => (
              <div
                key={g.title}
                className={`${card} group p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-white/[0.05]`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400/10 font-mono text-sm text-emerald-300">
                    {g.icon}
                  </span>
                  <h3 className="text-lg font-semibold transition group-hover:text-emerald-300">
                    {g.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {g.items.map((s) => {
                    const logos = {
                      Java: <FaJava className="text-[#ED8B00]" />,
                      "Spring Boot": <SiSpringboot className="text-[#6DB33F]" />,
                      React: <SiReact className="text-[#61DAFB]" />,
                      MySQL: <SiMysql className="text-[#4479A1]" />,
                      Android: <FaAndroid className="text-[#3DDC84]" />,
                      Git: <FaGitAlt className="text-[#F05032]" />,
                      GitHub: <FaGithub />,
                      HTML: <FaHtml5 className="text-[#E34F26]" />,
                      HTML5: <FaHtml5 className="text-[#E34F26]" />,
                      CSS: <FaCss3Alt className="text-[#1572B6]" />,
                      CSS3: <FaCss3Alt className="text-[#1572B6]" />,
                      JavaScript: <FaJs className="text-[#F7DF1E]" />,
                      Tailwind: <SiTailwindcss className="text-[#06B6D4]" />,
                      TailwindCSS: <SiTailwindcss className="text-[#06B6D4]" />,
                      Postman: <SiPostman className="text-[#FF6C37]" />,
                    };
                    return (
                      <div
                        key={s}
                        title={s}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-gray-300 transition hover:border-emerald-400/40 hover:bg-emerald-400/5 hover:text-white"
                      >
                        <span className="text-xl">
                          {logos[s] || (
                            <span className="text-emerald-300">✦</span>
                          )}
                        </span>
                        <span>{s}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Section>


        {/* Projects */}
        <Section id="projects" title="Projects" intro="Applications I’ve built end to end.">
          <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)} aria-pressed={filter === c}
                className={`rounded-full border px-4 py-1.5 text-sm transition ${focus} ${filter === c ? 'border-emerald-400 bg-emerald-400 text-black' : 'border-white/15 text-gray-300 hover:border-emerald-400/50'
                  }`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {visible.map((p) => (
              <article key={p.name} className={`${card} group flex flex-col overflow-hidden hover:-translate-y-1`}>
                {p.image ? (
                  <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" className="aspect-video w-full object-cover" />
                ) : (
                  <div className="grid aspect-video place-items-center bg-gradient-to-br from-emerald-400/10 to-transparent text-4xl font-semibold text-emerald-300/60" aria-hidden>
                    {p.name.split(' ').map((w) => w[0]).join('')}
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-semibold">{p.name}</h3>
                  <p className="mt-3 leading-7 text-gray-400">{p.description}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-gray-300">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2"><span className="text-emerald-400" aria-hidden>✓</span>{f}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">{p.stack.map((s) => <Badge key={s}>{s}</Badge>)}</div>
                  <div className="mt-6 flex flex-1 items-end gap-5">
                    {p.github && <ExternalLink href={p.github}>GitHub</ExternalLink>}
                    {p.demo && <ExternalLink href={p.demo}>Live demo</ExternalLink>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Certificates */}
        <Section id="certificates" title="Certificates" intro="Verified learning that supports my development work.">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {CERTIFICATES.map((c) => (
              <article
                key={c.link}
                className={`${card} flex flex-col p-6 hover:-translate-y-1`}
              >
                <div className="mb-5 flex h-30 items-center justify-center rounded-xl bg-white p-1 ">

                  {c.image && (
                    <img
                      src={c.image}
                      alt={`${c.issuer} logo`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  )}
                </div>

                <p className="text-sm text-emerald-400">{c.issuer}</p>

                <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>

                {c.date && (
                  <p className="mt-1 text-sm text-gray-500">{c.date}</p>
                )}

                <div className="mt-4 flex flex-1 flex-wrap content-start gap-2">
                  {c.skills.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>

                <div className="mt-6">
                  <ExternalLink href={c.link}>View certificate</ExternalLink>
                </div>
              </article>
            ))}

          </div>
        </Section>

        {/* Internship */}

        <Section id="internship" title="Internship">
          <article className={`${card} max-w-3xl p-6 sm:p-8`}>
           <div className="mb-6 flex h-40 w-full max-w-xs items-center justify-center rounded-xl bg-white p-3">
              <img
                src={INTERNSHIP.image}
                alt={`${INTERNSHIP.org} logo`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-2xl font-semibold">{INTERNSHIP.role}</h3>
              <p className="text-sm text-gray-500">{INTERNSHIP.duration}</p>
            </div>

            <p className="mt-1 text-lg text-emerald-300">{INTERNSHIP.org}</p>

            <p className="mt-4 leading-7 text-gray-400">
              {INTERNSHIP.description}
            </p>

            <div className="mt-6">
              <ExternalLink href={INTERNSHIP.link}>
                View internship certificate
              </ExternalLink>
            </div>
          </article>
        </Section>


        {/* Contact */}
        <Section
          id="contact"
          title="Let’s work together"
          intro="I’m open to software development roles, internships, and collaboration on meaningful projects."
        >
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${PROFILE.email}`}
              className={`${btnPrimary} inline-flex items-center gap-3`}
            >
              <Mail size={20} />
              <span>Email me</span>
            </a>

            <a
              href="https://wa.me/919680699317"
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnGhost} inline-flex items-center gap-3`}
            >
              <FaWhatsapp size={21} className="text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnGhost} inline-flex items-center gap-3`}
            >
              <FaGithub size={21} />
              <span>GitHub</span>
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnGhost} inline-flex items-center gap-3`}
            >
              <FaLinkedin size={21} className="text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
          </div>

          <p className="mt-6 flex items-center gap-2 text-gray-500">
            <Mail size={18} className="text-emerald-400" />
            {PROFILE.email}
          </p>
        </Section>

      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Built with React and Tailwind CSS.</p>
          <a href="#home" className={`hover:text-emerald-400 ${focus}`}>Back to top</a>
        </div>
      </footer>

      {showTop && (
        <a href="#home" aria-label="Back to top"
          className={`fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full bg-emerald-400 text-black shadow-lg transition hover:bg-emerald-300 ${focus}`}>
          ↑
        </a>
      )}
    </div>
  )
}