import React from "react";
import { motion } from "framer-motion";

const TotalScore = ({ score }) => {
  return (
    <div className="font-bold w-full md:w-40 text-center">
      <motion.h1
        key={score}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="text-6xl md:text-7xl text-black"
      >
        {score}
      </motion.h1>

      <p className="text-xl md:text-2xl font-medium mt-2 text-gray-800">
        Total Score
      </p>
    </div>
  );
};

export default TotalScore;
