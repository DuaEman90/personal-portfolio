import React from "react";

import { ExternalLink, Download, Award } from "lucide-react";

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
  const tools = [
    {
      name: "Git",
      icon: <SiGit />,
      link: "https://git-scm.com/",
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
      link: "https://github.com/DuaEman90",
    },
    {
      name: "Figma",
      icon: <SiFigma />,
      link: "https://www.figma.com/",
    },
    {
      name: "Netlify",
      icon: <SiNetlify />,
      link: "https://www.netlify.com/",
    },
    {
      name: "Vercel",
      icon: <SiVercel />,
      link: "https://vercel.com/dua-eman",
    },
    {
      name: "VS Code",
      icon: <VscVscode />,
      link: "https://code.visualstudio.com/",
    },
  ];

  const languages = [
    {
      name: "HTML",
      icon: <SiHtml5 />,
    },
    {
      name: "CSS",
      icon: <SiCss />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "PHP",
      icon: <SiPhp />,
    },
    {
      name: "SQL",
      icon: <SiMysql />,
    },
  ];

  /*
   * 4 copies ensure the marquee always has enough content
   * to fill the screen and loop without a visible blank gap.
   */
  const toolMarquee = [...tools, ...tools, ...tools, ...tools];

  const languageMarquee = [
    ...languages,
    ...languages,
    ...languages,
    ...languages,
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-[#06091a] px-5 py-10 text-white md:px-10 md:py-12 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Toolkit
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Skills{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              & More
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-xs leading-7 text-slate-400 md:text-sm">
            A collection of technologies, tools and skills I use to design,
            build and deploy modern web experiences.
          </p>
        </div>

        {/* ================= TOOLS MARQUEE ================= */}
        <div className="relative mb-0 overflow-hidden py-2">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#06091a] to-transparent md:w-28" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#06091a] to-transparent md:w-28" />

          <div className="skills-marquee">
            <div className="skills-track-left">
              {toolMarquee.map((tool, index) => (
                <a
                  key={`${tool.name}-${index}`}
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex shrink-0 px-3 py-2"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[32px] text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan-400/60 group-hover:bg-cyan-400/10 group-hover:text-cyan-400 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                    {tool.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ================= LANGUAGES MARQUEE ================= */}
        <div className="relative mb-20 overflow-hidden py-2">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#06091a] to-transparent md:w-28" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#06091a] to-transparent md:w-28" />

          <div className="skills-marquee">
            <div className="skills-track-right">
              {languageMarquee.map((language, index) => (
                <div
                  key={`${language.name}-${index}`}
                  className="group flex shrink-0 px-3 py-2"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[32px] text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-400/60 group-hover:bg-blue-400/10 group-hover:text-blue-400 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]">
                    {language.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CERTIFICATION + RESUME ================= */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Certification */}
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                <Award size={24} />
              </div>

              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">
                Certified
              </span>
            </div>

            <h3 className="text-lg font-semibold text-white">
              Frontend Web Development
            </h3>

            <p className="mt-3 text-xs leading-6 text-slate-400 sm:text-sm">
              Professional certification focused on modern frontend
              development, responsive design and building interactive web
              experiences.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Frontend Development
            </div>
          </div>

          {/* Resume */}
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.05]">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                  My Resume
                </p>

                <h3 className="mt-2 text-lg font-semibold text-white">
                  Let&apos;s work together
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-400">
                <Download size={22} />
              </div>
            </div>

            <p className="max-w-md text-xs leading-6 text-slate-400 sm:text-sm">
              Interested in working together? Take a look at my resume to
              learn more about my skills, experience and projects.
            </p>

            <a
              href="/resume.pdf"
              download
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400 sm:text-sm"
            >
              Download Resume
              <Download size={16} />
            </a>
          </div>
        </div>

        {/* ================= VIEW MORE ================= */}
        <div className="mt-12 flex justify-center">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-xs font-medium text-slate-400 transition-colors duration-300 hover:text-cyan-400 sm:text-sm"
          >
            Explore my work

            <ExternalLink
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#06091a] to-transparent" />

      {/* ================= MARQUEE CSS ================= */}
      <style>{`
        .skills-marquee {
          width: 100%;
          overflow: hidden;
          padding: 8px 0;
        }

        .skills-track-left,
        .skills-track-right {
          display: flex;
          width: max-content;
          align-items: center;
          gap: 4px;
          will-change: transform;
        }

        .skills-track-left {
          animation: skillsLeft 24s linear infinite;
        }

        .skills-track-right {
          animation: skillsRight 24s linear infinite;
        }

        @keyframes skillsLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-25%);
          }
        }

        @keyframes skillsRight {
          from {
            transform: translateX(-25%);
          }

          to {
            transform: translateX(0);
          }
        }

        .skills-track-left:hover,
        .skills-track-right:hover {
          animation-play-state: running;
        }

        @media (max-width: 768px) {
          .skills-track-left,
          .skills-track-right {
            gap: 8px;
          }

          .skills-track-left {
            animation-duration: 20s;
          }

          .skills-track-right {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;