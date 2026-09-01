import React from "react";
import CursorGrid from "./CursorGrid";

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const skills = [
    { name: "HTML", icon: "HTML" },
    { name: "CSS", icon: "CSS" },
    { name: "JavaScript", icon: "JS" },
    { name: "React.js", icon: "⚛" },
    { name: "Tailwind CSS", icon: "TW" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-5"
    >
      {/* ================= CURSOR GRID ================= */}
      <div className="absolute inset-0 z-0">
        <CursorGrid />
      </div>

      {/* ================= DARK OVERLAY ================= */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#050816]/55" />

      {/* ================= TOP GLOW ================= */}
      <div className="pointer-events-none absolute left-1/2 top-[-280px] z-[1] h-[600px] w-[850px] -translate-x-1/2 rounded-full bg-cyan-500/[0.09] blur-[150px]" />

      {/* ================= LEFT GLOW ================= */}
      <div className="pointer-events-none absolute left-[-250px] top-1/2 z-[1] h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-blue-600/[0.07] blur-[150px]" />

      {/* ================= RIGHT GLOW ================= */}
      <div className="pointer-events-none absolute bottom-[-250px] right-[-200px] z-[1] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[150px]" />

      {/* ================= DECORATIVE DOTS ================= */}
      <div className="pointer-events-none absolute left-[10%] top-[32%] z-[2] h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />

      <div className="pointer-events-none absolute right-[12%] top-[27%] z-[2] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.9)]" />

      <div className="pointer-events-none absolute bottom-[27%] left-[17%] z-[2] h-1.5 w-1.5 rounded-full bg-cyan-400" />

      <div className="pointer-events-none absolute bottom-[30%] right-[18%] z-[2] h-1.5 w-1.5 rounded-full bg-blue-400" />

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl -translate-y-5 flex-col items-center text-center sm:-translate-y-7">

        {/* Hello */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-cyan-400 sm:text-sm">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Dua
          <span className="text-cyan-400">Eman</span>
        </h1>

        {/* Main Heading */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="hidden h-px w-10 bg-gradient-to-r from-transparent to-cyan-400/70 sm:block" />

          <h2 className="max-w-3xl text-xl font-semibold leading-relaxed tracking-wide text-gray-200 sm:text-2xl md:text-3xl">
            I’m a{" "}
            <span className="text-cyan-400">
              Frontend Web Developer
            </span>{" "}
            crafting modern digital experiences
          </h2>

          <span className="hidden h-px w-10 bg-gradient-to-l from-transparent to-cyan-400/70 sm:block" />
        </div>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 md:text-lg">
          I turn ideas into clean, responsive and engaging websites using
          modern frontend technologies, creative interfaces and thoughtful
          user experiences.
        </p>

        {/* ================= SKILLS ================= */}
        <div className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex items-center gap-2.5 rounded-xl border border-cyan-400/15 bg-white/[0.035] px-4 py-2.5 text-sm font-medium text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/[0.07] hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.08)]"
              >
                <span className="flex h-7 min-w-7 items-center justify-center rounded-md border border-cyan-400/20 bg-cyan-400/10 px-1 text-[10px] font-bold text-cyan-400">
                  {skill.icon}
                </span>

                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-9">
          <button
            onClick={() => scrollToSection("projects")}
            className="group flex cursor-pointer items-center gap-3 rounded-full bg-cyan-400 px-8 py-3.5 text-sm font-bold text-[#050816] shadow-[0_0_30px_rgba(34,211,238,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.32)]"
          >
            Explore My Work

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* ================= FEATURES ================= */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-gray-500 sm:gap-x-7">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
            Responsive Design
          </span>

          <span className="hidden text-white/10 sm:block">|</span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
            Clean Code
          </span>

          <span className="hidden text-white/10 sm:block">|</span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
            Modern UI/UX
          </span>
        </div>
      </div>

      {/* ================= BOTTOM FADE ================= */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3] h-28 bg-gradient-to-t from-[#050816] to-transparent" />
    </section>
  );
}

export default Hero;