function Services() {
  const services = [
    "React Website Development",
    "Responsive Web Design",
    "SEO Optimization",
    "Website Performance Improvement",
  ];

  return (
    <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Services</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service}
            className="bg-slate-800 p-6 rounded-xl text-center hover:bg-blue-600 transition"
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
