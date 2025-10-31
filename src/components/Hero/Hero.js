
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden text-center py-32 bg-gradient-to-b from-[#130024] via-[#0a0014] to-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl top-[-150px] left-[-150px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
      >
        Welcome to The Dream Team
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed"
      >
        We are innovators, problem-solvers, and creators — shaping the digital
        future through code, design, and imagination.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-12"
      >
        <a
          href="#team"
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full font-semibold text-lg shadow-[0_0_15px_rgba(168,85,247,0.6)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all"
        >
          Meet the Team 🚀
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
