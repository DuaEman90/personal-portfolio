import React, { useState } from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
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
    <nav className="fixed left-1/2 top-5 z-50 flex w-[94%] max-w-6xl -translate-x-1/2 items-center justify-between gap-4">

      {/* Logo - Outside Pill */}
      <button
        onClick={() => scrollToSection("home")}
        className="group flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center transition-transform duration-300 hover:scale-110"
      >
        <img
          src="/lodo.png"
          alt="DuaEman Logo"
          className="h-14 w-14 object-contain"
        />
      </button>

      {/* Navigation Pill */}
      <div className="hidden items-center gap-1 rounded-full border border-cyan-400/10 bg-[#050816]/75 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:flex">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative cursor-pointer rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
              active === item.id
                ? "bg-white text-[#050816] shadow-[0_0_20px_rgba(255,255,255,0.12)]"
                : "text-gray-400 hover:text-cyan-300"
            }`}
          >
            {item.name}

            {/* Hover Bottom Line */}
            <span
              className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-cyan-400 transition-all duration-300 ${
                active === item.id
                  ? "w-0 opacity-0"
                  : "w-0 opacity-0 group-hover:w-8 group-hover:opacity-100"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Hire Me - Outside Pill */}
      <button
        onClick={() => scrollToSection("contact")}
        className="shrink-0 cursor-pointer rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-[#050816] shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
      >
        Hire Me
      </button>
    </nav>
  );
}

export default Navbar;







