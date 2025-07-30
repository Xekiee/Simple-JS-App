import { Routes, Route } from "react-router-dom";
import Rps from "./Application/Rps/Rps";
import "./index.css";
import Todolist from "./Application/To-doList/Todolist";
import Homepage from "./Pages/Homepage";
import Calculator from "./Application/Calculator/Calculator";
import CalcuContext from "./Application/Calculator/CalcuContext/CalcuContext";
import { ThemeProvider } from "./Components/LDContext";
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ThemeProvider>
              <Homepage></Homepage>
            </ThemeProvider>
          }
        />
        <Route
          path="/calculator"
          element={
            <CalcuContext>
              <Calculator></Calculator>
            </CalcuContext>
          }
        />
        <Route path="/Rps" element={<Rps></Rps>} />
        <Route path="/To-dolist" element={<Todolist></Todolist>} />
      </Routes>
    </div>
  );
}

export default App;
