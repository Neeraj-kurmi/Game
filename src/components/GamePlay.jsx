import { useState, useEffect } from "react";
import NumberSelecter from "./NumberSelecter";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import Rules from "./Rules";

const GamePlay = ({ difficulty, setIsGameStart }) => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectednumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);
  //   dvn
  const [life, setLife] = useState(difficulty * 2);
  const [showResult, setShowResult] = useState(false);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    if (life <= 0) {
      setShowResult(true);
    }
  }, [life]);

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You Have Not Selected Any Number");
      return;
    }
    const random = randomNumber(1, 7);
    setCurrentDice((prev) => random);

    if (selectedNumber === random) {
      setScore((prev) => prev + random);
    } else {
      // setScore((prev) => prev - 2);
      setLife((prev) => prev - 1);
    }

    setSelectednumber(null);
  };

  const resetScore = () => {
    setScore(0);
  };
  function closeResult() {
    setShowResult(false);
    setIsGameStart(0);
  }
  return (
    <>
      <div
        //  className="border border-red-600 absolute top-[50%] right-[50%] -translate-x-[50%] -translate-y-[50%] z-10 text-3xl"
        className={`h-full absolute top-0 left-0 w-full bg-black z-10 text-white flex justify-center items-center ${
          showResult || "hidden"
        } `}
      >
        <div className="border h-fit text-3xl font-bold">
          total score
          <div className="text-center">{score}</div>
        </div>
        <button className="ml-2" onClick={() => closeResult()}>
          X close
        </button>
      </div>

      <main className="md:flex justify-between items-center mt-8 ">
        <TotalScore score={score} />
      </main>

      <div className="absolute right-0 font-bold text-2xl">
        <p>difficulty = {["hard", "medium", "easy"].at(difficulty - 1)}</p>
        <p>life = {life}</p>
        <NumberSelecter
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectednumber={setSelectednumber}
        />
      </div>

      <RollDice
        currentDice={currentDice}
        rollDice={rollDice}
        selectedNumber={selectedNumber}
      />

      <div className="grid grid-col justify-center pt-8">
        {/* <button
          onClick={resetScore}
          className="bg-black hover:bg-teal-400 hover:duration-200 text-white px-10 
                py-2 mt-4 ml-5 rounded-lg cursor-pointer 
                "
        >
          Reset Score
        </button> */}

        {/* <button
          onClick={() => setShowRules((prev) => !prev)}
          className="bg-black hover:bg-teal-400 hover:duration-200 text-white px-10 
                py-2 mt-4 ml-5 rounded-lg cursor-pointer 
                "
        >
          {showRules ? "Hide" : "Show"} Rules
        </button> */}
      </div>
      {showRules && <Rules />}
    </>
  );
};
export default GamePlay;
