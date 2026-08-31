import React, { useState } from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setActive(id);
  };

  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[94%] max-w-6xl -translate-x-1/2 rounded-full border border-cyan-400/10 bg-[#050816]/75 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl">

      <div className="flex items-center justify-between gap-4">

        {/* ================= DE LOGO ================= */}

        <button
          onClick={() => scrollToSection("home")}
          className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-cyan-400/10"
        >
          <img
            src="/images/DE-logo.png"
            alt="DuaEman Logo"
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </button>

        {/* ================= NAVIGATION ================= */}

        <div className="hidden items-center gap-1 md:flex">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === item.id
                  ? "bg-white text-[#050816] shadow-[0_0_20px_rgba(255,255,255,0.12)]"
                  : "text-gray-400 hover:bg-white/5 hover:text-cyan-300"
              }`}
            >
              {item.name}
            </button>
          ))}

        </div>

        {/* ================= HIRE ME ================= */}

        <button
          onClick={() => scrollToSection("contact")}
          className="shrink-0 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-[#050816] shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
        >
          Hire Me
        </button>

      </div>
    </nav>
  );
}

export default Navbar;



