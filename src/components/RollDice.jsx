import React, { useState } from "react";
import { motion } from "framer-motion";

const RollDice = ({ currentDice, rollDice ,isRolling }) => {
  
  return (
    <div className="grid place-items-center mt-12">
      <motion.div
    onClick={rollDice}
    className="cursor-pointer"
    animate={
      isRolling
        ? { rotate: 720, scale: 1.1 } 
        : { rotate: [0, 360] }       
    }
    transition={
      isRolling
        ? { duration: 0.6, ease: "easeInOut" }
        : { repeat: Infinity, duration: 3, ease: "linear" }
    }
  >
    <img
      className="w-32 md:w-40"
      src={`Images/dice_${currentDice}.png`}
      alt="dice"
    />
  </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl md:text-2xl font-bold mt-4 text-gray-800"
      >
        Click on Dice to Roll
      </motion.p>
    </div>
  );
};

export default RollDice;
