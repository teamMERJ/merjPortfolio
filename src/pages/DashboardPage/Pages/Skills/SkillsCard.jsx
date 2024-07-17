// SkillCard.js
import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  const { name, levelOfProficiency, logo } = skill;

  const levelStyles = {
    beginner: "bg-red-200 text-red-800",
    intermediate: "bg-yellow-200 text-yellow-800",
    advanced: "bg-blue-200 text-blue-800",
    expert: "bg-green-200 text-green-800",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 rounded-lg shadow-lg bg-white flex flex-col items-center"
    >
      <img src={logo} alt={`${name} logo`} className="w-16 h-16 mb-2" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <span className={`mt-2 px-2 py-1 rounded ${levelStyles[levelOfProficiency]}`}>
        {levelOfProficiency.charAt(0).toUpperCase() + levelOfProficiency.slice(1)}
      </span>
    </motion.div>
  );
};

export default SkillCard;
