import { useState } from "react";
import { motion } from "framer-motion";
import NumberSelecter from "./NumberSelecter";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectednumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);
  const [isRolling, setIsRolling] = useState(false);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You Have Not Selected Any Number");
      return;
    }

    setIsRolling(true);
    setTimeout(() => {
      const random = randomNumber(1, 7);
      setCurrentDice(random);

      if (selectedNumber === random) {
        setScore((prev) => prev + random);
      } else {
        setScore((prev) => prev - 2);
      }

      setSelectednumber(undefined);
      setIsRolling(false);
    }, 600);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <motion.div
      className="min-h-screen w-full p-4 md:p-8"
      style={{ background: "linear-gradient(135deg, #e0f7fa, #80deea)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Score + Number Selector */}
      <main className="flex flex-col md:flex-row justify-between items-center mt-6 md:mt-8 gap-6">
        <TotalScore score={score} />
        <NumberSelecter
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectednumber={setSelectednumber}
        />
      </main>

      {/* Dice Roll with Shake */}
      <div className="flex justify-center mt-10">
        <motion.div
          animate={
            isRolling
              ? {
                  x: [0, -15, 15, -10, 10, 0],
                  rotate: [0, -20, 20, -10, 10, 0],
                }
              : {}
          }
          transition={{ duration: 0.5 }}
        >
          <RollDice currentDice={currentDice} rollDice={rollDice} />
        </motion.div>
      </div>

      {/* Buttons */}
      <div className="grid place-items-center mt-8 gap-4">
        <motion.button
          onClick={resetScore}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-black text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300"
        >
          Reset Score
        </motion.button>

        <motion.button
          onClick={() => setShowRules((prev) => !prev)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-black text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300"
        >
          {showRules ? "Hide" : "Show"} Rules
        </motion.button>
      </div>

      {/* Error animation */}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-red-600 font-bold text-lg mt-4"
        >
          {error}
        </motion.p>
      )}

      {/* Rules Section */}
      {showRules && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Rules />
        </motion.div>
      )}
    </motion.div>
  );
};

export default GamePlay;
