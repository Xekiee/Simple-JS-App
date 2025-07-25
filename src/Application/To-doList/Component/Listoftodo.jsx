import Check from "../../../assets/Check.png";
import Trash from "../../../assets/Trash.png";
const Listoftodo = () => {
  return (
    <div className="flex justify-between items-center w-55 mx-2 my-2">
      <p>Basketball</p>
      <div>
        <button className="pr-1">
          <img src={Check} alt="" className="h-6 w-6" />
        </button>
        <button>
          <img src={Trash} alt="" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Listoftodo;
