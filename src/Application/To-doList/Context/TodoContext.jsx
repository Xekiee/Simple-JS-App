import React, { createContext, useContext } from "react";
import useTodo from "../Hooks/TodoHooks";

// Create Context
const TodoContext = createContext();

// Provider component
export const TodoProvider = ({ children }) => {
  const todo = useTodo(); // Get state and functions from hook

  return <TodoContext.Provider value={todo}>{children}</TodoContext.Provider>;
};

// Custom hook to use the context
export const useTodoContext = () => useContext(TodoContext);
