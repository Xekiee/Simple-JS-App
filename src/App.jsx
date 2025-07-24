import Rps from "./Application/Rps/Rps";
import "./index.css";
import Todolist from "./Application/To-doList/Todolist";
import Homepage from "./Pages/Homepage";
import Calculator from "./Application/Calculator/Calculator";
import Counter from "./Application/Counter/Counter";
import CalcuContext from "./Application/Calculator/CalcuContext/CalcuContext";

function App() {
  return (
    <div>
      <CalcuContext>
        <Calculator />
      </CalcuContext>
    </div>
  );
}

export default App;
