"use client";

import React, { useMemo, useState } from "react";

type Tag = "AI" | "NLP" | "Full-Stack" | "Cloud" | "Data" | "Web";

type ProjectLink = {
  label: "GitHub" | "Live Demo" | "Case Study";
  href: string;
};

type Project = {
  title: string;
  featured?: boolean;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  tags: Tag[];
  links: ProjectLink[];
};

const PROJECTS: Project[] = [
  {
    title: "AI Shopping Assistant",
    featured: true,
    tagline: "NLP-driven product recommendation for fashion queries",
    description:
      "An end-to-end AI shopping assistant that understands natural language shopping requests and returns ranked product recommendations. Built with modular NLP components and a structured product database to support experimentation and future model comparisons.",
    highlights: [
      "Designed an NLP pipeline: intent classification, style extraction, and price parsing",
      "Implemented fuzzy matching + ranking over a structured product database (e.g., MySQL)",
      "Built a clean, modular architecture to support ablation studies and model/API comparison",
    ],
    tech: ["Python", "Transformers", "PyTorch", "MySQL", "RapidFuzz", "Pandas"],
    tags: ["AI", "NLP", "Data", "Full-Stack"],
    links: [
      { label: "GitHub", href: "https://github.com/OrcasJi/AI-shopping-assistant" },
    ],
  },
  {
    title: "Cloudflare AI Agent (Workers + Durable Objects)",
    featured: true,
    tagline: "Edge-deployed AI agent with memory and prompt documentation",
    description:
      "A lightweight AI agent web app deployed on Cloudflare Workers, using Durable Objects for stateful memory. Designed for simple UX, clear prompts, and reproducible setup — ideal as a practical systems + AI integration demo.",
    highlights: [
      "Implemented conversational memory using Durable Objects (stateful edge storage)",
      "Built a clean UI and deployment workflow for fast iteration",
      "Documented AI prompts and system behaviour for transparency and reproducibility",
    ],
    tech: ["TypeScript", "Cloudflare Workers", "Durable Objects", "HTML/CSS"],
    tags: ["Cloud", "Web", "Full-Stack"],
    links: [
      { label: "GitHub", href: "https://github.com/OrcasJi/cf_ai_cloudflare_agent" },
    ],
  },
  {
    title: "Mira — AI Companion (Hackathon 2nd Place)",
    featured: true,
    tagline: "Zero cold-start AI companion powered by 紫微斗数 astrology + real-time voice",
    description:
      "Built for an AI Aesthetics 24-hour hackathon — awarded 2nd place. Mira is a voice-first AI companion that knows you from the moment you arrive. Enter your birth date and time, and Mira generates a personalised Zi Wei Dou Shu (紫微斗数) chart, maps you to one of four archetypal personas, and opens with a spoken introduction drawn from real chart insights. Entire codebase written with Claude as the AI coding environment.",
    highlights: [
      "Designed a full 紫微斗数 pipeline using the iztro library — parses birth data into 12-palace charts and extracts dominant stars across Self, Relationships, and Career palaces",
      "Engineered four distinct LLM personas (Sovereign, Flame, Seer, Warmth) each with bilingual (EN/CN) system prompts derived directly from chart output",
      "Integrated Alibaba DashScope (Qwen) for LLM inference and GLM-4-Voice for real-time spoken dialogue",
      "Shipped a polished Next.js 14 app — onboarding → animated character birth → voice encounter → multi-turn dialogue — within 24 hours using Claude as the primary coding environment",
    ],
    tech: ["Next.js 14", "TypeScript", "DashScope (Qwen)", "GLM-4-Voice", "iztro", "Claude", "Tailwind CSS"],
    tags: ["AI", "Full-Stack", "Web"],
    links: [
      { label: "GitHub", href: "https://github.com/OrcasJi/mira" },
    ],
  },
  {
    title: "Personal Portfolio Website",
    tagline: "Minimal, recruiter-friendly portfolio with fast performance",
    description:
      "A clean personal website to showcase projects, experience, and contact details. Focused on strong information hierarchy, readability, and deployability.",
    highlights: [
      "Built with Next.js App Router + Tailwind for a clean, responsive layout",
      "Deployed to Vercel with automatic updates on push",
      "Structured pages for fast scanning: Home, Projects, About/CV, Contact",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    tags: ["Web", "Full-Stack"],
    links: [
      { label: "GitHub", href: "https://github.com/OrcasJi/personal-website" },
    ],
  },
];

// --- UI helpers
function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const FILTERS: Array<{ label: string; value: Tag | "ALL" }> = [
  { label: "All", value: "ALL" },
  { label: "AI", value: "AI" },
  { label: "NLP", value: "NLP" },
  { label: "Full-Stack", value: "Full-Stack" },
  { label: "Cloud", value: "Cloud" },
  { label: "Data", value: "Data" },
  { label: "Web", value: "Web" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<Tag | "ALL">("ALL");

  const filtered = useMemo(() => {
    if (active === "ALL") return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-zinc-500">Selected work</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Projects
            </h1>
            <p className="mt-3 max-w-2xl leading-relaxed text-zinc-600">
              A focused selection of work demonstrating practical engineering and applied AI —
              with clear outcomes, clean architecture, and deployability.
            </p>
          </div>

          <div className="flex gap-2">
            <a href="/" className="btn-secondary">
              Home
            </a>
            <a href="/contact" className="btn-primary">
              Contact
            </a>
          </div>
        </header>

        {/* Filters */}
        <section className="mt-10">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const isActive = active === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  className={cx(
                    "rounded-full px-4 py-2 text-sm transition",
                    isActive
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "border border-zinc-200 bg-white/70 text-zinc-700 hover:bg-zinc-50"
                  )}
                  type="button"
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            Showing <span className="font-medium text-zinc-800">{filtered.length}</span>{" "}
            project{filtered.length === 1 ? "" : "s"}.
          </p>
        </section>

        {/* Grid */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          {filtered.map((p) => (
            <article key={p.title} className="card card-hover p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                      {p.title}
                    </h2>
                    {p.featured && (
                      <span className="rounded-full bg-zinc-900 px-2.5 py-1 text-xs text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-zinc-600">{p.tagline}</p>
                </div>

                {/* Tags (top-right, limited) */}
                <div className="hidden flex-wrap justify-end gap-2 sm:flex">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-4 leading-relaxed text-zinc-600">{p.description}</p>

              {/* Highlights */}
              <div className="mt-5">
                <p className="text-sm font-medium text-zinc-900">Highlights</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  {p.highlights.map((h, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech */}
              <div className="mt-6">
                <p className="text-sm font-medium text-zinc-900">Tech</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="pill bg-zinc-50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-6 flex flex-wrap gap-2">
                {p.links.map((l) => {
                  const primary = l.label === "Live Demo";
                  return (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className={primary ? "btn-primary" : "btn-secondary"}
                    >
                      {l.label}
                    </a>
                  );
                })}
              </div>
            </article>
          ))}
        </section>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="card mt-12 p-10 text-center">
            <p className="text-zinc-700">No projects match this filter yet.</p>
            <button
              className="btn-primary mt-4"
              onClick={() => setActive("ALL")}
              type="button"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Footer CTA */}
        <footer className="card mt-16 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-zinc-900">Want to talk?</p>
              <p className="mt-1 text-sm text-zinc-600">
                I’m open to Graduate / Early Career roles in the UK. Feel free to reach out.
              </p>
            </div>
            <div className="flex gap-2">
              <a href="/contact" className="btn-primary">
                Contact
              </a>
              <a href="/" className="btn-secondary">
                Back to Home
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
