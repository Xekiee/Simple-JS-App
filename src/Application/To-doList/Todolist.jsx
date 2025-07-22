import React from "react";
import Listoftodo from "./Component/Listoftodo";

const Todolist = () => {
  return (
    <div className="flex justify-center bg-secondary flex-col h-screen items-center">
      <div className="flex justify-center mt-4 font-family text-primary text-2xl italic">
        <header>
          <p>Todo-List</p>
        </header>
      </div>

      <div className="mt-10 h-140 w-70 rounded-2xl bg-warning/80 bg-opacity-70">
        <div className="flex justify-center mt-7">
          <input
            type="text"
            name=""
            id=""
            className="bg-none border-2 border-white-xs rounded-sm mr-2 pl-3 "
            placeholder="'What to do!'"
          />
          <button className="bg-none border-2 w-14 h-8 rounded-lg text-xl pb-8">
            <p>+</p>
          </button>
        </div>

        <div className="flex ml-3 mt-10">
          <p>List of todo</p>
        </div>
        <div className="flex justify-center mt-4">
          <div className="bg-warning h-40 w-60 rounded-2xl">
            <div>
              <Listoftodo />
              <Listoftodo />
              <Listoftodo />
              <Listoftodo />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="mt-2 pl-4">
            <p>Done Task</p>
          </div>
          <div className="flex justify-center mt-4">
            <div className="bg-warning h-40 w-60 rounded-2xl flex justify-center">
              <ul className="mt-4">
                <li>Morgan</li>
                <li>Morgan</li>
                <li>Morgan</li>
                <li>Morgan</li>
                <li>Morgan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
