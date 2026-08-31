import { useState } from "react";

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
    <nav className="fixed top-5 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-black/70 px-3 py-3 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="px-4 text-xl font-bold tracking-wide text-white"
        >
          Dua<span className="text-orange-400">Eman</span>
        </button>

        {/* Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                active === item.id
                  ? "bg-white text-black"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Hire Me */}
        <button
          onClick={() => scrollToSection("contact")}
          className="rounded-full bg-orange-400 px-5 py-2 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-orange-300"
        >
          Hire Me
        </button>

      </div>
    </nav>
  );
}

export default Navbar;