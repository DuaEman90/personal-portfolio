function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050816] px-6 pt-24"
    >
      {/* Background Effects */}
      <div className="absolute left-[-120px] top-[15%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-[-100px] right-[-80px] h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[100px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="z-10">

          {/* Small Intro */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Available for opportunities
          </div>

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Dua
            <span className="text-cyan-400">Eman</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-300 sm:text-3xl">
            Frontend Web Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            I build modern, responsive and interactive web experiences
            with clean code, thoughtful design and modern frontend
            technologies.
          </p>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["React", "JavaScript", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center md:justify-end">

          {/* Outer Glow */}
          <div className="absolute h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

          {/* Decorative Rings */}
          <div className="absolute h-[360px] w-[360px] rounded-full border border-cyan-400/10" />

          <div className="absolute h-[310px] w-[310px] rounded-full border border-blue-500/10" />

          {/* Image */}
          <div className="relative h-72 w-72 rounded-full p-[2px] sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-transparent opacity-70 blur-sm" />

            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-[#080d18] p-2">
              <img
                src="/images/profile.png"
                alt="DuaEman"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Floating Code Card */}
          <div className="absolute -bottom-5 -left-2 rounded-xl border border-white/10 bg-[#080d18]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:left-0">
            <p className="font-mono text-xs text-gray-500">
              &lt;developer /&gt;
            </p>
            <p className="mt-1 text-sm font-semibold text-cyan-400">
              Building ideas into reality.
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="h-10 w-6 rounded-full border border-white/20 p-1">
            <div className="mx-auto h-2 w-1 rounded-full bg-cyan-400 animate-bounce" />
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;