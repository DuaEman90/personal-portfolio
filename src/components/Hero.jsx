
import React from "react";
import Animation from "../utility/Animation";

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
      {/* ================= AURORA BACKGROUND ================= */}

      <div className="absolute inset-0 z-0">
        <Animation />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-[#050816]/55" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 z-[1] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[130px]" />

      {/* ================= HERO CONTENT ================= */}

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center">

        {/* Availability Badge */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2.5 text-sm text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.08)] backdrop-blur-xl">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
          Available for opportunities
        </div>

        {/* Hello */}
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.45em] text-cyan-400">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
          Dua{" "}
          <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.2)]">
            Eman
          </span>
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-2xl font-semibold text-gray-200 sm:text-3xl md:text-4xl">
          Frontend Web Developer
        </h2>

        {/* Description */}
        <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
          I build modern, responsive and interactive web experiences
          with clean code, thoughtful design and modern frontend
          technologies.
        </p>

        {/* Tech Stack */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["React", "JavaScript", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ================= BUTTONS ================= */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          {/* Explore Work */}
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative overflow-hidden rounded-full bg-cyan-400 px-8 py-3.5 text-sm font-bold text-[#050816] shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore My Work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>

            {/* Shine */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>

          {/* Hire Me */}
          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            Hire Me
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;

