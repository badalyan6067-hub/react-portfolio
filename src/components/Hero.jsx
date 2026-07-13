import hero from "../assets/hero.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h1 className="text-red-500 text-5xl">TEST TAILWIND</h1>
          <h1 className="text-5xl font-bold">
            Hi, I'm
            <span className="text-blue-500">Frontend Developer</span>
          </h1>

          <p className="mt-5 text-gray-300 text-lg">
            I create modern React websites, responsive design and SEO friendly
            applications.
          </p>

          <div className="mt-7 flex gap-4">
            <button className="bg-blue-600 px-6 py-3 rounded-lg">
              Projects
            </button>

            <button className="border px-6 py-3 rounded-lg">Download CV</button>
          </div>
        </motion.div>

        <motion.img
          src={hero}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-80 mx-auto"
        />
      </div>
    </section>
  );
}

export default Hero;
