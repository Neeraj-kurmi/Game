const startGame = ({ toggle }) => {
  return (
    <div className="grid md:m-20 place-items-center mt-40">
      <div>
        <img src="/Images/dices 1.png" alt="" />
      </div>
      <div className="">
        <h1 className="font-bold text-4xl">DICE GAME</h1>
        {/* <button
          onClick={()=>toggle()}
          className="bg-black hover:bg-teal-400 hover:duration-200 text-white px-10 
          py-2 mt-4 ml-5 rounded-lg cursor-pointer 
          "
        >
          Play Now
        </button> */}
        <button
          onClick={() => toggle(3)}
          className="bg-black hover:bg-teal-400 hover:duration-200 text-white px-10 
            py-2 mt-4 ml-5 rounded-lg cursor-pointer 
            "
        >
          easy
        </button>
        <button
          onClick={() => toggle(2)}
          className="bg-black hover:bg-teal-400 hover:duration-200 text-white px-10 
            py-2 mt-4 ml-5 rounded-lg cursor-pointer 
            "
        >
          medium
        </button>
        <button
          onClick={() => toggle(1)}
          className="bg-black hover:bg-teal-400 hover:duration-200 text-white px-10 
                py-2 mt-4 ml-5 rounded-lg cursor-pointer 
                "
        >
          hard
        </button>
      </div>
    </div>
  );
};

export default startGame;
