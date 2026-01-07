import React from "react";
import { motion } from "framer-motion";

const StartGame = ({ toggle }) => {
  return (
    <div className="grid md:m-20 place-items-center mt-28">
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <img
          className="w-48 md:w-60 drop-shadow-2xl"
          src="/Images/dices 1.png"
          alt="dices"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <h1 className="font-bold text-4xl md:text-6xl text-gray-900">
          DICE GAME
        </h1>

        <motion.button
          onClick={toggle}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          className="bg-black text-white px-8 py-3 mt-5 rounded-2xl text-lg font-semibold shadow-xl hover:bg-gray-800 transition-all duration-300"
        >
          Play Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default StartGame;
