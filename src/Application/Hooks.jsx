import { useState } from "react";

const Hooks = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  return {
    input,
    setInput,
    todos,
    setTodos,
    handleSubmit,
  };
};

export default Hooks;
