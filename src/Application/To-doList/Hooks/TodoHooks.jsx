import { useState } from "react";

const useTodo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState([]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const markDone = (index) => {
    const task = todos[index];
    setDone([...done, task]);
    setTodos(todos.filter((_, i) => i !== index));
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return { input, setInput, todos, done, addTodo, markDone, deleteTodo };
};

export default useTodo;
