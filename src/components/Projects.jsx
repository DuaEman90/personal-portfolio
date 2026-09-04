import React from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Personal Portfolio",
      category: "Personal Website",
      description:
        "A clean and responsive personal portfolio website designed to showcase my skills, projects, education and frontend development journey. The layout focuses on a simple professional interface with well-organized sections and a smooth browsing experience across different screen sizes.",
      tech: ["HTML", "CSS"],
      image: "portfolio.png",
      link: "https://scintillating-bienenstitch-0ce7db.netlify.app/",
    },
    {
      number: "02",
      title: "Savora",
      category: "Food & Makeup",
      description:
        "A creative food and makeup website that combines two visually engaging categories in one modern interface. The website presents food-related content alongside makeup-focused sections, using attractive layouts, clear content organization and responsive design to create an enjoyable browsing experience.",
      tech: ["React", "Tailwind CSS"],
      image: "savora.png",
      link: "https://savora-flr1sm4xx-dua-eman.vercel.app/",
    },
    {
      number: "03",
      title: "Coder Gym",
      category: "Fitness Website",
      description:
        "A modern gym website created with a bold and energetic fitness-focused interface. It presents the gym experience through structured sections, strong visual hierarchy and responsive layouts, making the website easy to explore while maintaining a professional and engaging fitness aesthetic.",
      tech: ["React", "Tailwind CSS"],
      image: "codergym.png",
      link: "https://coder-gym-rho.vercel.app/",
    },
    {
      number: "04",
      title: "Real Estate",
      category: "Property Website",
      description:
        "A modern real estate website focused on showcasing beautiful houses and properties in some of the best and most desirable areas. The interface is designed to make property exploration simple, with an elegant layout, organized information and a responsive experience for different screen sizes.",
      tech: ["React", "Tailwind CSS"],
      image: "realestate.png",
      link: "https://real-estate-ten-puce-90.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#06091a] px-5 py-20 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            My Work
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400">
            A collection of projects I've created while developing my
            frontend skills, focusing on responsive layouts, modern UI,
            clean structure and engaging user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 justify-items-center gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative w-full max-w-[480px]"
            >
              {/* Card */}
              <div className="relative ov
              erflow-hidden rounded-[22px] border border-white/10 bg-white/[0.035] p-2.5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30">
                
                {/* Image */}
                <div className="relative h-[175px] overflow-hidden rounded-[16px] border border-white/5 bg-[#0b1025]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:brightness-110"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06091a]/80 via-transparent to-transparent" />

                  {/* Project Number */}
                  <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-semibold tracking-widest text-white backdrop-blur-md">
                    {project.number}
                  </span>

                  {/* Category */}
                  <span className="absolute bottom-3 left-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-medium text-cyan-300 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="px-2.5 pb-2.5 pt-4">
                  
                  {/* Title */}
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
                      {project.title}
                    </h3>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-300">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-2.5 text-[12px] leading-[1.65] text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-4">
                    <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-cyan-400/20 bg-cyan-400/[0.07] px-2.5 py-1.5 text-[10px] font-semibold text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.05)] transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Area */}
                  <div className="mt-4 flex items-center justify-between border-t border-white/[0.07] pt-3">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-gray-600">
                        Built With
                      </p>

                      <p className="mt-1 text-[10px] font-medium text-gray-400">
                        {project.tech.join(" • ")}
                      </p>
                    </div>

                    {/* View Project */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/30 bg-cyan-400/[0.08] px-3.5 py-2 text-[10px] font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/15 hover:text-cyan-200"
                    >
                      View Project
                      <ExternalLink
                        size={12}
                        className="transition-transform duration-300 group-hover/button:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Glow */}
              <div className="pointer-events-none absolute -bottom-5 left-1/2 h-14 w-[75%] -translate-x-1/2 rounded-full bg-cyan-400/20 opacity-40 blur-2xl transition-all duration-500 group-hover:w-[85%] group-hover:opacity-70" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;