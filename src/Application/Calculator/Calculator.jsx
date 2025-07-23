import React from "react";
import Button from "../Components/Button";

const Calculator = () => {
  return (
    <div className="">
      <div className="flex justify-center mt-4 text-4xl text-primary italic ">
        {" "}
        <span>Calculator</span>
      </div>
      <div className="flex justify-center mt-10 ">
        <div className="h-125 w-70 bg-warning/70 rounded-2xl flex flex-col items-center font-family">
          <div className="h-45 w-60 bg-black/40 mt-10 rounded-2xl flex justify-center items-center flex-col">
            <div className="flex items-center h-20 w-60 mt-10 justify-between text-2xl">
              <div className="flex-1 mx-5 ">
                <span>=</span>
              </div>
              <div className="text-right mr-4">
                <span>Morgan</span>
              </div>
            </div>
            <div className="w-full text-right my-8 mr-10">
              <span>Morgan</span>
            </div>
          </div>
          <div className="flex h-70 w-full ">
            <div className="grid grid-cols-4 gap-2 items-center w-full mx-2 my-2 ml-5">
              <Button text="1" />
              <Button text="2" />
              <Button text="3" />
              <Button text="x" />
              <Button text="4" />
              <Button text="5" />
              <Button text="6" />
              <Button text="/" />
              <Button text="7" />
              <Button text="8" />
              <Button text="9" />
              <Button text="+" />
              <Button text="AC" />
              <Button text="0" />
              <Button text="." />
              <Button text="-" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
