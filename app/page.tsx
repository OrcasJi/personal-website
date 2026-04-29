import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  const contactItems = [
    {
      title: "Email",
      desc: "Best for applications and quick reach-outs.",
      value: "orcasjiovo@gmail.com",
      href: "mailto:orcasjiovo@gmail.com",
      icon: "✉️",
    },
    {
      title: "LinkedIn",
      desc: "Connect for roles, referrals, and updates.",
      value: "linkedin.com/in/orcas-ji-about-me",
      href: "https://www.linkedin.com/in/orcas-ji-about-me",
      icon: "💼",
    },
    {
      title: "GitHub",
      desc: "Browse my projects, code, and READMEs.",
      value: "github.com/OrcasJi",
      href: "https://github.com/OrcasJi",
      icon: "💻",
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">

        {/* ── Nav ── */}
        <header className="flex items-center justify-between">
          <a
            href="#home"
            className="rounded-xl px-3 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-100/60"
            aria-label="Home"
          >
            Orcas
          </a>
          <nav className="flex items-center gap-1">
            <a href="#about" className="rounded-xl px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100/60">About</a>
            <a href="#projects" className="rounded-xl px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100/60">Projects</a>
            <a href="#contact" className="rounded-xl px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100/60">Contact</a>
          </nav>
        </header>

        {/* ══════════════════════════════════════
            HOME
        ══════════════════════════════════════ */}
        <section id="home" className="mt-16 flex justify-center scroll-mt-24">
          <div className="w-full max-w-3xl text-center">
            <p className="text-sm text-zinc-500">London, UK</p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Hi, I'm <span className="underline decoration-zinc-300">Orcas</span>.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
              I build practical software and AI-powered products — recently focusing on an{" "}
              <span className="font-medium text-zinc-800">AI Shopping Assistant</span>{" "}
              (NLP, ranking, search) and scalable web backends.
            </p>

            {/* Status card */}
            <div className="mt-10 text-left">
              <div className="card p-7">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm text-zinc-500">Currently</p>
                    <p className="mt-1 text-base font-semibold text-zinc-900">
                      Open to Graduate / Early Career roles
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                      Interested in Software Engineering, Applied ML, and data-driven product experiences — especially
                      where AI meets search, ranking, and real user journeys.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="whitespace-nowrap rounded-full border border-white/60 bg-white/40 px-3 py-1 text-xs text-zinc-600">UK-based</span>
                    <span className="whitespace-nowrap rounded-full border border-white/60 bg-white/40 px-3 py-1 text-xs text-zinc-600">Available</span>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/40 p-4 ring-1 ring-white/50">
                    <p className="text-xs uppercase tracking-wide text-zinc-500">Focus</p>
                    <p className="mt-2 text-sm font-semibold text-zinc-900">Full-stack + Applied AI</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">End-to-end building: data → logic → UI → deploy.</p>
                  </div>
                  <div className="rounded-2xl bg-white/40 p-4 ring-1 ring-white/50">
                    <p className="text-xs uppercase tracking-wide text-zinc-500">Strengths</p>
                    <p className="mt-2 text-sm font-semibold text-zinc-900">Python · TypeScript · SQL</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">Clean architecture, readable code, measurable outcomes.</p>
                  </div>
                  <div className="rounded-2xl bg-white/40 p-4 ring-1 ring-white/50">
                    <p className="text-xs uppercase tracking-wide text-zinc-500">Goal</p>
                    <p className="mt-2 text-sm font-semibold text-zinc-900">UK roles (London-friendly)</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">Graduate / Early Career — open to hybrid teams.</p>
                  </div>
                </div>

                <div className="mt-6">
                  <a href="#contact" className="inline-flex rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            ABOUT
        ══════════════════════════════════════ */}
        <section id="about" className="mt-24 scroll-mt-24">
          <p className="text-sm text-zinc-500">London, UK</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">About</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600">
            I'm <span className="font-medium text-zinc-800">Orcas</span>, a Computer Science graduate in the UK.
            I build <span className="font-medium text-zinc-800">user-focused software</span> and{" "}
            <span className="font-medium text-zinc-800">applied AI</span> projects — especially systems that
            connect NLP to real product experiences (search, ranking, and recommendations).
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/Hongli_Ji_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cv"
            >
              Download CV
            </a>
            <a href="#projects" className="btn-secondary">See Projects</a>
          </div>

          {/* What I'm looking for */}
          <div className="card card-hover mt-10 p-6">
            <h3 className="text-lg font-semibold tracking-tight text-zinc-900">What I'm looking for</h3>
            <p className="mt-3 leading-relaxed text-zinc-600">
              Graduate / Early Career roles in{" "}
              <span className="font-medium text-zinc-800">Software Engineering, Applied ML, or Data-driven Product</span>{" "}
              — where I can ship production-quality features, work with real data, and keep building end-to-end systems.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/40 p-4 ring-1 ring-white/50">
                <p className="text-xs uppercase tracking-wide text-zinc-500">Strength</p>
                <p className="mt-2 text-sm font-semibold text-zinc-900">End-to-end ownership</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">From data + logic to UI and deployment.</p>
              </div>
              <div className="rounded-2xl bg-white/40 p-4 ring-1 ring-white/50">
                <p className="text-xs uppercase tracking-wide text-zinc-500">Interest</p>
                <p className="mt-2 text-sm font-semibold text-zinc-900">NLP + Search/Ranking</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">Practical applied AI with measurable outcomes.</p>
              </div>
              <div className="rounded-2xl bg-white/40 p-4 ring-1 ring-white/50">
                <p className="text-xs uppercase tracking-wide text-zinc-500">Location</p>
                <p className="mt-2 text-sm font-semibold text-zinc-900">UK (London-friendly)</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">Open to hybrid teams.</p>
              </div>
            </div>
          </div>

          {/* Highlights + Core skills */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="card card-hover p-6">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900">Highlights</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                <li className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                  <span className="leading-relaxed">
                    Built an <span className="font-medium">AI Shopping Assistant</span> with intent classification,
                    attribute extraction, fuzzy search, and ranked recommendations.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                  <span className="leading-relaxed">
                    Comfortable across <span className="font-medium">backend logic, data pipelines</span> and
                    lightweight UIs to deliver usable products.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                  <span className="leading-relaxed">
                    Strong foundation in <span className="font-medium">Python, JavaScript/TypeScript, SQL</span> and
                    practical experimentation.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                  <span className="leading-relaxed">
                    Awarded <span className="font-medium">2nd place</span> at a hackathon for{" "}
                    <a
                      href="https://github.com/OrcasJi/mira"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium underline decoration-zinc-300 hover:decoration-zinc-600"
                    >
                      Mira
                    </a>
                    {" "}— a voice AI companion that generates a personalised 紫微斗数 chart from birth data and opens with a spoken introduction in character, built end-to-end in 24 hours.
                  </span>
                </li>
              </ul>
            </div>

            <div className="card card-hover p-6">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900">Core skills</h3>
              <div className="mt-4 space-y-5 text-sm">
                <div>
                  <p className="font-medium text-zinc-900">Languages</p>
                  <p className="mt-1 leading-relaxed text-zinc-700">Python, JavaScript/TypeScript, SQL (plus Java fundamentals)</p>
                </div>
                <div>
                  <p className="font-medium text-zinc-900">AI / Data</p>
                  <p className="mt-1 leading-relaxed text-zinc-700">
                    Transformers/NLP, classification, data cleaning, evaluation, experiment mindset
                  </p>
                </div>
                <div>
                  <p className="font-medium text-zinc-900">Engineering</p>
                  <p className="mt-1 leading-relaxed text-zinc-700">
                    APIs, modular architecture, Git, deployable web apps (Next.js), cloud basics (Workers/Vercel)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="card card-hover mt-6 p-6">
            <h3 className="text-lg font-semibold tracking-tight text-zinc-900">Experience</h3>
            <div className="mt-5 space-y-7">
              <div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="font-medium text-zinc-900">Bank of China (UK) — Technology Intern</p>
                  <p className="text-sm text-zinc-500">Internship</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  <li className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                    <span className="leading-relaxed">
                      Supported reporting and operational workflows using structured data and automation-focused thinking.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                    <span className="leading-relaxed">
                      Strengthened attention to detail, communication, and working with stakeholders under deadlines.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="font-medium text-zinc-900">
                    <a
                      href="https://github.com/OrcasJi/mira"
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-zinc-300 hover:decoration-zinc-600"
                    >
                      Mira
                    </a>
                    {" "}— Hackathon, 2nd Place
                  </p>
                  <p className="text-sm text-zinc-500">24-hour Sprint</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  <li className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                    <span className="leading-relaxed">
                      Built a voice-first AI companion that parses a 紫微斗数 (Zi Wei Dou Shu) birth chart using <span className="font-medium">iztro</span>, maps the user to one of four archetypal personas, and delivers a spoken introduction personalised to their chart — all with zero onboarding friction.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                    <span className="leading-relaxed">
                      Integrated <span className="font-medium">Alibaba DashScope (Qwen)</span> for LLM inference and <span className="font-medium">GLM-4-Voice</span> for real-time spoken dialogue; shipped a full Next.js 14 app — onboarding → animation → voice encounter — within 24 hours.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="font-medium text-zinc-900">Independent Projects</p>
                  <p className="text-sm text-zinc-500">Portfolio</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  I actively build and iterate on practical projects that combine AI + software engineering —
                  with clean READMEs, reproducible setup, and deployable demos where possible.
                </p>
              </div>
            </div>
          </div>

          {/* Education + How I work */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="card card-hover p-6">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900">Education</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li className="leading-relaxed">
                  <span className="font-medium">MSc Computer Science (2:1)</span> — Queen Mary University of London
                </li>
                <li className="leading-relaxed">
                  <span className="font-medium">BSc Computer Science (2:1)</span> — University of Birmingham
                </li>
              </ul>
            </div>
            <div className="card card-hover p-6">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900">How I work</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                I like building things that are easy to run, easy to review, and easy to extend.
                I prioritise clarity: clean architecture, readable documentation, and measurable outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PROJECTS
        ══════════════════════════════════════ */}
        <section id="projects" className="mt-24 scroll-mt-24">
          <ProjectsSection />
        </section>

        {/* ══════════════════════════════════════
            CONTACT
        ══════════════════════════════════════ */}
        <section id="contact" className="mt-24 scroll-mt-24">
          <p className="text-sm text-zinc-500">Let's connect</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600">
            If you're hiring for Graduate / Early Career roles, I'd love to chat.
            Choose the channel that's easiest for you.
          </p>

          {/* Badge */}
          <div className="mt-8">
            <div className="card inline-flex items-center gap-3 px-4 py-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-zinc-900 text-white shadow-sm">
                <span className="text-sm font-semibold">O</span>
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-900">Orcas</p>
                <p className="text-xs text-zinc-500">London, UK</p>
              </div>
              <span className="ml-2 pill">Open to roles</span>
            </div>
          </div>

          {/* Contact cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {contactItems.map((it) => (
              <a
                key={it.title}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel={it.href.startsWith("http") ? "noreferrer" : undefined}
                className="group card card-hover p-6 focus:outline-none focus:ring-2 focus:ring-zinc-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-11 w-11 place-items-center rounded-2xl bg-zinc-50 ring-1 ring-zinc-200 transition-colors"
                      aria-hidden
                    >
                      <span className="text-xl">{it.icon}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">{it.title}</p>
                      <p className="mt-1 text-xs text-zinc-500">{it.desc}</p>
                    </div>
                  </div>
                  <span className="pill transition group-hover:border-zinc-300">Open</span>
                </div>
                <div className="mt-5">
                  <p className="text-sm font-medium text-zinc-900 transition group-hover:text-zinc-950">
                    {it.value}
                  </p>
                  <p className="mt-2 text-sm text-zinc-600">
                    <span className="underline decoration-zinc-300 transition group-hover:decoration-zinc-500">
                      Click to open
                    </span>{" "}
                    →
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="card card-hover mt-10 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-zinc-900">Quick note</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                  For applications, email is usually fastest. For networking and referrals, LinkedIn works best.
                </p>
              </div>
              <a
                href="/Hongli_Ji_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cv"
              >
                Download CV (PDF)
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-zinc-500">
          <p>Built with Next.js + Tailwind.</p>
        </footer>

      </div>
    </main>
  );
}
