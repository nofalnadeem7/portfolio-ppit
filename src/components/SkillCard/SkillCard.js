import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-purple-900/50 to-black border border-purple-700/50 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/40 hover:-translate-y-2 transition-all duration-300 text-center"
    >
      {/* 🔑 KEY CHANGE: Added 'flex' and 'justify-center' to ensure the icon is horizontally centered. */}
      <div className="text-5xl mb-4 flex justify-center">{icon}</div>
      
      <h3 className="text-xl font-semibold text-purple-300">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </motion.div>
  );
};

export default SkillCard;