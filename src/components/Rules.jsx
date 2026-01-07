import React from "react";
import { motion } from "framer-motion";

function Rules() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="px-6 md:px-20 pt-8 bg-white/40 backdrop-blur-md rounded-2xl shadow-lg mx-4 md:mx-10 mt-6"
    >
      <h1 className="font-bold text-xl md:text-2xl text-gray-900 mb-3">
        How to Play Dice Game
      </h1>

      {[
        "Select any number",
        "Click on dice image",
        "If selected number equals dice → you get same points as dice",
        "Wrong guess → 2 points will be deducted",
      ].map((rule, i) => (
        <motion.h3
          key={i}
          whileHover={{ scale: 1.02 }}
          className="font-medium text-base md:text-lg text-gray-800 my-1"
        >
          {i + 1}. {rule}
        </motion.h3>
      ))}
    </motion.div>
  );
}

export default Rules;
