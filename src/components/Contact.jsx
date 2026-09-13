
import React from "react";

import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] px-5 py-9 text-white sm:px-8 sm:py-10 md:px-12 lg:px-16"
    >
      {/* ================= AMBIENT GLOW ================= */}

      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/[0.09] blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-blue-500/[0.07] blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-cyan-400/[0.055] blur-[120px]" />

      <div className="pointer-events-none absolute left-[18%] top-[18%] h-2 w-2 rounded-full bg-cyan-300/30 blur-[2px]" />

      <div className="pointer-events-none absolute right-[22%] top-[42%] h-1.5 w-1.5 rounded-full bg-cyan-300/30 blur-[2px]" />

      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="mb-7 text-center">

          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-[-0.045em] text-white sm:text-4xl md:text-5xl">
            Let&apos;s{" "}
            <span className="text-cyan-400">
              Connect
            </span>
            <span className="text-cyan-400">.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-xs leading-5 text-slate-500 sm:text-sm">
            Have an idea or project in mind? Let&apos;s connect and turn it
            into something meaningful.
          </p>

        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">

          {/* ================= LEFT ================= */}

          <div className="space-y-3">

            {/* Intro */}

            <div className="group relative overflow-hidden rounded-2xl border border-cyan-400/[0.08] bg-white/[0.025] p-5 shadow-[0_0_45px_rgba(34,211,238,0.035)] transition-all duration-500 hover:border-cyan-400/[0.18] hover:shadow-[0_0_55px_rgba(34,211,238,0.07)] sm:p-6">

              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/[0.07] blur-[55px] transition-all duration-500 group-hover:bg-cyan-400/[0.13]" />

              <div className="relative">

                <div className="mb-4 flex items-center justify-between">

                  <span className="text-[9px] uppercase tracking-[0.25em] text-slate-600">
                    Get in touch
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/[0.12] bg-cyan-400/[0.025] text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.07] group-hover:shadow-[0_0_18px_rgba(34,211,238,0.12)]">
                    <FiArrowUpRight size={15} />
                  </span>

                </div>

                <h3 className="max-w-xs text-xl font-semibold leading-snug sm:text-2xl">
                  Let&apos;s turn your
                  <span className="text-cyan-400"> ideas </span>
                  into reality.
                </h3>

                <p className="mt-2 max-w-sm text-xs leading-5 text-slate-500 sm:text-sm">
                  I&apos;m always open to interesting projects, ideas and
                  opportunities to learn and build.
                </p>

              </div>
            </div>

            {/* Contact Info */}

            <div className="grid grid-cols-2 gap-3">

              {/* Email */}

              <a
                href="mailto:d27065204@gmail.com"
                className="group relative overflow-hidden rounded-2xl border border-cyan-400/[0.07] bg-white/[0.025] p-4 shadow-[0_0_35px_rgba(34,211,238,0.025)] transition-all duration-400 hover:-translate-y-1 hover:border-cyan-400/[0.2] hover:bg-cyan-400/[0.025] hover:shadow-[0_0_35px_rgba(34,211,238,0.07)]"
              >

                <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-cyan-400/[0.08] blur-[40px] opacity-0 transition-all duration-500 group-hover:opacity-100" />

                <div className="relative">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/[0.12] bg-cyan-400/[0.025] text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.06] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.12)]">
                    <FiMail size={16} />
                  </div>

                  <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-slate-600">
                    Email
                  </p>

                  <p className="mt-1 truncate text-xs text-slate-300 transition-colors group-hover:text-cyan-300">
                    d27065204@gmail.com
                  </p>

                </div>
              </a>

              {/* Location */}

              <div className="group relative overflow-hidden rounded-2xl border border-cyan-400/[0.07] bg-white/[0.025] p-4 shadow-[0_0_35px_rgba(34,211,238,0.025)] transition-all duration-400 hover:-translate-y-1 hover:border-cyan-400/[0.2] hover:bg-cyan-400/[0.025] hover:shadow-[0_0_35px_rgba(34,211,238,0.07)]">

                <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-cyan-400/[0.08] blur-[40px] opacity-0 transition-all duration-500 group-hover:opacity-100" />

                <div className="relative">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/[0.12] bg-cyan-400/[0.025] text-cyan-400">
                    <FiMapPin size={16} />
                  </div>

                  <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-slate-600">
                    Location
                  </p>

                  <p className="mt-1 text-xs text-slate-300">
                    Pakistan
                  </p>

                </div>
              </div>

            </div>

            {/* Social */}

            <div className="group relative overflow-hidden rounded-2xl border border-cyan-400/[0.07] bg-white/[0.025] px-4 py-3 shadow-[0_0_35px_rgba(34,211,238,0.02)] transition-all duration-400 hover:border-cyan-400/[0.16] hover:shadow-[0_0_40px_rgba(34,211,238,0.05)]">

              <div className="pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-full bg-cyan-400/[0.06] blur-[40px]" />

              <div className="relative flex items-center justify-between">

                <div>

                  <p className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
                    Social
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Find me online
                  </p>

                </div>

                <div className="flex gap-2">

                  <a
                    href="https://github.com/DuaEman90"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.015] text-slate-400 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-300 hover:shadow-[0_0_16px_rgba(34,211,238,0.1)]"
                  >
                    <FaGithub size={15} />
                  </a>

                  <a
                    href="https://linkedin.com/in/dua-eman-31783a405/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.015] text-slate-400 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-300 hover:shadow-[0_0_16px_rgba(34,211,238,0.1)]"
                  >
                    <FaLinkedinIn size={15} />
                  </a>

                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT FORM ================= */}

          <div className="group relative overflow-hidden rounded-2xl border border-cyan-400/[0.09] bg-white/[0.025] p-5 shadow-[0_0_55px_rgba(34,211,238,0.035)] transition-all duration-500 hover:border-cyan-400/[0.15] hover:shadow-[0_0_65px_rgba(34,211,238,0.06)] sm:p-6">

            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-cyan-400/[0.07] blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-44 w-44 rounded-full bg-blue-500/[0.05] blur-[80px]" />

            <div className="relative">

              {/* Form Header */}

              <div className="mb-5 flex items-center justify-between">

                <div>

                  <p className="text-[9px] uppercase tracking-[0.25em] text-cyan-400">
                    Message
                  </p>

                  <h3 className="mt-1.5 text-lg font-semibold text-white">
                    Tell me about your project
                  </h3>

                </div>

                <div className="hidden h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/[0.1] bg-cyan-400/[0.025] text-cyan-400/60 sm:flex">
                  <FiSend size={15} />
                </div>

              </div>

              <form>

                {/* Name + Email */}

                <div className="grid gap-3 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-[9px] uppercase tracking-[0.2em] text-slate-600"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-white/[0.08] bg-[#050816]/70 px-3.5 py-2.5 text-xs text-white outline-none transition-all duration-300 placeholder:text-slate-700 focus:border-cyan-400/40 focus:bg-cyan-400/[0.025] focus:shadow-[0_0_20px_rgba(34,211,238,0.05)]"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-[9px] uppercase tracking-[0.2em] text-slate-600"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-white/[0.08] bg-[#050816]/70 px-3.5 py-2.5 text-xs text-white outline-none transition-all duration-300 placeholder:text-slate-700 focus:border-cyan-400/40 focus:bg-cyan-400/[0.025] focus:shadow-[0_0_20px_rgba(34,211,238,0.05)]"
                    />

                  </div>

                </div>

                {/* Subject */}

                <div className="mt-3">

                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-[9px] uppercase tracking-[0.2em] text-slate-600"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    className="w-full rounded-lg border border-white/[0.08] bg-[#050816]/70 px-3.5 py-2.5 text-xs text-white outline-none transition-all duration-300 placeholder:text-slate-700 focus:border-cyan-400/40 focus:bg-cyan-400/[0.025] focus:shadow-[0_0_20px_rgba(34,211,238,0.05)]"
                  />

                </div>

                {/* Message */}

                <div className="mt-3">

                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-[9px] uppercase tracking-[0.2em] text-slate-600"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-lg border border-white/[0.08] bg-[#050816]/70 px-3.5 py-2.5 text-xs text-white outline-none transition-all duration-300 placeholder:text-slate-700 focus:border-cyan-400/40 focus:bg-cyan-400/[0.025] focus:shadow-[0_0_20px_rgba(34,211,238,0.05)]"
                  />

                </div>

                {/* Button */}

                <button
                  type="submit"
                  className="group/btn cursor-pointer mt-4 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-2.5 text-xs font-semibold text-[#050816] shadow-[0_0_20px_rgba(34,211,238,0.12)] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                >
                  <FiSend size={14} />

                  Send Message

                  <FiArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </button>

              </form>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">

          <p className="text-[9px] uppercase tracking-[0.25em] text-slate-600">
            Open to new ideas & collaborations
          </p>

          <p className="text-[9px] uppercase tracking-[0.25em] text-slate-700">
            © 2026 Dua Eman
          </p>

        </div>

      </div>
    </section>
  );
};

export default Contact;

