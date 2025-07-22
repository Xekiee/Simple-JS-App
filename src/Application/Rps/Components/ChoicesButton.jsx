import React from "react";

const PlayerChoice = ({ text }) => {
  return (
    <div>
      <button className="bg-none border-2 w-20 h-10 rounded-xl border-primary font-family font-bold">
        {text}
      </button>
    </div>
  );
};

export default PlayerChoice;
