import React, { useContext, useState } from "react";
import { CalculatorContext } from "../CalcuContext/CalcuContext";

const Hooks = () => {
  const { value, setValue } = useContext(CalculatorContext);
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setValue("");
      setResult("");
    } else if (value === "=") {
      if (value.trim() === "") {
        setResult("");
      } else {
        const evaluated = eval(value);
        setResult(evaluated.toString());
      }
    } else {
      setValue((prev) => prev + val);
    }
  };
  return { value, handleClick, result };
};

export default Hooks;
