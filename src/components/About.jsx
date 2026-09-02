
import React, { useEffect, useState } from "react";

function About() {
  const infoCards = [
    {
      number: "01",
      icon: "💻",
      title: "Frontend Development",
      text: "Building responsive and interactive websites with modern frontend technologies.",
    },
    {
      number: "02",
      icon: "🎨",
      title: "Creative UI/UX",
      text: "Turning ideas into clean, intuitive and visually engaging digital interfaces.",
    },
    {
      number: "03",
      icon: "⚡",
      title: "Clean & Scalable Code",
      text: "Writing organized, reusable and maintainable code with attention to detail.",
    },
  ];

  // ================= TYPING ANIMATION =================
  const roles = [
    "Frontend Developer",
    "Creative UI/UX Enthusiast",
    "React.js Developer",
    "Modern Web Creator",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));

        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));

        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080B1F] px-5 py-24 sm:px-8 md:py-32"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.055] blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-150px] h-[400px] w-[400px] rounded-full bg-blue-600/[0.055] blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.025] blur-[130px]" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= SECTION HEADING ================= */}

        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.45em] text-cyan-400 sm:text-sm">
            Get To Know Me
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            A little about who I am, what I do, and what drives me to
            create better digital experiences.
          </p>
        </div>

        {/* ================= ABOUT CONTENT ================= */}

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">

          {/* ================= LEFT CONTENT ================= */}

          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Who I Am
              </span>
            </div>

            <h3 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              Passionate about turning ideas into{" "}
              <span className="text-cyan-400">
                meaningful web experiences.
              </span>
            </h3>

            {/* ================= TYPING ROLE ================= */}

            <div className="mt-6 flex min-h-[32px] items-center">
              <span className="mr-2 h-px w-7 bg-cyan-400/50" />

              <span className="text-sm font-medium tracking-wide text-cyan-300 sm:text-base">
                {displayText}
              </span>

              <span className="ml-1 h-5 w-[2px] animate-pulse bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              I'm Dua Eman, a Software Engineering student and aspiring
              Frontend Web Developer. I enjoy transforming ideas into
              modern, responsive and user-friendly websites.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              I work with technologies like HTML, CSS, JavaScript,
              React.js and Tailwind CSS. I'm continuously learning,
              experimenting with new ideas and improving my skills to
              create cleaner and more engaging digital experiences.
            </p>

            {/* ================= QUICK INFO ================= */}

            <div className="mt-9 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Degree
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  BS Software Engineering
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Current
                </p>

                <p className="mt-2 text-sm font-semibold text-cyan-400">
                  5th Semester
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Focus
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  Frontend Development
                </p>
              </div>

            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="relative">

            {/* Main Card */}

            <div className="group relative overflow-hidden rounded-3xl border border-cyan-400/15 bg-white/[0.035] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_20px_90px_rgba(34,211,238,0.08)] sm:p-8">

              {/* Card Glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.08] blur-[70px]" />

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-blue-500/[0.06] blur-[70px]" />

              {/* ================= CARD TOP ================= */}

              <div className="relative flex items-center justify-between border-b border-white/10 pb-5">

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    Developer Profile
                  </p>

                  <h4 className="mt-2 text-xl font-bold text-white">
                    Dua Eman
                  </h4>
                </div>

                {/* ================= LOGO ================= */}

                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] p-2 shadow-[0_0_25px_rgba(34,211,238,0.08)]">

                  <div className="pointer-events-none absolute inset-0 rounded-xl bg-cyan-400/[0.05] blur-md" />

                  <img
                    src="lodo.png"
                    alt="Dua Eman Logo"
                    className="relative h-10 w-10 object-contain"
                  />

                </div>
              </div>

              {/* ================= SKILLS ================= */}

              <div className="relative mt-7">

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Core Technologies
                </p>

                <div className="mt-4 flex flex-wrap gap-2">

                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React.js",
                    "Tailwind CSS",
                    "Git & GitHub",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="cursor-pointer rounded-lg border border-cyan-400/20 bg-cyan-400/[0.045] px-3 py-2 text-xs font-medium text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/[0.1] hover:text-cyan-100 hover:shadow-[0_0_22px_rgba(34,211,238,0.15)]"
                    >
                      {tech}
                    </span>
                  ))}

                </div>
              </div>

              {/* ================= EDUCATION ================= */}

              <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/10 p-5">

                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/[0.05] blur-2xl" />

                <div className="relative flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                    🎓
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Education
                    </p>

                    <h5 className="mt-1 text-sm font-semibold text-white">
                      BS Software Engineering
                    </h5>

                    <p className="mt-1 text-xs text-gray-500">
                      University of Sargodha · 5th Semester
                    </p>
                  </div>

                </div>
              </div>

              {/* ================= STATUS ================= */}

              <div className="relative mt-6 flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

                <span className="text-xs text-gray-400">
                  Always learning · Always building
                </span>

              </div>

            </div>

            {/* Decorative Border */}

            <div className="pointer-events-none absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-3xl border border-cyan-400/10" />

          </div>
        </div>

        {/* ================= FEATURE CARDS ================= */}

        <div className="mt-16 grid gap-4 md:grid-cols-3">

          {infoCards.map((card) => (
            <div
              key={card.number}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 shadow-[0_10px_40px_rgba(34,211,238,0.035)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-400/[0.025] hover:shadow-[0_15px_50px_rgba(34,211,238,0.08)]"
            >

              {/* PERMANENT CYAN LIGHT */}

              <div className="pointer-events-none absolute -bottom-16 left-1/2 h-28 w-40 -translate-x-1/2 rounded-full bg-cyan-400/[0.14] blur-[45px]" />

              {/* PERMANENT BLUE LIGHT */}

              <div className="pointer-events-none absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-blue-500/[0.10] blur-[35px]" />

              {/* NUMBER + ICON */}

              <div className="relative flex items-center justify-between">

                <span className="text-xs font-bold tracking-[0.2em] text-cyan-400/70">
                  {card.number}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] text-lg shadow-[0_0_18px_rgba(34,211,238,0.06)] transition-all duration-500 group-hover:rotate-3 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.1]">
                  {card.icon}
                </div>

              </div>

              {/* LINE */}

              <div className="relative mt-5 h-px w-10 bg-white/10 transition-all duration-500 group-hover:w-16 group-hover:bg-cyan-400/40" />

              {/* TITLE */}

              <h4 className="relative mt-5 text-lg font-semibold text-white">
                {card.title}
              </h4>

              {/* TEXT */}

              <p className="relative mt-3 text-sm leading-6 text-gray-500">
                {card.text}
              </p>

            </div>
          ))}

        </div>
      </div>

      {/* ================= BOTTOM FADE ================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080B1F] to-transparent" />

    </section>
  );
}

export default About;

