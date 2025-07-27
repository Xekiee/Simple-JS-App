import React from "react";
import Hooks from "./Hooks";

const Practice = () => {
  const { input, setInput, handleSubmit, todos, setTodos } = Hooks();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-100 h-10"
          placeholder="What to do "
        />
        <button type="submit"> + </button>
      </form>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li key={index} className="text-lg">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Practice;
