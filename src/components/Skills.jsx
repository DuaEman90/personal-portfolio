import React from "react";

function Skills() {
  const skills = [
    {
      name: "HTML",
      image: "/images/html.png",
    },
    {
      name: "CSS",
      image: "/images/css.png",
    },
    {
      name: "JavaScript",
      image: "/images/javascript.png",
    },
    {
      name: "React.js",
      image: "/images/react.png",
    },
    {
      name: "Tailwind CSS",
      image: "/images/tailwind.png",
    },
  ];

  const tools = [
    {
      name: "Git & GitHub",
      image: "/images/github.png",
    },
    {
      name: "Figma",
      image: "/images/figma.png",
    },
    {
      name: "Netlify",
      image: "/images/netlify.png",
    },
    {
      name: "Vercel",
      image: "/images/vercel.png",
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

        {/* ================= HEADING ================= */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.45em] text-cyan-400 sm:text-sm">
            What I Work With
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Skills & <span className="text-cyan-400">Tools</span>
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Technologies and tools I use to build clean, responsive and
            engaging digital experiences.
          </p>
        </div>

        {/* ========================================================= */}
        {/* ====================== SKILLS =========================== */}
        {/* ========================================================= */}

        <div className="mb-14">
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-cyan-400/40" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Core Skills
            </span>

            <span className="h-px w-10 bg-cyan-400/40" />
          </div>

          {/* MOVING SLIDER */}
          <div className="relative overflow-hidden">

            {/* LEFT FADE */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#06091a] to-transparent sm:w-28" />

            {/* RIGHT FADE */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#06091a] to-transparent sm:w-28" />

            <div className="flex w-max animate-[skillsScroll_24s_linear_infinite] gap-5">
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="group relative flex w-[170px] shrink-0 cursor-default flex-col items-center overflow-hidden rounded-2xl border border-cyan-400/15 bg-white/[0.035] px-5 py-7 backdrop-blur-md shadow-[0_10px_40px_rgba(34,211,238,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/[0.045] hover:shadow-[0_15px_45px_rgba(34,211,238,0.12)] sm:w-[185px]"
                >
                  {/* Permanent Bottom Glow */}
                  <div className="pointer-events-none absolute -bottom-14 left-1/2 h-24 w-32 -translate-x-1/2 rounded-full bg-cyan-400/[0.11] blur-[38px]" />

                  {/* Icon */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] p-3 shadow-[0_0_22px_rgba(34,211,238,0.07)] transition-all duration-500 group-hover:scale-105">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <h3 className="relative mt-5 text-sm font-semibold text-white">
                    {skill.name}
                  </h3>

                  <div className="relative mt-4 h-px w-8 bg-cyan-400/30 transition-all duration-500 group-hover:w-12 group-hover:bg-cyan-400/60" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* ======================= TOOLS =========================== */}
        {/* ========================================================= */}

        <div className="mb-16">
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-cyan-400/40" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Tools & Platforms
            </span>

            <span className="h-px w-10 bg-cyan-400/40" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] hover:shadow-[0_15px_45px_rgba(34,211,238,0.10)]"
              >
                {/* Permanent Glow */}
                <div className="pointer-events-none absolute -bottom-12 left-1/2 h-20 w-28 -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[32px]" />

                <div className="relative flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] p-3 shadow-[0_0_20px_rgba(34,211,238,0.06)]">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <p className="mt-4 text-sm font-semibold text-gray-200">
                    {tool.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* ==================== CERTIFICATION ===================== */}
        {/* ========================================================= */}

        <div className="mb-14">
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-cyan-400/40" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Certification
            </span>

            <span className="h-px w-10 bg-cyan-400/40" />
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="group relative overflow-hidden rounded-3xl border border-cyan-400/15 bg-white/[0.035] p-6 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_20px_80px_rgba(34,211,238,0.08)] sm:p-8">

              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/[0.08] blur-[65px]" />

              <div className="relative flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">

                {/* Certificate Icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] text-2xl shadow-[0_0_25px_rgba(34,211,238,0.08)]">
                  🏆
                </div>

                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    Certification
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    Frontend Web Development
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Building modern, responsive and user-friendly web
                    experiences using frontend technologies.
                  </p>
                </div>

                {/* Future Certificate Button */}
                <button
                  type="button"
                  className="relative shrink-0 cursor-pointer rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-5 py-2.5 text-xs font-semibold text-cyan-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.10] hover:text-cyan-300"
                >
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* ===================== RESUME CTA ======================== */}
        {/* ========================================================= */}

        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-cyan-400/15 bg-white/[0.035] px-6 py-10 text-center backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.22)] sm:px-10">

          {/* CTA Glow */}
          <div className="pointer-events-none absolute left-1/2 top-[-80px] h-48 w-72 -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[70px]" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Want To Know More?
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Let's take a look at my{" "}
              <span className="text-cyan-400">resume.</span>
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-400">
              Explore my skills, education, projects and experience in
              more detail.
            </p>

            {/* DOWNLOAD BUTTON */}
            <a
              href="/resume.pdf"
              download="Dua-Eman-Resume.pdf"
              className="group mt-7 inline-flex cursor-pointer items-center gap-3 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-bold text-[#06091a] shadow-[0_0_30px_rgba(34,211,238,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]"
            >
              Download Resume

              <span className="text-base transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM FADE ================= */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#06091a] to-transparent" />

      {/* ================= SLIDER ANIMATION ================= */}
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