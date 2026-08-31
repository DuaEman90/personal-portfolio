
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

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6 pt-24"
    >
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Top Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[130px]" />

      {/* Left Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-1/2 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.05] blur-[120px]" />

      {/* Right Glow */}
      <div className="pointer-events-none absolute bottom-[-180px] right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-500/[0.05] blur-[130px]" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">

        {/* Intro */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-cyan-400 sm:text-sm">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Dua{" "}
          <span className="relative text-cyan-400">
            Eman
            <span className="absolute -bottom-2 left-1/2 h-[3px] w-14 -translate-x-1/2 rounded-full bg-cyan-400/70 blur-[2px]" />
          </span>
        </h1>

        {/* Professional Title */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="hidden h-px w-8 bg-cyan-400/40 sm:block" />

          <h2 className="text-xl font-semibold tracking-wide text-gray-200 sm:text-2xl md:text-3xl">
            Frontend Web Developer
          </h2>

          <span className="hidden h-px w-8 bg-cyan-400/40 sm:block" />
        </div>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
          I create modern, responsive and user-focused web experiences
          using clean code, thoughtful design and modern frontend
          technologies.
        </p>

        {/* Tech Stack */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {[
            { name: "React", symbol: "⚛" },
            { name: "JavaScript", symbol: "JS" },
            { name: "Tailwind CSS", symbol: "✦" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="group flex cursor-default items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
            >
              <span className="text-xs font-bold text-cyan-400">
                {tech.symbol}
              </span>

              {tech.name}
            </div>
          ))}
        </div>

        {/* Explore My Work */}
        <div className="mt-10 flex items-center justify-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative cursor-pointer overflow-hidden rounded-full bg-cyan-400 px-9 py-4 text-sm font-bold text-[#050816] shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              Explore My Work

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>

            {/* Shine Effect */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 flex flex-col items-center gap-4 text-xs text-gray-500 sm:flex-row sm:gap-7">
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
            Responsive Design
          </div>

          <span className="hidden text-white/10 sm:block">|</span>

          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
            Clean Code
          </div>

          <span className="hidden text-white/10 sm:block">|</span>

          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
            Modern UI/UX
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050816] to-transparent" />
    </section>
  );
}

export default Hero;

