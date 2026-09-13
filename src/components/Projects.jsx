
import React, { useState } from "react";

import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Velora",
      category: "E-Commerce Store",
      description:
        "A modern e-commerce store focused on attractive product presentation, organized sections and a smooth shopping experience.",
      tech: ["React", "Tailwind CSS"],
      image: "/Velora.png",
      link: "https://e-commerce-beta-blue-47.vercel.app/",
    },
    
    {
      number: "02",
      title: "Savora",
      category: "Food & Makeup",
      description:
        "A creative food and makeup website combining two visually engaging categories in one modern, responsive interface.",
      tech: ["React", "Tailwind CSS"],
      image: "/savora.png",
      link: "https://savora-flr1sm4xx-dua-eman.vercel.app/",
    },
    {
      number: "03",
      title: "Coder Gym",
      category: "Fitness Website",
      description:
        "A modern gym website with a bold fitness-focused interface, strong visual hierarchy and responsive layouts.",
      tech: ["React", "Tailwind CSS"],
      image: "/codergym.png",
      link: "https://coder-gym-rho.vercel.app/",
    },
    {
      number: "04",
      title: "Personal Portfolio",
      category: "Personal Website",
      description:
        "A clean and responsive personal portfolio website designed to showcase my skills, projects, education and frontend development journey.",
      tech: ["HTML", "CSS"],
      image: "/portfolio.png",
      link: "https://scintillating-bienenstitch-0ce7db.netlify.app/",
    },
    {
      number: "05",
      title: "Real Estate",
      category: "Property Website",
      description:
        "A modern real estate website focused on showcasing beautiful properties through an elegant and organized interface.",
      tech: ["React", "Tailwind CSS"],
      image: "/realestate.png",
      link: "https://real-estate-ten-puce-90.vercel.app/",
    },
   
  ];

  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080d20] px-5 py-14 text-white sm:px-8 lg:px-12"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-cyan-400/[0.045] blur-[130px] animate-[floatGlow_7s_ease-in-out_infinite]" />

      <div className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-blue-500/[0.035] blur-[120px] animate-[floatGlowReverse_9s_ease-in-out_infinite]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="relative h-px w-10 overflow-hidden bg-cyan-400/20">
              <span className="absolute inset-y-0 left-0 w-full bg-cyan-400 animate-[linePulse_2s_ease-in-out_infinite]" />
            </span>

            <p className="animate-[labelReveal_1s_ease-out_forwards] text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-400 opacity-0">
              Selected Work
            </p>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="inline-block animate-[headingReveal_0.9s_cubic-bezier(0.22,1,0.36,1)_forwards] opacity-0">
                Things I’ve{" "}
              </span>

              <span className="relative inline-block text-cyan-400 animate-[headingReveal_1.1s_cubic-bezier(0.22,1,0.36,1)_forwards] opacity-0">
                Built.

                <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left animate-[underlineReveal_1.5s_ease-out_forwards] scale-x-0 bg-cyan-400/70" />

                <span className="absolute -bottom-2 left-0 h-[2px] w-12 bg-cyan-400 blur-[5px] animate-[underlineGlow_2.5s_ease-in-out_infinite]" />
              </span>
            </h2>

            <div className="relative max-w-md overflow-hidden md:text-right">
              <div className="pointer-events-none absolute inset-y-0 -left-full w-1/3 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-[textShine_3s_ease-in-out_1.2s_infinite]" />

              <p className="animate-[descriptionReveal_1.2s_cubic-bezier(0.22,1,0.36,1)_forwards] text-sm leading-6 text-gray-500 opacity-0">
                A selection of projects created while exploring frontend
                development, modern interfaces and responsive experiences.
              </p>
            </div>
          </div>

          <div className="mt-6 h-px w-full overflow-hidden bg-white/[0.04]">
            <div className="h-full w-32 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-[separatorMove_4s_ease-in-out_infinite]" />
          </div>
        </div>

        {/* Showcase */}
        <div className="relative overflow-hidden border-y border-white/[0.08]">
          <div className="grid lg:grid-cols-[220px_1fr]">
            {/* Project Navigation */}
            <div className="border-b border-white/[0.08] lg:border-b-0 lg:border-r">
              <div className="flex overflow-x-auto lg:block">
                {projects.map((item, index) => {
                  const isActive = activeProject === index;

                  return (
                    <button
                      key={item.number}
                      onClick={() => setActiveProject(index)}
                      className={`group relative flex min-w-[105px] flex-1 cursor-pointer items-center gap-3 px-4 py-4 text-left transition-all duration-300 sm:px-5 lg:w-full lg:min-w-0 lg:py-[18px] ${
                        isActive
                          ? "bg-cyan-400/[0.06]"
                          : "hover:bg-white/[0.025]"
                      }`}
                    >
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-cyan-400 transition-all duration-300 lg:bottom-auto lg:top-0 lg:h-full lg:w-[2px] ${
                          isActive ? "w-full lg:h-full" : "w-0 lg:h-0"
                        }`}
                      />

                      <span
                        className={`text-[10px] font-semibold tracking-widest transition-colors duration-300 ${
                          isActive
                            ? "text-cyan-400"
                            : "text-gray-600 group-hover:text-gray-400"
                        }`}
                      >
                        {item.number}
                      </span>

                      <span
                        className={`hidden text-xs font-medium transition-colors duration-300 lg:block ${
                          isActive
                            ? "text-white"
                            : "text-gray-500 group-hover:text-gray-300"
                        }`}
                      >
                        {item.title}
                      </span>

                      <span
                        className={`text-[11px] font-medium lg:hidden ${
                          isActive ? "text-white" : "text-gray-500"
                        }`}
                      >
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Featured Project */}
            <div className="grid min-h-[390px] lg:grid-cols-[1.05fr_0.95fr]">
              {/* IMAGE AREA */}
              <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden bg-[#06091a] p-4 sm:min-h-[300px] sm:p-6 lg:min-h-[390px] lg:p-8">
                {/* Background Orbs */}
                <div className="pointer-events-none absolute left-[15%] top-[20%] h-28 w-28 rounded-full bg-cyan-400/[0.08] blur-[55px] animate-[orbOne_6s_ease-in-out_infinite]" />

                <div className="pointer-events-none absolute bottom-[10%] right-[15%] h-32 w-32 rounded-full bg-blue-500/[0.07] blur-[60px] animate-[orbTwo_7s_ease-in-out_infinite]" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.08] blur-[45px] animate-[centerPulse_3s_ease-in-out_infinite]" />

                {/* Decorative Dots */}
                <div className="pointer-events-none absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-cyan-400/50 animate-[dotFloat_4s_ease-in-out_infinite]" />

                <div className="pointer-events-none absolute bottom-[20%] left-[25%] h-1.5 w-1.5 rounded-full bg-cyan-300/30 animate-[dotFloatReverse_5s_ease-in-out_infinite]" />

                <div className="pointer-events-none absolute right-[20%] top-[25%] h-1 w-1 rounded-full bg-cyan-400/40 animate-[dotFloat_5s_ease-in-out_infinite]" />

                {/* Rotating Ring */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/[0.035] animate-[slowRotate_14s_linear_infinite]" />

                {/* =====================================================
                    PERMANENT GLOW BEHIND IMAGE CONTAINER
                ====================================================== */}

                {/* Large Cyan Aura */}
                <div
                  key={`cyanGlow-${activeProject}`}
                  className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[75%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[30%] bg-cyan-400/[0.13] blur-[75px] animate-[containerGlow_4s_ease-in-out_infinite]"
                />

                {/* Blue Aura */}
                <div
                  key={`blueGlow-${activeProject}`}
                  className="pointer-events-none absolute left-1/2 top-[55%] z-[1] h-[60%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-[35%] bg-blue-500/[0.10] blur-[90px]"
                />

                {/* Stronger Central Aura */}
                <div
                  key={`centerGlow-${activeProject}`}
                  className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[45%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.12] blur-[65px] animate-[centerAura_3.5s_ease-in-out_infinite]"
                />

                {/* =====================================================
                    IMAGE CONTAINER
                ====================================================== */}

                <div
                  key={`frame-${activeProject}`}
                  className="group relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1025] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-[0_25px_80px_rgba(34,211,238,0.18)]"
                >
                  {/* Container Inner Glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/[0.07] via-transparent to-blue-500/[0.06]" />

                  {/* Image */}
                  <img
                    key={project.image}
                    src={project.image}
                    alt={project.title}
                    className="relative z-10 max-h-[210px] w-full object-contain animate-[imageReveal_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards] transition-transform duration-700 ease-out group-hover:scale-[1.025] sm:max-h-[260px] lg:max-h-[315px]"
                  />

                  {/* Image Shine */}
                  <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
                    <div className="absolute -left-[60%] top-0 h-full w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent animate-[imageShine_4s_ease-in-out_1s_infinite]" />
                  </div>

                  {/* Image Gradient */}
                  <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-cyan-400/[0.035] via-transparent to-white/[0.025]" />

                  {/* Project Number */}
                  <div className="absolute left-4 top-4 z-30 text-xl font-bold tracking-[-0.04em] text-white/[0.12] sm:text-2xl">
                    {project.number}
                  </div>

                  {/* Open Arrow */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="absolute bottom-3 right-3 z-30 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/25 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:bg-cyan-400 hover:text-[#06091a] sm:h-10 sm:w-10"
                  >
                    <FiArrowUpRight size={17} />
                  </a>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center px-6 py-7 sm:px-8 sm:py-8 lg:px-9">
                {/* Label */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
                    Featured Project
                  </span>

                  <span className="h-px w-7 bg-white/10 transition-all duration-500 hover:w-14 hover:bg-cyan-400/40" />
                </div>

                {/* Title */}
                <h3
                  key={`title-${activeProject}`}
                  className="animate-[contentReveal_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards] text-2xl font-bold tracking-tight text-white opacity-0 sm:text-3xl"
                >
                  {project.title}
                </h3>

                {/* Category */}
                <p
                  key={`category-${activeProject}`}
                  className="mt-1.5 animate-[contentReveal_0.7s_cubic-bezier(0.22,1,0.36,1)_forwards] text-[10px] uppercase tracking-[0.2em] text-gray-600 opacity-0"
                >
                  {project.category}
                </p>

                {/* Accent */}
                <div className="mt-4 h-px w-9 bg-cyan-400 transition-all duration-500 hover:w-16" />

                {/* Description */}
                <p
                  key={`description-${activeProject}`}
                  className="mt-4 max-w-md animate-[contentReveal_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards] text-xs leading-6 text-gray-400 opacity-0 sm:text-sm"
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5">
                  <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-600">
                    Built With
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item, index) => (
                      <span
                        key={item}
                        className="animate-[tagReveal_0.5s_ease-out_forwards] rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1.5 text-[9px] font-medium text-cyan-300 opacity-0 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                        style={{
                          animationDelay: `${index * 120}ms`,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project */}
                <div className="mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex cursor-pointer items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300"
                  >
                    <span className="border-b border-cyan-400/30 pb-1.5 transition-colors duration-300 group-hover:border-cyan-400">
                      View Project
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/20 transition-all duration-300 group-hover:translate-x-1 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-[#06091a]">
                      <FiExternalLink size={11} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-[9px] uppercase tracking-[0.3em] text-gray-600">
            Explore Projects
          </p>

          <p className="text-[10px] font-medium tracking-widest text-gray-600">
            <span className="text-cyan-400">{project.number}</span>
            {" / "}
            {String(projects.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes labelReveal {
            0% {
              opacity: 0;
              transform: translateX(-18px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes headingReveal {
            0% {
              opacity: 0;
              transform: translateY(25px);
              filter: blur(5px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes underlineReveal {
            0% {
              transform: scaleX(0);
            }
            100% {
              transform: scaleX(1);
            }
          }

          @keyframes underlineGlow {
            0%,
            100% {
              opacity: 0.25;
              transform: translateX(0);
            }
            50% {
              opacity: 0.8;
              transform: translateX(15px);
            }
          }

          @keyframes descriptionReveal {
            0% {
              opacity: 0;
              transform: translateX(35px);
              filter: blur(4px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
              filter: blur(0);
            }
          }

          @keyframes textShine {
            0% {
              left: -60%;
            }
            45%,
            100% {
              left: 130%;
            }
          }

          @keyframes separatorMove {
            0% {
              transform: translateX(-150px);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            70% {
              opacity: 1;
            }
            100% {
              transform: translateX(900px);
              opacity: 0;
            }
          }

          @keyframes floatGlow {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(-45px, 35px) scale(1.15);
            }
          }

          @keyframes floatGlowReverse {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(50px, -30px) scale(1.12);
            }
          }

          @keyframes orbOne {
            0%,
            100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(55px, 35px);
            }
          }

          @keyframes orbTwo {
            0%,
            100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(-50px, -35px);
            }
          }

          @keyframes centerPulse {
            0%,
            100% {
              transform: translate(-50%, -50%) scale(0.8);
              opacity: 0.35;
            }
            50% {
              transform: translate(-50%, -50%) scale(1.35);
              opacity: 0.8;
            }
          }

          /* MAIN IMAGE CONTAINER GLOW */
          @keyframes containerGlow {
            0%,
            100% {
              transform: translate(-50%, -50%) scale(0.94);
              opacity: 0.65;
            }
            50% {
              transform: translate(-50%, -50%) scale(1.08);
              opacity: 1;
            }
          }

          /* CENTER AURA */
          @keyframes centerAura {
            0%,
            100% {
              transform: translate(-50%, -50%) scale(0.85);
              opacity: 0.45;
            }
            50% {
              transform: translate(-50%, -50%) scale(1.12);
              opacity: 0.85;
            }
          }

          @keyframes slowRotate {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes dotFloat {
            0%,
            100% {
              transform: translateY(0);
              opacity: 0.3;
            }
            50% {
              transform: translateY(-20px);
              opacity: 1;
            }
          }

          @keyframes dotFloatReverse {
            0%,
            100% {
              transform: translateY(0);
              opacity: 0.2;
            }
            50% {
              transform: translateY(18px);
              opacity: 0.8;
            }
          }

          @keyframes imageReveal {
            0% {
              opacity: 0;
              transform: scale(0.96) translateY(10px);
              filter: blur(5px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
              filter: blur(0);
            }
          }

          @keyframes imageShine {
            0% {
              left: -60%;
            }
            35%,
            100% {
              left: 140%;
            }
          }

          @keyframes contentReveal {
            0% {
              opacity: 0;
              transform: translateY(12px);
              filter: blur(3px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes tagReveal {
            0% {
              opacity: 0;
              transform: translateY(8px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              scroll-behavior: auto !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
