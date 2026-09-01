import React from "react";

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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-5 pt-24"
    >
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.35) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* Top Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[140px]" />

      {/* Left Glow */}
      <div className="pointer-events-none absolute left-[-250px] top-1/2 h-[450px] w-[450px] rounded-full bg-blue-600/[0.08] blur-[150px]" />

      {/* Right Glow */}
      <div className="pointer-events-none absolute bottom-[-250px] right-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[150px]" />

      {/* Decorative Circles */}
      <div className="pointer-events-none absolute left-[8%] top-[30%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />

      <div className="pointer-events-none absolute right-[12%] top-[25%] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.9)]" />

      <div className="pointer-events-none absolute bottom-[25%] left-[18%] h-1.5 w-1.5 rounded-full bg-cyan-400" />

      <div className="pointer-events-none absolute bottom-[30%] right-[18%] h-2 w-2 rounded-full bg-blue-400" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">

        {/* Availability Badge */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-2.5 text-xs font-medium text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.06)] backdrop-blur-md sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />

          Available for opportunities
        </div>

        {/* Intro */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-cyan-400 sm:text-sm">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Dua
          <span className="text-cyan-400">Eman</span>
        </h1>

        {/* Small Line */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="hidden h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/70 sm:block" />

          <h2 className="text-xl font-semibold tracking-wide text-gray-200 sm:text-2xl md:text-3xl">
            Frontend{" "}
            <span className="text-cyan-400">Web Developer</span>
          </h2>

          <span className="hidden h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/70 sm:block" />
        </div>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 md:text-lg">
          I create modern, responsive and user-focused web experiences
          with clean code, creative interfaces and powerful frontend
          technologies.
        </p>

        {/* Tech Stack */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-gray-300 shadow-[0_10px_35px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:text-white"
            >
              <span className="flex h-7 min-w-7 items-center justify-center rounded-md border border-cyan-400/20 bg-cyan-400/10 px-1 text-[10px] font-bold text-cyan-400">
                {skill.icon}
              </span>

              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="mt-10">
          <button
            onClick={() => scrollToSection("projects")}
            className="group flex cursor-pointer items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 text-sm font-bold text-[#050816] shadow-[0_0_30px_rgba(34,211,238,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.3)]"
          >
            Explore My Work

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* Developer Code Card */}
        

        {/* Bottom Features */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-gray-500">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Responsive Design
          </span>

          <span className="hidden text-white/10 sm:block">|</span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Clean Code
          </span>

          <span className="hidden text-white/10 sm:block">|</span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Modern UI/UX
          </span>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050816] to-transparent" />
    </section>
  );
}

export default Hero;