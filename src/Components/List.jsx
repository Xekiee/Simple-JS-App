import Card from "./Card";
import Calculator from "../assets/Calculator.png";
import Rps from "../assets/Rps.png";
import Todolist from "../assets/Todolist.png";
import LightDark from "./Light-Dark";
const List = () => {
  return (
    <div>
      <div className="px-4 grid gap-2 grid-cols-2 md:gap-4 lg:gap-6 ">
        <Card title="Calculator" link="/Calculator" image={Calculator} />
        <Card title="Rock Paper Scissor" link="/Rps" image={Rps} />
        <Card title="To-Do-List" link="/To-dolist" image={Todolist} />
        <LightDark title="Light/Dark Mode" />
      </div>
    </div>
  );
};

export default List;
