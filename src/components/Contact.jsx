import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import contact from "../data/contact";

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;
const ENDPOINT_READY = /^https?:\/\//.test(ENDPOINT ?? "");
const TIMEOUT_MS = 15000;

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const sending = status === "sending";

  async function handleSubmit(event) {
    event.preventDefault();
    if (sending) return;

    if (!ENDPOINT_READY) {
      setErrorMessage("The form isn't configured yet.");
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
        signal: controller.signal,
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        const detail = data?.errors?.map((e) => e.message).join(", ");
        throw new Error(detail || "The server rejected the message.");
      }

      setStatus("sent");
    } catch (error) {
      if (error.name === "AbortError") {
        setErrorMessage("The request timed out.");
      } else if (error instanceof TypeError) {
        setErrorMessage("Couldn't reach the server. Check your connection.");
      } else {
        setErrorMessage(error.message);
      }
      setStatus("error");
    } finally {
      clearTimeout(timer);
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

          {status === "sent" ? (
            <div
              role="status"
              className="mx-auto mt-9 max-w-2xl rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-8 text-center"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="mx-auto h-10 w-10 text-emerald-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m8 12 3 3 5-6" />
              </svg>
              <h3 className="mt-4 text-xl font-bold text-white">Message sent</h3>
              <p className="mt-2 text-zinc-400">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-medium text-indigo-300 transition hover:text-indigo-200"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-9 grid max-w-2xl gap-4 sm:grid-cols-2"
            >

              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <input
                type="hidden"
                name="_subject"
                value="New automation inquiry from my portfolio"
              />

              <input
                required
                name="name"
                type="text"
                maxLength={100}
                aria-label="Your name"
                placeholder="Your name"
                autoComplete="name"
                className="contact-field"
              />

              <input
                required
                name="email"
                type="email"
                maxLength={254}
                aria-label="Email address"
                placeholder="Email address"
                autoComplete="email"
                className="contact-field"
              />

              <textarea
                required
                name="message"
                rows={4}
                minLength={10}
                maxLength={3000}
                aria-label="What would you like to automate?"
                placeholder="What would you like to automate?"
                className="contact-field resize-y sm:col-span-2"
              />

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-semibold text-black transition hover:bg-indigo-300 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
              >
                {sending ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black"
                    />
                    Sending…
                  </>
                ) : (
                  <>
                    {contact.button}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </>
                )}
              </button>

              {status === "error" && (
                <p
                  role="alert"
                  className="text-center text-sm text-red-300 sm:col-span-2"
                >
                  {errorMessage || "Something went wrong."} Please try again, or
                  email me at{" "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="underline underline-offset-2 hover:text-red-200"
                  >
                    {contact.email}
                  </a>
                  .
                </p>
              )}

              {contact.note && (
                <p className="text-center text-xs text-zinc-500 sm:col-span-2">
                  {contact.note}
                </p>
              )}
            </form>
          )}

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