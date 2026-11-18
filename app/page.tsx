export default function Home() {
  const projects = [
    {
      name: "CarpoolingApp",
      description:
        "A desktop carpooling management system built with Java, JavaFX, and Maven, utilizing embedded SQLite for real-time ride bookings and driver-passenger profiles.",
      tech: ["Java", "Object-Oriented Programming" , "JavaFX", "SQLite", "Maven"],
      href: "https://github.com/Ayoub-Yak/CarpoolingApp",
    },
    {
      name: "task-app-v1",
      description:
        "A full-stack task management system built with Java 21, Spring Boot, and React, featuring a layered REST API architecture and a containerized PostgreSQL database via Docker.",
      tech: ["TypeScript", "React/Node"," Spring Boot", "Java", "Docker", "PostgreSQL"],
      href: "https://github.com/Ayoub-Yak/task-app-v1",
    },
    {
      name: "Blog-app",
      description:
        "A full-stack blogging platform powered by a Spring Boot backend, TypeScript frontend, and Docker, implementing stateless RESTful APIs and role-based access control.",
      tech: ["Spring Boot", "TypeScript", "Java", "Docker"],
      href: "https://github.com/Ayoub-Yak/Blog-app",
    },
    {
      name: "task-manager-app (Focus Flow)",
      description:
        "An offline-first cross-platform mobile task manager built with React Native, Expo, and TypeScript, featuring recurring habit streaks, gesture controls, and an integrated Pomodoro focus timer.",
      tech: ["TypeScript", "React Native", "Expo"],
      href: "https://github.com/Ayoub-Yak/task-manager-app",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-slate-700 selection:text-white">
      <main className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <section className="flex min-h-[70vh] flex-col justify-center py-20 sm:min-h-[78vh]">
          <p className="mb-5 font-mono text-sm text-slate-400">Hello, I&apos;m</p>
          <h1 className="text-5xl font-semibold tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
            Ayoub
          </h1>
          <h2 className="mt-4 text-xl font-medium tracking-tight text-slate-300 sm:text-2xl">
            Software Engineering Student
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Passionate about building robust backend systems, scalable full-stack
            applications, and clean user interfaces.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Ayoub-Yak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-800 px-4 text-sm font-medium text-slate-200 transition-colors hover:border-slate-700 hover:bg-slate-900"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ayoub-yaakoubi-8b4a3232b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-800 px-4 text-sm font-medium text-slate-200 transition-colors hover:border-slate-700 hover:bg-slate-900"
            >
              LinkedIn
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-100 px-4 text-sm font-medium text-slate-950 transition-colors hover:bg-white"
            >
              Download Resume
            </a>
          </div>
        </section>

        <section id="projects" className="border-t border-slate-800 py-16 sm:py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-slate-500">
                Selected work
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
                Featured Projects
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group flex min-h-64 flex-col rounded-xl border border-slate-800 bg-slate-950 p-6 transition-colors hover:border-slate-700"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-100">
                    {project.name}
                  </h3>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="shrink-0 text-slate-500 transition-colors group-hover:text-slate-300"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                    >
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>

                <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-slate-800 bg-slate-900/40 px-2.5 py-1 font-mono text-xs text-slate-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>&copy; 2026 Ayoub</p>
          <a
            href="mailto:yaacoubi.ayoub1@gmail.com"
            className="font-medium text-slate-300 transition-colors hover:text-white"
          >
            Get in touch
          </a>
        </div>
      </footer>
    </div>
  );
}
