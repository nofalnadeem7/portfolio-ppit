import React from "react";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard/SkillCard";
import { FaLaptopCode, FaRobot, FaServer, FaMobileAlt } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white overflow-x-hidden">
      <section className="flex flex-col justify-center items-center text-center py-28 px-8 relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
        >
          Building the Future with <br /> AI, Code & Imagination 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg text-gray-300 max-w-2xl"
        >
          We’re a collective of passionate engineers & creators developing
          intelligent solutions and futuristic web experiences.
        </motion.p>

        <motion.a
          href="/portfolio"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="mt-10 px-10 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold text-lg shadow-lg"
        >
          Meet Our Team 💫
        </motion.a>

        <div className="absolute -z-10 w-[1000px] h-[1000px] bg-purple-600/10 rounded-full blur-3xl top-0" />
      </section>

      
      <section className="py-24 px-10 text-center">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          What We Do 💡
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <SkillCard
            icon={<FaLaptopCode />}
            title="Web Development"
            description="Crafting futuristic, responsive, and lightning-fast web applications with React, Node.js, and AI integration."
            delay={0.1}
          />
          <SkillCard
            icon={<FaMobileAlt />}
            title="Mobile Development"
            description="Building sleek and powerful mobile apps with React Native, integrating cloud and AI features seamlessly."
            delay={0.2}
          />
          <SkillCard
            icon={<FaRobot />}
            title="AI / Machine Learning"
            description="Designing intelligent systems using deep learning, NLP, and data-driven insights for real-world impact."
            delay={0.3}
          />
          <SkillCard
            icon={<FaServer />}
            title="DevOps & Cloud"
            description="Automating deployments and scaling applications using Docker, CI/CD, and cloud infrastructure."
            delay={0.4}
          />
        </div>
      </section>

    </div>
  );
};

export default HomePage;
