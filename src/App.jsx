import { ArrowUpRight } from "lucide-react";

import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Reveal from "./components/Reveal";

import hero from "./data/hero";
import projects from "./data/projects";
import {
  services,
  technologies,
  processSteps,
} from "./data/skills";

import "./App.css";

const year = new Date().getFullYear();

const heroTags = ["AI Agents", "Workflow Automation", "API Integrations"];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-bold tracking-[0.22em] text-indigo-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}

function WorkflowPreview() {
  const steps = [
    {
      number: "01",
      title: "Customer sends an inquiry",
      detail: "New lead detected",
      style: "border-white/10 bg-white/[0.03]",
    },
    {
      number: "02",
      title: "AI understands & qualifies it",
      detail: "AI processing",
      style: "border-indigo-400/30 bg-indigo-400/10",
    },
    {
      number: "03",
      title: "CRM & team updated automatically",
      detail: "Data synchronized",
      style: "border-white/10 bg-white/[0.03]",
    },
    {
      number: "04",
      title: "Customer gets a fast response",
      detail: "Workflow completed",
      style: "border-emerald-400/20 bg-emerald-400/[0.08]",
    },
  ];

  return (
    <div className="glow relative rounded-3xl border border-white/10 bg-white/[0.03] p-3 sm:p-5">
      <div className="rounded-2xl border border-white/10 bg-[#0d0f14] p-5 sm:p-7">
        <div className="mb-7 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-white">
              Automation overview
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              Example workflow
            </p>
          </div>

          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Automated
          </span>
        </div>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <div key={step.number}>
              <div
                className={`flex items-center gap-4 rounded-xl border p-4 ${step.style}`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] font-mono text-xs text-indigo-300">
                  {step.number}
                </span>

                <div className="min-w-0">
                  <p className="text-sm font-medium leading-6 text-zinc-100">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    {step.detail}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="ml-8 h-5 w-px bg-indigo-400/40" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-zinc-400">
          <span>Workflow status</span>
          <span className="text-emerald-300">Ready to deploy</span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="gridbg relative scroll-mt-24 pt-36 pb-24 sm:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/[0.08] px-4 py-2 text-[11px] font-semibold tracking-wider text-indigo-200 sm:text-xs">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-indigo-400" />
            {hero.badge}
          </div>

          <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            {hero.title}
            <br />
            <span className="text-indigo-400">{hero.highlight}</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              {hero.primaryCta}{" "}
              <span aria-hidden="true" className="ml-1">→</span>
            </a>

            <a
              href="#work"
              className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.05]"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-400 sm:gap-x-5">
            {heroTags.map((tag, index) => (
              <li key={tag} className="flex gap-x-4 sm:gap-x-5">
                {tag}
                {index < heroTags.length - 1 && (
                  <span aria-hidden="true">·</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <WorkflowPreview />
      </div>
    </section>
  );
}

function TechStrip() {
  return (
    <div className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-4 px-6 py-7 text-xs font-medium uppercase tracking-[0.16em] text-zinc-400 sm:gap-x-12">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-5 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="WHAT I AUTOMATE"
          title="Turn repetitive work into systems."
          description="Custom automation built around your actual workflow—not another one-size-fits-all chatbot."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="service-card rounded-2xl border border-white/10 bg-white/[0.02] p-7"
            >
              <span className="font-mono text-xs text-indigo-400">
                {service.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {service.description}
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-indigo-400/40 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="scroll-mt-5 bg-white/[0.02] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Proof over promises."
          description="Example automation concepts designed around real business problems."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="project-card rounded-3xl border border-white/10 bg-[#0b0d11] p-6 sm:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-wider text-zinc-400">
                  {project.category}
                </span>

                <span className="font-mono text-xs text-zinc-500">
                  {project.number}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {project.workflow.map((step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300">
                      {step}
                    </span>

                    {index < project.workflow.length - 1 && (
                      <span aria-hidden="true" className="text-indigo-400">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {project.result && (
                <p className="mt-6 text-sm font-medium text-emerald-300">
                  {project.result}
                </p>
              )}

              {project.stack?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md bg-white/[0.05] px-2 py-1 font-mono text-[11px] text-zinc-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-7 flex items-center justify-between gap-3">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-indigo-300">
                  {project.status ?? "CONCEPT / DEMO"}
                </p>

                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-300 transition hover:text-indigo-200"
                  >
                    Watch demo
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="scroll-mt-34 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="THE PROCESS"
          title="From bottleneck to automation."
          description="A clear process for building systems that solve a specific problem."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-white/10 p-5 transition hover:border-indigo-400/30"
            >
              <span className="font-mono text-xs text-indigo-400">
                0{index + 1}
              </span>

              <h3 className="mt-5 font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-48 border-y border-white/10 bg-white/[0.02] py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-bold tracking-[0.22em] text-indigo-400">
            ABOUT ME
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Hi, I&apos;m Gabriel Theodore Perez.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-zinc-400">
          <p>
            I&apos;m a developer focused on turning repetitive business processes
            into clean, intelligent automations for small businesses and
            startups.
          </p>

          <p>
            I believe AI should do more than look impressive. It should solve
            a real problem, fit into the way a business works, and create
            measurable value.
          </p>

          <p>
            My approach combines software development, thoughtful workflow
            design, and practical AI integration.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="font-semibold text-zinc-300">
          THEO<span className="text-indigo-400">.OPS</span>
        </a>

        <p>© {year} Gabriel Theodore Perez</p>

        <p>AI Automation · Built with React &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#08090c] text-white">
      <Navigation />

      <main>
        <Hero />
        <TechStrip />
        <Reveal>
          <Services />
        </Reveal>
        <Projects />
        <Process />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}