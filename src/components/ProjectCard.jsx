function ProjectCard({ project }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 hover:-translate-y-2 transition">
      <h3 className="text-2xl font-bold">{project.title}</h3>

      <p className="text-gray-300 mt-3">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((item) => (
          <span
            key={item}
            className="bg-blue-600 px-3 py-1 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-4">
        <a href={project.github} className="text-blue-400">
          GitHub
        </a>

        <a href={project.demo} className="text-blue-400">
          Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
