"use client";

import { useState } from "react";
import contact from "@/data/contact.json";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "error" | "sending" | "sent";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(v: typeof values): Errors {
    const next: Errors = {};
    if (!v.name.trim()) next.name = "Please enter your name.";
    if (!v.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(v.email.trim())) next.email = "Enter a valid email address.";
    if (!v.message.trim()) next.message = "Please write a short message.";
    return next;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      setStatus("error");
      return;
    }

    setStatus("sending");
    // No backend is attached: hand the message to the visitor's mail client
    // with everything pre-filled. This is honest — nothing is silently "sent".
    const subject = encodeURIComponent(`Portfolio enquiry — ${values.name.trim()}`);
    const body = encodeURIComponent(
      `${values.message.trim()}\n\n— ${values.name.trim()}\n${values.email.trim()}`
    );
    const href = `mailto:${contact.email}?subject=${subject}&body=${body}`;

    window.setTimeout(() => {
      window.location.href = href;
      setStatus("sent");
    }, 350);
  }

  const fieldBase =
    "peer w-full bg-transparent pb-3 pt-2 text-text placeholder:text-text-tertiary/70 focus:outline-none";

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-8">
      <Field
        id="name"
        label="Name"
        error={errors.name}
        className={fieldBase}
        value={values.name}
        onChange={handleChange}
        autoComplete="name"
      />
      <Field
        id="email"
        label="Email"
        type="email"
        error={errors.email}
        className={fieldBase}
        value={values.email}
        onChange={handleChange}
        autoComplete="email"
      />

      <div>
        <div className="group relative border-b border-border transition-colors duration-200 focus-within:border-text">
          <label
            htmlFor="message"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-tertiary"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${fieldBase} resize-none`}
            placeholder="Tell me a little about it…"
          />
        </div>
        {errors.message ? (
          <p id="message-error" className="mt-2 text-xs text-accent">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-2 border-b border-text pb-1 text-sm font-medium text-text transition-opacity duration-200 hover:opacity-60 disabled:cursor-wait disabled:opacity-50"
        >
          {status === "sending" ? "Opening your mail app…" : "Send message"}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>

        <p
          role="status"
          aria-live="polite"
          className={`text-xs text-text-secondary transition-opacity duration-200 ${
            status === "sent" ? "opacity-100" : "opacity-0"
          }`}
        >
          Your email app should have opened with the message ready to send.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  ...props
}: {
  id: string;
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <div className="group relative border-b border-border transition-colors duration-200 focus-within:border-text">
        <label
          htmlFor={id}
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-tertiary"
        >
          {label}
        </label>
        <input
          id={id}
          name={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs text-accent">
          {error}
        </p>
      ) : null}
    </div>
  );
}
