import React from "react";

import {
  FiArrowUpRight,
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navLinks = [
    ["Home", "home"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Contact", "contact"],
  ];

  return (
    <footer className="relative isolate overflow-hidden border-t border-cyan-400/[0.12] bg-[#030712] px-5 py-8 sm:px-8 md:px-12">
      {/* Main Cyan Glow */}
      <div className="pointer-events-none absolute left-[8%] top-[-130px] h-72 w-72 rounded-full bg-cyan-400/[0.10] blur-[120px]" />

      {/* Blue Glow */}
      <div className="pointer-events-none absolute right-[5%] top-[20%] h-64 w-64 rounded-full bg-blue-500/[0.08] blur-[120px]" />

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-80 w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/[0.055] blur-[130px]" />

      {/* Subtle Center Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.025] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("home")}
              aria-label="Go to home"
              className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-cyan-400/[0.15] bg-cyan-400/[0.04] shadow-[0_0_20px_rgba(34,211,238,0.04)] transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.09] hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]"
            >
              <img
                src="/lodo.png"
                alt="DuaEman Logo"
                className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </button>

            <div>
              <p className="text-sm font-semibold tracking-wide text-white">
                Dua<span className="text-cyan-400">Eman</span>
              </p>

              <p className="mt-0.5 text-[11px] text-gray-500">
                Frontend Developer
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7">
            {navLinks.map(([name, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="cursor-pointer text-[11px] font-medium text-gray-500 transition-all duration-300 hover:text-cyan-300 hover:[text-shadow:0_0_12px_rgba(34,211,238,0.45)]"
              >
                {name}
              </button>
            ))}
          </nav>

          {/* Socials + CTA */}
          <div className="flex items-center gap-2.5">
            {/* Email */}
            <a
              href="mailto:d27065204@gmail.com"
              aria-label="Email"
              className="group flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] text-gray-500 shadow-[0_0_15px_rgba(34,211,238,0.02)] transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.08] hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.16)]"
            >
              <FiMail className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/DuaEman90"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="group flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] text-gray-500 shadow-[0_0_15px_rgba(34,211,238,0.02)] transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.08] hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.16)]"
            >
              <FiGithub className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/dua-eman-31783a405/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] text-gray-500 shadow-[0_0_15px_rgba(34,211,238,0.02)] transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.08] hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.16)]"
            >
              <FiLinkedin className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>

            {/* Let's Talk */}
            <button
              onClick={() => scrollToSection("contact")}
              className="group ml-1 flex cursor-pointer items-center gap-1.5 rounded-full bg-cyan-400 px-4 py-2 text-[11px] font-bold text-[#030712] shadow-[0_0_20px_rgba(34,211,238,0.18)] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.38)]"
            >
              Let's Talk

              <FiArrowUpRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-7 flex flex-col gap-2 border-t border-cyan-400/[0.08] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] tracking-wide text-gray-600">
            © 2026 Dua Eman. All rights reserved.
          </p>

          <p className="text-[10px] tracking-wide text-gray-600">
            Built with{" "}
            <span className="font-medium text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.45)]">
              React
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;