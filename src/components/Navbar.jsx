function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#040813] px-6 pt-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-orange-400/10 blur-[120px]" />

      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Hero Text */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-orange-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Dua<span className="text-orange-400">Eman</span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-300 sm:text-3xl">
            Frontend Web Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            I create modern, responsive and user-friendly web experiences
            using React, JavaScript, Tailwind CSS and modern frontend
            technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="rounded-full bg-orange-400 px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-orange-300"
            >
              Download Resume
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition-all duration-300 hover:border-orange-400 hover:text-orange-400"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-orange-400/20 blur-3xl" />

            <div className="relative h-72 w-72 overflow-hidden rounded-full border border-white/10 bg-white/5 p-2 sm:h-80 sm:w-80">
              <img
                src="/images/profile.png"
                alt="DuaEman"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;