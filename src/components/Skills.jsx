import React from "react";

function Skills() {
  const skills = [
    {
      name: "HTML",
      image: "/images/html.png",
      level: "Advanced",
    },
    {
      name: "CSS",
      image: "/images/css.png",
      level: "Advanced",
    },
    {
      name: "JavaScript",
      image: "/images/javascript.png",
      level: "Intermediate",
    },
    {
      name: "React.js",
      image: "/images/react.png",
      level: "Intermediate",
    },
    {
      name: "Tailwind CSS",
      image: "/images/tailwind.png",
      level: "Advanced",
    },
    {
      name: "Git & GitHub",
      image: "/images/github.png",
      level: "Intermediate",
    },
  ];

  const duplicatedSkills = [...skills, ...skills];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#06091a] px-5 py-24 sm:px-8 md:py-32"
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.045] blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-150px] h-[400px] w-[400px] rounded-full bg-blue-600/[0.045] blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.02] blur-[130px]" />

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ================= SECTION HEADING ================= */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.45em] text-cyan-400 sm:text-sm">
            My Expertise
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Technologies and tools I use to transform ideas into modern,
            responsive and engaging web experiences.
          </p>
        </div>

        {/* ================= SKILL INTRO ================= */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-cyan-400/50" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Technologies I Work With
          </span>

          <span className="h-px w-10 bg-cyan-400/50" />
        </div>

        {/* ================= MOVING SKILLS ================= */}
        <div className="relative overflow-hidden">
          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#06091a] to-transparent sm:w-28" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#06091a] to-transparent sm:w-28" />

          {/* MOVING TRACK */}
          <div className="flex w-max animate-[skillsScroll_24s_linear_infinite] gap-5 hover:[animation-play-state:paused]">
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="group relative flex w-[170px] shrink-0 flex-col items-center overflow-hidden rounded-2xl border border-cyan-400/15 bg-white/[0.035] px-5 py-6 shadow-[0_10px_40px_rgba(34,211,238,0.035)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/35 hover:bg-cyan-400/[0.045] hover:shadow-[0_15px_45px_rgba(34,211,238,0.12)] sm:w-[185px]"
              >
                {/* PERMANENT BOTTOM GLOW */}
                <div className="pointer-events-none absolute -bottom-12 left-1/2 h-24 w-32 -translate-x-1/2 rounded-full bg-cyan-400/[0.10] blur-[35px]" />

                {/* BLUE SIDE GLOW */}
                <div className="pointer-events-none absolute -bottom-8 -right-8 h-20 w-20 rounded-full bg-blue-500/[0.08] blur-[30px]" />

                {/* ICON */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] p-3 shadow-[0_0_22px_rgba(34,211,238,0.07)] transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-400/35">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* NAME */}
                <h3 className="relative mt-5 text-sm font-semibold text-white">
                  {skill.name}
                </h3>

                {/* LEVEL */}
                <span className="relative mt-2 rounded-full border border-cyan-400/10 bg-cyan-400/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-cyan-400/80">
                  {skill.level}
                </span>

                {/* BOTTOM LINE */}
                <div className="relative mt-5 h-px w-8 bg-cyan-400/30 transition-all duration-500 group-hover:w-12 group-hover:bg-cyan-400/60" />
              </div>
            ))}
          </div>
        </div>

        {/* ================= SKILL SUMMARY ================= */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center backdrop-blur-md">
            <div className="pointer-events-none absolute -bottom-12 left-1/2 h-20 w-28 -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[30px]" />

            <p className="relative text-2xl font-bold text-cyan-400">
              06+
            </p>

            <p className="relative mt-1 text-xs uppercase tracking-[0.2em] text-gray-500">
              Core Technologies
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center backdrop-blur-md">
            <div className="pointer-events-none absolute -bottom-12 left-1/2 h-20 w-28 -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[30px]" />

            <p className="relative text-2xl font-bold text-cyan-400">
              100%
            </p>

            <p className="relative mt-1 text-xs uppercase tracking-[0.2em] text-gray-500">
              Learning Mindset
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center backdrop-blur-md">
            <div className="pointer-events-none absolute -bottom-12 left-1/2 h-20 w-28 -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[30px]" />

            <p className="relative text-2xl font-bold text-cyan-400">
              ∞
            </p>

            <p className="relative mt-1 text-xs uppercase tracking-[0.2em] text-gray-500">
              Room To Grow
            </p>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM FADE ================= */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#06091a] to-transparent" />

      {/* ================= CUSTOM ANIMATION ================= */}
      <style>
        {`
          @keyframes skillsScroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
}

export default Skills;