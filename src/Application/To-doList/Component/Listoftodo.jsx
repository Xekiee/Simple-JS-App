import Check from "../../../assets/Check.png";
import Trash from "../../../assets/Trash.png";

const Listoftodo = ({ todo, onDone, onDelete }) => {
  return (
    <div className="flex justify-between items-center w-55 mx-2 my-2">
      <p>{todo}</p>
      <div>
        <button className="pr-1" onClick={onDone}>
          <img src={Check} alt="done" className="h-6 w-6" />
        </button>
        <button onClick={onDelete}>
          <img src={Trash} alt="delete" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Listoftodo;
