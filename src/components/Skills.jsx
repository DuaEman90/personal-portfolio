import React from "react";
import {
  ExternalLink,
  Download,
  Award,
  ArrowUpRight,
} from "lucide-react";

function Skills() {
  const tools = [
    {
      name: "Git & GitHub",
      description: "Version control & collaboration",
      image: "github.png",
    },
    {
      name: "Figma",
      description: "UI/UX design & prototyping",
      image: "figma.png",
    },
    {
      name: "Netlify",
      description: "Frontend deployment",
      image: "netlify.webp",
    },
    {
      name: "Vercel",
      description: "Modern web deployment",
      image: "vercel.png",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#06091a] px-5 py-24 sm:px-8 md:py-32"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute -left-52 top-[18%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.045] blur-[150px]" />

      <div className="pointer-events-none absolute -right-52 bottom-[-100px] h-[450px] w-[450px] rounded-full bg-blue-600/[0.05] blur-[150px]" />

      <div className="pointer-events-none absolute left-[40%] top-[-220px] h-[380px] w-[500px] rounded-full bg-cyan-400/[0.025] blur-[140px]" />

      {/* ================= MAIN ================= */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="mb-20 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.45em] text-cyan-400 sm:text-sm">
            My Toolkit
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Tools &{" "}
            <span className="text-cyan-400">More</span>
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            The tools and resources I use to design, build and bring
            digital experiences to life.
          </p>
        </div>

        {/* ================= TOOLS ================= */}

        <div className="relative">

          {/* Section Label */}

          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Tools I Use
            </span>

            <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent" />
          </div>

          {/* Tools Grid */}

          <div className="grid gap-5 md:grid-cols-2">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.045] sm:p-7"
              >
                {/* Bottom Glow */}

                <div className="pointer-events-none absolute -bottom-16 left-[20%] h-28 w-40 rounded-full bg-cyan-400/[0.09] blur-[40px]" />

                {/* Top Glow */}

                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/[0.06] blur-[45px]" />

                <div className="relative flex items-center gap-5">

                  {/* Logo */}

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/15 bg-white/[0.04] shadow-[0_0_25px_rgba(34,211,238,0.07)] transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-400/30">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="h-9 w-9 object-contain"
                    />
                  </div>

                  {/* Text */}

                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-white sm:text-lg">
                      {tool.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                      {tool.description}
                    </p>
                  </div>

                  {/* Arrow */}

                  <ArrowUpRight
                    size={19}
                    className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CERTIFICATION ================= */}

        <div className="relative mt-20">

          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400/30" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Certification
            </span>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-400/30" />
          </div>

          {/* Certificate Card */}

          <div className="group relative overflow-hidden rounded-[28px] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.055] via-white/[0.025] to-blue-500/[0.045] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-9">

            {/* Glow */}

            <div className="pointer-events-none absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-cyan-400/[0.09] blur-[65px]" />

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/[0.07] blur-[70px]" />

            <div className="relative flex flex-col gap-7 md:flex-row md:items-center">

              {/* Certificate Icon */}

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                <Award size={34} strokeWidth={1.5} />
              </div>

              {/* Content */}

              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-500">
                  Professional Certification
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  Frontend Web Development
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400">
                  A certification focused on building responsive,
                  modern and user-friendly web experiences using
                  frontend technologies.
                </p>
              </div>

              {/* View Certificate */}

              <button
                type="button"
                className="group/btn inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-5 py-3 text-xs font-semibold text-cyan-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.10] hover:text-cyan-300"
              >
                View Certificate

                <ExternalLink
                  size={14}
                  className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                />
              </button>
            </div>

            {/* Verification */}

            <div className="relative mt-7 flex items-center gap-3 border-t border-white/[0.07] pt-5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

              <span className="text-xs text-gray-500">
                Certificate verification will be available here
              </span>
            </div>
          </div>
        </div>

        {/* ================= RESUME ================= */}

        <div className="relative mt-20">

          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] px-7 py-9 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-10 sm:py-11">

            {/* Glow */}

            <div className="pointer-events-none absolute -bottom-20 -left-24 h-48 w-48 rounded-full bg-cyan-400/[0.08] blur-[70px]" />

            <div className="pointer-events-none absolute -right-24 -top-20 h-48 w-48 rounded-full bg-blue-500/[0.07] blur-[70px]" />

            <div className="relative flex flex-col items-center justify-between gap-7 md:flex-row">

              {/* Text */}

              <div className="text-center md:text-left">
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <span className="h-px w-8 bg-cyan-400/50" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
                    My Resume
                  </p>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Let's go beyond the portfolio.
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
                  Explore my education, experience, projects and
                  technical background in more detail.
                </p>
              </div>

              {/* Download */}

              <a
                href="/resume.pdf"
                download="Dua-Eman-Resume.pdf"
                className="group inline-flex shrink-0 cursor-pointer items-center gap-3 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-bold text-[#06091a] shadow-[0_0_30px_rgba(34,211,238,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.35)]"
              >
                <Download
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />

                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#06091a] to-transparent" />
    </section>
  );
}

export default Skills;