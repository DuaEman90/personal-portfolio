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
      link: "https://github.com/DuaEman90",
    },
    {
      name: "Figma",
      description: "UI/UX design & prototyping",
      image: "figma.png",
      link: "https://www.figma.com/files/team/1607790804477981255/recents-and-sharing/recently-viewed?fuid=1607790802571177397",
    },
    {
      name: "Netlify",
      description: "Frontend deployment",
      image: "netlify.webp",
      link: "https://www.netlify.com/",
    },
    {
      name: "Vercel",
      description: "Modern web deployment",
      image: "vercel.png",
      link: "https://vercel.com/dua-eman",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#06091a] px-5 py-12 sm:px-8 md:py-16"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute -left-52 top-[18%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.045] blur-[150px]" />

      <div className="pointer-events-none absolute -right-52 bottom-[-100px] h-[450px] w-[450px] rounded-full bg-blue-600/[0.05] blur-[150px]" />

      <div className="pointer-events-none absolute left-[40%] top-[-220px] h-[380px] w-[500px] rounded-full bg-cyan-400/[0.025] blur-[140px]" />

      {/* ================= MAIN ================= */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="mb-9 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.45em] text-cyan-400 sm:text-sm">
            My Toolkit
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Skills & <span className="text-cyan-400">More</span>
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            The tools and resources I use to design, build and bring
            digital experiences to life.
          </p>
        </div>

        {/* ================= TOOLS ================= */}

        <div className="relative">

          <div className="mb-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400/30" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Tools I Use
            </span>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-400/30" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {tools.map((tool) => (
              <a
                key={tool.name}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.045] sm:p-7"
              >
                <div className="pointer-events-none absolute -bottom-16 left-[20%] h-28 w-40 rounded-full bg-cyan-400/[0.09] blur-[40px]" />

                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/[0.06] blur-[45px]" />

                <div className="relative flex items-center gap-5">

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/15 bg-white/[0.04] shadow-[0_0_25px_rgba(34,211,238,0.07)] transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-400/30">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="h-9 w-9 object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-white sm:text-lg">
                      {tool.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                      {tool.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ================= CERTIFICATION + RESUME ================= */}

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* ================= CERTIFICATION ================= */}

          <div className="relative">

            <div className="mb-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400/30" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Certification
              </span>

              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-400/30" />
            </div>

            <div className="group relative h-full overflow-hidden rounded-[24px] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.055] via-white/[0.025] to-blue-500/[0.045] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-7">

              <div className="pointer-events-none absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-cyan-400/[0.09] blur-[65px]" />

              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/[0.07] blur-[70px]" />

              <div className="relative flex h-full flex-col">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                  <Award size={27} strokeWidth={1.5} />
                </div>

                <div className="mt-5 flex-1">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-500">
                    Professional Certification
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    Frontend Web Development
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    A certification focused on building responsive,
                    modern and user-friendly web experiences using
                    frontend technologies.
                  </p>

                </div>

                <button
                  type="button"
                  className="group/btn mt-5 inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-5 py-2.5 text-xs font-semibold text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-cyan-400/50 hover:bg-cyan-400/[0.10] hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] active:translate-y-0 active:scale-95"
                >
                  View Certificate

                  <ExternalLink
                    size={14}
                    className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                  />
                </button>

                <div className="relative mt-5 flex items-center gap-3 border-t border-white/[0.07] pt-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                  <span className="text-xs text-gray-500">
                    Certificate verification will be available here
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* ================= RESUME ================= */}

          <div className="relative">

            <div className="mb-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400/30" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                My Resume
              </span>

              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-400/30" />
            </div>

            <div className="group relative h-full overflow-hidden rounded-[24px] border border-cyan-400/10 bg-gradient-to-br from-white/[0.035] via-white/[0.02] to-cyan-400/[0.035] px-6 py-7 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-7 sm:py-8">

              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.08] blur-[70px]" />

              <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-blue-500/[0.06] blur-[70px]" />

              <div className="relative flex h-full flex-col">

                <div className="flex items-start justify-between gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.07)] transition-all duration-500 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.09]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M8 13h8" />
                      <path d="M8 17h5" />
                    </svg>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
                    CV
                  </span>

                </div>

                <div className="mt-5 flex-1">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-400/70">
                    Professional Profile
                  </p>

                  <h3 className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl">
                    Let's go beyond the portfolio.
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
                    Explore my education, experience, projects and
                    technical background in more detail.
                  </p>

                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-5">

                  <span className="text-xs text-gray-600">
                    portfolio & experience
                  </span>

                  <a
                    href="/resume.pdf"
                    download="resume.pdf"
                    className="group/btn inline-flex items-center gap-2.5 rounded-full bg-cyan-400 px-5 py-2.5 text-xs font-bold text-[#06091a] shadow-[0_0_25px_rgba(34,211,238,0.18)] transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.4)] active:translate-y-0 active:scale-95"
                  >
                    <Download
                      size={15}
                      className="transition-transform duration-300 group-hover/btn:translate-y-1"
                    />

                    Download Resume
                  </a>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ================= CURRENT FOCUS ================= */}

        <div className="mt-20 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] px-5 py-5">

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-400/70">
              Current Focus
            </p>

            <p className="mt-1 text-sm text-gray-400">
              Building modern & responsive web experiences
            </p>
          </div>

          {/* ================= FOCUS CARDS ================= */}

          <div className="flex flex-wrap gap-3">

            {["React", "Tailwind CSS", "JavaScript", "Figma"].map(
              (item) => (
                <div
                  key={item}
                  className="group relative cursor-pointer overflow-hidden rounded-xl border border-cyan-400/20 bg-white/[0.045] px-4 py-2.5 shadow-[0_0_18px_rgba(34,211,238,0.12),inset_0_0_18px_rgba(34,211,238,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-cyan-400/50 hover:bg-cyan-400/[0.08] hover:shadow-[0_0_30px_rgba(34,211,238,0.3),inset_0_0_20px_rgba(34,211,238,0.08)]"
                >

                  {/* Permanent Cyan Light */}

                  <div className="pointer-events-none absolute -left-3 -top-3 h-10 w-10 rounded-full bg-cyan-400/20 blur-xl" />

                  {/* Permanent Blue Light */}

                  <div className="pointer-events-none absolute -bottom-3 -right-3 h-10 w-10 rounded-full bg-blue-500/20 blur-xl" />

                  {/* Shiny Glass Layer */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.10] via-transparent to-cyan-400/[0.07]" />

                  {/* Top Shine */}

                  <div className="pointer-events-none absolute left-2 right-2 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

                  <span className="relative z-10 text-xs font-semibold text-gray-300 transition-colors duration-300 group-hover:text-cyan-300">
                    {item}
                  </span>

                </div>
              )
            )}

          </div>
        </div>

      </div>

      {/* ================= BOTTOM FADE ================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#06091a] to-transparent" />

    </section>
  );
}

export default Skills;