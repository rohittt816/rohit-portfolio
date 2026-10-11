
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-[#0b0f0e] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f0e]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="text-xl font-bold tracking-tight">
            Rohit<span className="text-emerald-400">.816</span>
          </a>

          <button
            className="rounded-lg border border-white/15 px-3 py-2 text-sm md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-300 transition hover:text-emerald-400"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-300"
            >
              Let's Talk
            </a>
          </div>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-5 border-t border-white/10 px-6 py-5 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-emerald-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <main
        id="home"
        className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-10"
      >
        <section>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Java Full Stack Developer
          </div>

          <p className="mb-3 text-lg text-gray-400">Hello, I'm</p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Rohit
            <br />
            <span className="text-emerald-400">Jangid.</span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold text-gray-200 sm:text-2xl">
            Java Full Stack Developer
          </h2>


          <p className="mt-5 max-w-xl text-base leading-8 text-gray-400">
            I build full-stack web applications using Java, Spring Boot,
            React, REST APIs, and MySQL. I enjoy creating responsive
            user interfaces, developing secure backend services, and
            connecting everything into practical software solutions.
          </p>


          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-300"
            >
              Explore My Projects →
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-400"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              download="Rohit-Jangid-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 px-6 py-3 font-semibold text-emerald-300 transition hover:-translate-y-1 hover:bg-emerald-400/10"
            >
              <span>↓</span> Download Resume
            </a>

          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
            <a
              href="https://github.com/rohittt816"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-emerald-400"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-emerald-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>


        {/* Creative Profile Card */}
        <section className="mx-auto w-full max-w-md">
          <div className="group relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 via-white/[0.04] to-transparent p-6 shadow-2xl shadow-emerald-950/30 sm:p-8">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl transition duration-500 group-hover:bg-emerald-400/20" />

            <div className="relative flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 opacity-70 blur-md transition group-hover:opacity-100" />
                <img
                  src="/profile.jpg"
                  alt="Rohit Jangid"
                  className="relative h-48 w-48 rounded-full border-4 border-[#0b0f0e] object-cover object-center"
                />
                <span className="absolute bottom-3 right-2 h-5 w-5 rounded-full border-4 border-[#0b0f0e] bg-emerald-400" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                Hello, world!
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Rohit Jangid
              </h2>

              <p className="mt-2 text-gray-400">
                Java Full Stack Developer
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {["Java", "Spring Boot", "React", "MySQL"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-gray-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="#projects"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-black transition hover:-translate-y-1 hover:bg-emerald-300"
              >
                Explore my work <span>↘</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* About Section */}
      <section id="about" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            About Me
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400">
            I'm a Computer Science Engineering student passionate about
            Java full-stack development. I enjoy building practical
            applications, designing responsive user interfaces, and
            developing backend APIs using Spring Boot and MySQL.
            My goal is to become a skilled software engineer by
            continuously learning and building real-world projects.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['Education', 'B.Tech CSE'],
              ['Backend', 'Java & Spring Boot'],
              ['Frontend', 'React & Tailwind CSS'],
            ].map(([title, value]) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-sm text-gray-500">{title}</p>
                <p className="mt-2 font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            What I work with
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Technical Skills
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Programming',
                skills: ['Java', 'JavaScript', 'SQL'],
              },
              {
                title: 'Frontend',
                skills: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
              },
              {
                title: 'Backend',
                skills: ['Spring Boot', 'REST APIs', 'Spring Security'],
              },
              {
                title: 'Database',
                skills: ['MySQL', 'JPA', 'Hibernate'],
              },
              {
                title: 'Tools',
                skills: ['Git', 'GitHub', 'Postman', 'Maven'],
              },
              {
                title: 'Core Concepts',
                skills: ['OOP', 'DSA', 'DBMS', 'HTTP'],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-emerald-400/15 bg-emerald-400/5 px-3 py-2 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            What I've built
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Featured Projects
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                name: 'JMD EV HUB',
                description:
                  'An electric scooter showroom application with product listings, accessories, customer accounts, orders, and service management.',
                stack: 'React · Spring Boot · MySQL',
                status: 'Built with React & Spring Boot',
                github: 'https://github.com/rohittt816/jmd-ev-hub',
              },
              {
                name: 'Finance Tracker',
                status: 'Built with java & Spring Boot',
                description:
                  'A personal finance application designed to track income, expenses, transactions, and financial summaries.',
                stack: 'Android Java · Spring Boot · MySQL',
                github: 'https://github.com/rohittt816/FinanceTracker',
              },
            ].map((project) => (
              <article
                key={project.name}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-emerald-400/40"
              >
                <p className="text-sm font-medium text-emerald-400">
                  Featured Project
                </p>

                <h3 className="mt-4 text-2xl font-bold">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-emerald-400">
                  ● {project.status}
                </p>

                <p className="mt-4 flex-1 leading-7 text-gray-400">
                  {project.description}
                </p>

                <p className="mt-6 text-sm text-gray-300">
                  {project.stack}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  View on GitHub ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Get in touch
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Let's work together.
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              I'm interested in software development opportunities,
              internships, and collaborating on meaningful projects.
              Feel free to reach out.
            </p>

            <div className="mt-8 space-y-4 text-gray-300">
              <p>
                <span className="text-gray-500">Email: </span>
                <a
                  href="mailto:rohitjangidrj396@gmail.com"
                  className="hover:text-emerald-400"
                >
                  rohitjangidrj396@gmai.com
                </a>
              </p>

              <p>
                <span className="text-gray-500">GitHub: </span>
                <a
                  href="https://github.com/rohittt816"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400"
                >
                  github.com/rohittt816 ↗
                </a>
              </p>

              <p>
                <span className="text-gray-500">LinkedIn: </span>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400"
                >
                  Connect with me ↗
                </a>
              </p>
            </div>
          </div>

          <form
            action="mailto:YOUR_EMAIL@example.com"
            method="post"
            encType="text/plain"
            className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm text-gray-300"
              >
                Your Name
              </label>
              <input
                id="name"
                name="Name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-emerald-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-gray-300"
              >
                Your Email
              </label>
              <input
                id="email"
                name="Email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-emerald-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="Message"
                rows="4"
                placeholder="Write your message..."
                required
                className="w-full resize-y rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-emerald-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-300"
            >
              Send Message →
            </button>

            <p className="text-xs leading-5 text-gray-500">
              This basic form opens your default email application.
              A backend or form service is needed for direct message delivery.
            </p>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <a href="#home" className="text-lg font-bold">
            Rohit<span className="text-emerald-400">.816</span>
          </a>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Rohit Jangid. Built with React and Tailwind CSS.
          </p>

          <a
            href="#home"
            className="text-sm text-gray-400 transition hover:text-emerald-400"
          >
            Back to top ↑
          </a>
        </div>
      </footer>

    </div>
  )
}

export default App
