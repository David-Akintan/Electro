"use client";
import { useState } from "react";

// TODO: replace with the company's email address.
const EMAIL = "enigoinc@gmail.com";

// No backend yet: the form builds a mailto link so a request is never silently lost.
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const field =
    "mt-1 w-full rounded-sm border border-ink/30 bg-white px-4 py-3 text-base text-ink focus:border-ink";

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        const d = new FormData(e.currentTarget);
        const body = `Name: ${d.get("name")}\nPhone or email: ${d.get("contact")}\n\n${d.get("message")}`;
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Quote request")}&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
    >
      <label className="block text-sm font-medium">
        Your name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block text-sm font-medium">
        Phone or email
        <input name="contact" required autoComplete="email" className={field} />
      </label>
      <label className="block text-sm font-medium">
        What do you need?
        <textarea
          name="message"
          required
          rows={4}
          className={field}
          placeholder="e.g. 60 kVA generator service for our hotel"
        />
      </label>
      <button className="btn btn-dark w-full sm:w-auto">Request a quote</button>
      {sent && (
        <p role="status" className="text-sm text-ink/70">
          Your email app should have opened with the request. If not, write to{" "}
          {EMAIL}.
        </p>
      )}
    </form>
  );
}
