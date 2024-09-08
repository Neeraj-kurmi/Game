import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
function App() {
  const [isGameStart, setIsGameStart] = useState(0);

  const toggleGamePlay = (difficulty) => {
    setIsGameStart(difficulty);
    console.log("difficulty", difficulty);
  };
  return (
    <>
      {isGameStart != 0 ? (
        <GamePlay difficulty={isGameStart} setIsGameStart={setIsGameStart} />
      ) : (
        <StartGame toggle={toggleGamePlay} />
      )}
    </>
  );
}

export default App;
