import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import contact from "../data/contact";

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

export default function Contact() {
  const [status, setStatus] = useState("idle"); 

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const socials = [
    contact.email && { label: "Email", href: `mailto:${contact.email}` },
    contact.github && { label: "GitHub", href: contact.github },
    contact.linkedin && { label: "LinkedIn", href: contact.linkedin },
  ].filter(Boolean);

  return (
    <section id="contact" className="scroll-mt-1 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-indigo-400/20 bg-indigo-400/[0.05] p-6 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold tracking-[0.22em] text-indigo-400">
              {contact.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              {contact.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
              {contact.description}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-9 grid max-w-2xl gap-4 sm:grid-cols-2"
          >
            {}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <input
              required
              name="name"
              type="text"
              aria-label="Your name"
              placeholder="Your name"
              autoComplete="name"
              className="contact-field"
            />

            <input
              required
              name="email"
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              className="contact-field"
            />

            <textarea
              required
              name="message"
              rows={4}
              aria-label="What would you like to automate?"
              placeholder="What would you like to automate?"
              className="contact-field resize-y sm:col-span-2"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-semibold text-black transition hover:bg-indigo-300 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
            >
              {status === "sending" ? "Sending…" : contact.button}
              {status !== "sending" && (
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              )}
            </button>

            <p
              role="status"
              aria-live="polite"
              className="text-center text-sm sm:col-span-2"
            >
              {status === "sent" && (
                <span className="text-emerald-300">
                  Thanks! Your message is on its way. I&apos;ll reply soon.
                </span>
              )}
              {status === "error" && (
                <span className="text-red-300">
                  Something went wrong. Please try again or email me directly.
                </span>
              )}
            </p>
          </form>

          {socials.length > 0 && (
            <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-400">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={label === "Email" ? undefined : "_blank"}
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 transition hover:text-indigo-300"
                  >
                    {label}
                    <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}