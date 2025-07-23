import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className="h-12 w-11 bg-none border-2 border-primary/40 rounded-xl flex justify-center items-center">
        {text}{" "}
      </button>
    </div>
  );
};

export default Button;
