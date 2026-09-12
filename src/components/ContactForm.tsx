"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    setStatus("sending");
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/hello@brightpathtuition.london",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...payload,
            _subject: "Bright Path Tuition — website enquiry",
            _template: "table",
          }),
        },
      );
      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-navy/10 bg-soft p-8 text-center">
        <p className="text-lg font-semibold text-navy">
          Thank you — we&apos;ve received your enquiry and will reply within one
          working day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-gold hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-2xl border border-navy/10 bg-soft p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-navy">Parent/guardian name</span>
          <input
            name="parent_name"
            required
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
            placeholder="Full name"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-navy">Email</span>
          <input
            type="email"
            name="email"
            required
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-navy">Phone / WhatsApp</span>
          <input
            name="phone"
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
            placeholder="07… or international number"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-navy">Student year group</span>
          <select
            name="year_group"
            required
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            <option>Year 3</option>
            <option>Year 4</option>
            <option>Year 5</option>
            <option>Year 6</option>
            <option>Year 7</option>
            <option>Year 8</option>
            <option>Year 9</option>
            <option>Year 10</option>
            <option>Year 11</option>
            <option>Year 12</option>
            <option>Year 13</option>
            <option>Other / adult learner</option>
          </select>
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-navy">Tuition type</span>
          <select
            name="tuition_type"
            required
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            <option>Group</option>
            <option>One-to-one</option>
            <option>Not sure</option>
          </select>
        </label>
        <label className="block text-sm">
          <span className="font-medium text-navy">Maths level</span>
          <select
            name="maths_level"
            required
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            <option>KS2</option>
            <option>KS3</option>
            <option>GCSE Foundation</option>
            <option>GCSE Higher</option>
            <option>A-Level</option>
          </select>
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-navy">Country / time zone</span>
          <input
            name="country_timezone"
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
            placeholder="e.g. UK / GMT, Dubai / GST"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-navy">Preferred days/times</span>
          <input
            name="preferred_times"
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
            placeholder="e.g. weekday mornings"
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className="font-medium text-navy">
          Tell us what support your child needs
        </span>
        <textarea
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
          placeholder="Current level, goals, exam board if known, anything else we should know…"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full rounded-md py-3.5 text-sm font-semibold uppercase tracking-wider disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong. Please email{" "}
          <a
            href="mailto:hello@brightpathtuition.london"
            className="font-semibold underline"
          >
            hello@brightpathtuition.london
          </a>{" "}
          or try again.
        </p>
      )}
    </form>
  );
}
