const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git & GitHub",
  "Responsive Design",
  "SEO",
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-slate-800 p-5 rounded-xl text-center hover:bg-blue-600 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
