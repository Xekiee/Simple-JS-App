import React, { use, useState, createContext } from "react";

export const CalculatorContext = createContext();

const CalcuContext = ({ children }) => {
  const [value, setValue] = useState("");

  return (
    <CalculatorContext.Provider value={{ value, setValue }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalcuContext;
