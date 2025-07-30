import { useRps } from "../Context/RpsContext";

const PlayerChoice = ({ text }) => {
  const { play } = useRps();

  return (
    <div>
      <button
        onClick={() => play(text)}
        className="bg-none border-2 w-20 h-10 rounded-xl border-primary font-family font-bold hover:bg-primary hover:text-white cursor-pointer "
      >
        {text}
      </button>
    </div>
  );
};

export default PlayerChoice;
