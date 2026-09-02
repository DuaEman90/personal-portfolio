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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-5 pt-32 pb-16"
    >
      {/* ================= CURSOR GRID ================= */}

      <div className="pointer-events-auto absolute inset-0 z-0">
        <CursorGrid
  cellSize={65}
  color="#22D3EE"
  radius={180}
  falloff="smooth"
  holdTime={400}
  fadeDuration={750}
  lineWidth={1.3}
  maxOpacity={1}
  fillOpacity={0.06}
  gridOpacity={0.16}
  cellRadius={2}
  clickPulse={true}
  pulseSpeed={550}
/>
      </div>

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#050816]/35" />

      <div className="pointer-events-none absolute left-1/2 top-[-300px] z-[1] h-[600px] w-[850px] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-250px] left-[-200px] z-[1] h-[500px] w-[500px] rounded-full bg-blue-600/[0.07] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-250px] right-[-200px] z-[1] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[150px]" />

      {/* ================= DECORATIVE DOTS ================= */}

      <div className="pointer-events-none absolute left-[10%] top-[34%] z-[2] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />

      <div className="pointer-events-none absolute right-[12%] top-[28%] z-[2] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.9)]" />

      <div className="pointer-events-none absolute bottom-[27%] left-[17%] z-[2] h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

      <div className="pointer-events-none absolute bottom-[30%] right-[18%] z-[2] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />

      {/* ================= HERO CONTENT ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-5xl
          translate-y-4
          flex-col
          items-center
          text-center
        "
      >
        {/* HELLO */}

        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400 sm:text-base">
          Hello, I'm
        </p>

        {/* NAME */}

        <h1
          className="
            text-5xl
            font-extrabold
            leading-none
            tracking-tight
            text-white
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
        >
          Dua
          <span className="text-cyan-400">Eman</span>
        </h1>

        {/* TITLE */}

        <div className="mt-7 flex w-full items-center justify-center gap-4">
          <span className="hidden h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/70 sm:block" />

          <h2 className="max-w-4xl text-xl font-semibold leading-relaxed tracking-wide text-gray-200 sm:text-2xl md:text-3xl lg:text-4xl">
            I'm a{" "}
            <span className="text-cyan-400">
              Frontend Web Developer
            </span>{" "}
            crafting modern digital experiences
          </h2>

          <span className="hidden h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/70 sm:block" />
        </div>

        {/* DESCRIPTION */}

        <p className="mt-7 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 md:text-lg">
          I turn ideas into clean, responsive and engaging websites
          using modern frontend technologies, creative interfaces and
          thoughtful user experiences.
        </p>

        {/* SKILLS */}

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                group
                flex
                items-center
                gap-2.5
                rounded-xl
                border
                border-cyan-400/15
                bg-white/[0.035]
                px-4
                py-3
                text-sm
                font-medium
                text-gray-300
                shadow-[0_10px_35px_rgba(0,0,0,0.18)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/50
                hover:bg-cyan-400/[0.07]
                hover:text-white
                cursor-pointer
              "
            >
              <span
                className="
                  flex
                  h-7
                  min-w-7
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-cyan-400/25
                  bg-cyan-400/10
                  px-1
                  text-[10px]
                  font-bold
                  text-cyan-400
                "
              >
                {skill.icon}
              </span>

              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-10">
          <button
            onClick={() => scrollToSection("projects")}
            className="
              group
              flex
              cursor-pointer
              items-center
              gap-3
              rounded-full
              bg-cyan-400
              px-9
              py-4
              text-sm
              font-bold
              text-[#050816]
              shadow-[0_0_35px_rgba(34,211,238,0.22)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-cyan-300
              hover:shadow-[0_0_55px_rgba(34,211,238,0.4)]
            "
          >
            Explore My Work

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* BOTTOM FEATURES */}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-gray-500 sm:text-sm">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            Responsive Design
          </span>

          <span className="hidden text-white/10 sm:block">|</span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            Clean Code
          </span>

          <span className="hidden text-white/10 sm:block">|</span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
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