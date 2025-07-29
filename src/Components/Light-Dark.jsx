import React, { useState } from "react";
import { useTheme } from "./LDContext";
const LightDark = ({ title }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <div className="flex items-center justify-between card bg-base-100 w-auto h-50 shadow-sm opacity-80 md:h-70 lg:h-100 lg:mr-5 ">
        <span className="card-title text-xs mt-3 md:text-xl lg:text-3xl">
          {title}
        </span>
        <div className="card-body items-center text-center mt-20 h-10 w-25 md:w-37 md:h-15 lg:w-43 lg:h-20">
          <button
            className="btn btn-base-content btn-circle text-4xl w-20 h-20"
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LightDark;
