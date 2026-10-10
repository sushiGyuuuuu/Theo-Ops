
import { ArrowUpRight, ArrowUp, Mail } from "lucide-react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "AI Automation",
  "Web Development",
  "Workflow Integration",
  "AI-Powered Solutions",
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    text: "GH",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    text: "in",
  },
  {
    label: "Email",
    href: "mailto:your-email@example.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#08090c] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-indigo-500/[0.08] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#home"
              aria-label="THEO.OPS home"
              className="group inline-flex text-2xl font-bold tracking-tight transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="text-white transition-colors duration-300 group-hover:text-indigo-400">
                THEO
              </span>
              <span className="text-indigo-400 transition-colors duration-300 group-hover:text-white">
                .OPS
              </span>
            </a>

            <p className="mt-5 text-sm leading-7 text-zinc-400">
              Building smarter digital experiences through AI automation and
              modern web development. Turning repetitive processes into
              efficient workflows and ideas into reality.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition-colors hover:text-white"
            >
              Let's build something useful
              <ArrowUpRight size={16} />
            </a>

            <div className="mt-7 flex items-center gap-3">
              {socials.map(({ label, href, text, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noreferrer"}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-indigo-400/10 hover:text-indigo-300"
                >
                  {Icon ? (
                    <Icon size={18} strokeWidth={1.8} />
                  ) : (
                    <span className="text-sm font-bold">{text}</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-400 transition-colors duration-200 hover:text-indigo-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              What I Do
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-zinc-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Get in Touch
            </h3>
            <p className="mt-5 text-sm leading-6 text-zinc-400">
              Have an idea, a workflow to improve, or a project in mind?
              Let's talk about it.
            </p>

            <a
              href="mailto:your-email@example.com"
              className="mt-4 inline-flex items-center gap-2 break-all text-sm text-indigo-300 transition-colors hover:text-white"
            >
              your-email@example.com
              <ArrowUpRight size={15} className="shrink-0" />
            </a>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} THEO.OPS. All rights reserved.
          </p>

          <p className="text-xs text-zinc-500">
            Designed & built by{" "}
            <a
              href="#home"
              className="font-medium text-zinc-300 transition-colors hover:text-indigo-300"
            >
              Theo
            </a>
            .
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="inline-flex items-center gap-2 self-start text-xs text-zinc-400 transition-colors hover:text-indigo-300 sm:self-auto"
          >
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}