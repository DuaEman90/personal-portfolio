
import React from "react";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      category: "Personal Portfolio",
      description:
        "A responsive personal portfolio showcasing my skills, projects, experience and frontend development journey.",
      tech: ["React", "Tailwind CSS"],
      image: "/images/projects/portfolio.png",
      link: "https://scintillating-bienenstitch-0ce7db.netlify.app/",
      glow: "cyan",
    },
    {
      title: "Savora",
      category: "Food & Beauty Experience",
      description:
        "A modern food and beauty website designed with a clean interface, engaging sections and a smooth responsive experience.",
      tech: ["React", "Tailwind CSS"],
      image: "/images/projects/savora.png",
      link: "https://savora-flr1sm4xx-dua-eman.vercel.app/",
      glow: "blue",
    },
    {
      title: "Coder Gym",
      category: "Fitness & Gym Website",
      description:
        "A modern gym website featuring a bold fitness-focused design, responsive layouts and engaging user interface.",
      tech: ["React", "Tailwind CSS"],
      image: "/images/projects/coder-gym.png",
      link: "https://coder-gym-rho.vercel.app/",
      glow: "cyan",
    },
    {
      title: "Real Estate",
      category: "Real Estate Website",
      description:
        "A clean and responsive real estate website created to present properties in a modern and user-friendly interface.",
      tech: ["React", "Tailwind CSS"],
      image: "/images/projects/real-estate.png",
      link: "https://real-estate-ten-puce-90.vercel.app/",
      glow: "blue",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#06091a] px-6 py-24 text-white md:px-12"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-[-180px] top-[15%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[55%] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================
            HEADER
        ========================= */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            A selection of projects I've designed and developed using modern
            frontend technologies.
          </p>
        </div>

        {/* =========================
            PROJECT GRID
        ========================= */}
        <div className="grid gap-7 md:grid-cols-2">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
            >
              {/* Bottom Light */}
              <div
                className={`pointer-events-none absolute -bottom-8 left-1/2 h-24 w-[75%] -translate-x-1/2 rounded-full blur-[45px] transition-all duration-500 group-hover:w-[85%] ${
                  project.glow === "cyan"
                    ? "bg-cyan-400/20 group-hover:bg-cyan-400/30"
                    : "bg-blue-500/20 group-hover:bg-blue-500/30"
                }`}
              />

              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-cyan-400/25 group-hover:bg-white/[0.05]">

                {/* Project Image */}
                <div className="relative mx-3 mt-3 h-64 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1025]">

                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Image Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06091a]/70 via-transparent to-transparent" />

                  {/* Project Number */}
                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-medium tracking-wider text-slate-300 backdrop-blur-md">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">

                  {/* Category */}
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>

                  {/* Tech + Button */}
                  <div className="mt-6 flex items-center justify-between gap-4">

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium text-slate-400 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Button */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2.5 text-xs font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/15 hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]"
                    >
                      View
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#06091a] to-transparent" />
    </section>
  );
};

export default Projects;

