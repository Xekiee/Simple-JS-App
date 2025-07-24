import React from "react";

const Counter = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-y-10">
      <div className="text-primary italic text-2xl font-bold">
        <span>Counter</span>
      </div>
      <div className=" flex flex-col justify-between items-center  w-80  h-120">
        <div className="mt-10 text-2xl font-family text-primary font-bold">
          <span></span>Let's Count!
        </div>
        <div className="text-primary text-2xl font-family">
          <span>100</span>
        </div>
        <div className="">
          <div className="w-80 h-40 bg-warning my-4 rounded-2xl flex justify-between items-center">
            <button className="border-2 h-10 w-10 rounded-xl ml-3 border-primary">
              +
            </button>
            <button className="border-2 h-10 w-18 rounded-xl border-primary">
              Reset
            </button>
            <button className="border-2 h-10 w-10 mr-3 rounded-xl border-primary">
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
