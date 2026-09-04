
import React from "react";

import {
  ExternalLink,
  Download,
  Award,
} from "lucide-react";

import {
  SiGit,
  SiGithub,
  SiFigma,
  SiNetlify,
  SiVercel,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiMysql,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  // =========================
  // TOOLS
  // =========================
  const tools = [
    {
      name: "Git",
      icon: SiGit,
      link: "https://git-scm.com/",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      link: "https://github.com/DuaEman90",
    },
    {
      name: "Figma",
      icon: SiFigma,
      link: "https://www.figma.com/",
    },
    {
      name: "Netlify",
      icon: SiNetlify,
      link: "https://www.netlify.com/",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      link: "https://vercel.com/dua-eman",
    },
    {
      name: "VS Code",
      icon: VscVscode,
      link: "https://code.visualstudio.com/",
    },
  ];

  // =========================
  // LANGUAGES
  // =========================
  const languages = [
    {
      name: "HTML",
      icon: SiHtml5,
    },
    {
      name: "CSS",
      icon: SiCss,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "PHP",
      icon: SiPhp,
    },
    {
      name: "SQL",
      icon: SiMysql,
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#06091a] px-6 py-24 text-white md:px-12"
    >
      {/* =========================
          BACKGROUND GLOWS
      ========================= */}
      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[45%] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================
            HEADER
        ========================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            My Toolkit
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Skills{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              & More
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            A collection of technologies and tools I use to build modern,
            responsive and user-friendly digital experiences.
          </p>
        </div>

        {/* =====================================================
            MOVING TOOLS + LANGUAGES
        ===================================================== */}
        <div className="mb-16 overflow-hidden">

          {/* =================================================
              TOOLS — MOVE LEFT
          ================================================= */}
          <div className="relative mb-6 overflow-hidden">

            {/* Soft edge fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#06091a] to-transparent" />

            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#06091a] to-transparent" />

            <div className="skills-track-left flex w-max py-3">

              {/* FIRST SET */}
              <div className="flex shrink-0 items-center gap-12">
                {tools.map((tool) => {
                  const Icon = tool.icon;

                  return (
                    <a
                      key={tool.name}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex shrink-0 cursor-pointer flex-col items-center justify-center"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-transparent transition-all duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.06] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]">
                        <Icon className="text-[28px] text-slate-400 transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                      </div>

                      <span className="mt-1 text-[10px] font-medium text-slate-500 transition-colors duration-300 group-hover:text-cyan-300">
                        {tool.name}
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* SECOND SET — EXACT DUPLICATE */}
              <div className="flex shrink-0 items-center gap-12 pl-12">
                {tools.map((tool) => {
                  const Icon = tool.icon;

                  return (
                    <a
                      key={`duplicate-${tool.name}`}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex shrink-0 cursor-pointer flex-col items-center justify-center"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-transparent transition-all duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.06] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]">
                        <Icon className="text-[28px] text-slate-400 transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                      </div>

                      <span className="mt-1 text-[10px] font-medium text-slate-500 transition-colors duration-300 group-hover:text-cyan-300">
                        {tool.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =================================================
              LANGUAGES — MOVE RIGHT
          ================================================= */}
          <div className="relative overflow-hidden">

            {/* Soft edge fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#06091a] to-transparent" />

            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#06091a] to-transparent" />

            <div className="skills-track-right flex w-max py-3">

              {/* FIRST SET */}
              <div className="flex shrink-0 items-center gap-12">
                {languages.map((language) => {
                  const Icon = language.icon;

                  return (
                    <div
                      key={language.name}
                      className="group flex shrink-0 cursor-pointer flex-col items-center justify-center"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-transparent transition-all duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-400/[0.06] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <Icon className="text-[28px] text-slate-400 transition-all duration-300 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                      </div>

                      <span className="mt-1 text-[10px] font-medium text-slate-500 transition-colors duration-300 group-hover:text-blue-300">
                        {language.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* SECOND SET — EXACT DUPLICATE */}
              <div className="flex shrink-0 items-center gap-12 pl-12">
                {languages.map((language) => {
                  const Icon = language.icon;

                  return (
                    <div
                      key={`duplicate-${language.name}`}
                      className="group flex shrink-0 cursor-pointer flex-col items-center justify-center"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-transparent transition-all duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-400/[0.06] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <Icon className="text-[28px] text-slate-400 transition-all duration-300 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                      </div>

                      <span className="mt-1 text-[10px] font-medium text-slate-500 transition-colors duration-300 group-hover:text-blue-300">
                        {language.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CERTIFICATION + RESUME
        ===================================================== */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* =========================
              CERTIFICATION
          ========================= */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05] hover:shadow-[0_0_45px_rgba(34,211,238,0.08)]">

            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-[70px] transition-all duration-500 group-hover:bg-cyan-400/20" />

            <div className="relative z-10">
              <div className="mb-7 flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                  <Award
                    size={23}
                    className="text-cyan-400"
                  />
                </div>

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-cyan-400">
                  Certificate
                </span>
              </div>

              <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Professional Certification
              </p>

              <h3 className="text-2xl font-bold text-white">
                Frontend Web Development
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
                A certification focused on building responsive, modern and
                user-friendly web experiences using frontend technologies.
              </p>

              <div className="mt-7 flex items-center justify-between gap-4">

                <a
                  href="#"
                  className="group/btn inline-flex cursor-pointer items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/15"
                >
                  View Certificate

                  <ExternalLink
                    size={15}
                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </a>

                <span className="text-xs text-slate-600">
                  Verified
                </span>
              </div>
            </div>
          </div>

          {/* =========================
              RESUME
          ========================= */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05] hover:shadow-[0_0_45px_rgba(59,130,246,0.08)]">

            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-[70px] transition-all duration-500 group-hover:bg-blue-500/20" />

            <div className="relative z-10">
              <div className="mb-7 flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10">
                  <Download
                    size={23}
                    className="text-blue-400"
                  />
                </div>

                <span className="rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-blue-400">
                  Resume
                </span>
              </div>

              <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                My Resume
              </p>

              <h3 className="text-2xl font-bold text-white">
                Professional Profile
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
                Let's go beyond the portfolio. Explore my education,
                experience, projects and technical background in more detail.
              </p>

              <div className="mt-7 flex items-center justify-between gap-4">

                <a
                  href="/resume.pdf"
                  download="resume.pdf"
                  className="group/btn inline-flex cursor-pointer items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-400/10 px-5 py-3 text-sm font-medium text-blue-300 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-400/15"
                >
                  Download Resume

                  <Download
                    size={15}
                    className="transition-transform duration-300 group-hover/btn:translate-y-0.5"
                  />
                </a>

                <span className="text-xs text-slate-600">
                  PDF Format
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MARQUEE CSS
      ===================================================== */}
      <style>{`
        .skills-track-left {
          animation: skillsLeft 24s linear infinite;
        }

        .skills-track-right {
          animation: skillsRight 24s linear infinite;
        }

        .skills-track-left:hover,
        .skills-track-right:hover {
          animation-play-state: paused;
        }

        @keyframes skillsLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes skillsRight {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        @media (max-width: 640px) {
          .skills-track-left {
            animation-duration: 20s;
          }

          .skills-track-right {
            animation-duration: 20s;
          }
        }
      `}</style>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#06091a] to-transparent" />
    </section>
  );
};

export default Skills;

