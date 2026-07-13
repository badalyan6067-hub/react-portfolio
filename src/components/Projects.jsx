import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern React developer portfolio website.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
  },

  {
    title: "Landing Page",
    description: "Responsive business landing page.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
