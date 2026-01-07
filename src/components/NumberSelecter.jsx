import React from "react";
import { motion } from "framer-motion";

const NumberSelecter = ({ selectedNumber, setSelectednumber, error, setError }) => {
  const array = [1, 2, 3, 4, 5, 6];

  const numberSelecterHandler = (value) => {
    setSelectednumber(value);
    setError("");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-end w-full px-4 md:px-10 mt-6">
      <p className="font-semibold text-red-500 text-lg md:text-xl mb-2 md:mb-0">
        {error}
      </p>

      <div className="flex gap-4">
        {array.map((value, i) => (
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            key={i}
            onClick={() => numberSelecterHandler(value)}
            className={`w-12 h-12 text-2xl font-bold rounded-xl shadow-md transition-all duration-300 ${
              selectedNumber === value
                ? "bg-teal-500 text-white scale-110"
                : "bg-black text-white hover:bg-gray-700"
            }`}
          >
            {value}
          </motion.button>
        ))}
      </div>

      <p className="font-bold text-2xl md:text-3xl text-gray-900 mt-4 md:mt-0">
        Select Number
      </p>
    </div>
  );
};

export default NumberSelecter;
