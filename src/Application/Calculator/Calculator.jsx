import React from "react";
import Button from "./Component/Button";
import useCalculator from "./Hooks/Hooks";

const Calculator = () => {
  const { value, handleClick, result } = useCalculator();
  const buttons = [
    "1",
    "2",
    "3",
    "*",
    "4",
    "5",
    "6",
    "/",
    "7",
    "8",
    "9",
    "+",
    "AC",
    "0",
    "=",
    "-",
  ];
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-base-200">
      <div className="flex justify-center mt-4 text-4xl text-base-content font-bold ">
        {" "}
        <span>Calculator</span>
      </div>
      <form
        className="flex justify-center mt-10 "
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="h-125 w-70 bg-base-100 rounded-2xl flex flex-col items-center font-family">
          <div className="h-45 w-60 bg-base-300/30 mt-10 rounded-2xl flex justify-center items-center flex-col">
            <div className="flex items-center h-20 w-60 mt-10 justify-between text-2xl font-bold">
              <div className="flex-1 mx-5 ">
                <span>=</span>
              </div>
              <div className="text-right mr-4">
                <span>{result}</span>
              </div>
            </div>
            <div className="w-full text-right my-8 mr-10">
              <div className="w-full h-10">
                <span>{value} </span>
              </div>
            </div>
          </div>
          <div className="flex h-70 w-full ">
            <div className="grid grid-cols-4 gap-2 items-center w-full mx-2 my-2 ml-5">
              {buttons.map((btn, index) => (
                <Button
                  key={index}
                  text={btn}
                  onClick={() => handleClick(btn)}
                />
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
