import React, { useState } from "react";
import Dice from "react-dice-roll";

const RollDice = ({ currentDice, rollDice, selectedNumber }) => {
  return (
    <div className="grid grid-col justify-items-center mt-15 ">
      <div onClick={rollDice} className="cursor-pointer ">
        <Dice
          // disabled={true}
          cheatValue={currentDice}
          size={120}
          faces={[
            `Images/dice_1.png`,
            `Images/dice_2.png`,
            `Images/dice_3.png`,
            `Images/dice_4.png`,
            `Images/dice_5.png`,
            `Images/dice_6.png`,
          ]}
          faceBg={"black"}
          disabled={selectedNumber==null}
        />
      </div>
      <p className="text-2xl font-bold">Click on Dice to Roll</p>
    </div>
  );
};

export default RollDice;
