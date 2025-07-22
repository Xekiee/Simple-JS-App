import Rock from "../../assets/bg1.png";
import ChoicesButton from "./Components/ChoicesButton";
import { RpsProvider, useRps } from "./Context/RpsContext";

const RpsGameContent = () => {
  const { playerChoice, computerChoice, result, score } = useRps();
  return (
    <div className="flex bg-secondary w-screen h-screen justify-center ">
      <div className="w-80">
        <nav className="flex text-2xl text-primary italic font-semibold font-family justify-center mt">
          <span className="mt-5">Rock Paper Scissor</span>
        </nav>
        <div className="flex justify-center mt-10 ">
          <div className="bg-warning h-60 w-70 rounded-2xl opacity-70">
            <div className="flex justify-center mt-5 text-primary font-bold text-2xl">
              <p>Score</p>
            </div>
            <div className="flex justify-center mt-3">
              <div className="flex justify-between w-50 text-primary font-bold text-2xl">
                <p>P</p>
                <p>T</p>
                <p>C</p>
              </div>
            </div>
            <div className="mx-8 w-55">
              <div className="flex items-center justify-between text-2xl">
                <p className="w-8">{score.player}</p>
                <div className="w-px h-32 bg-gray-400"></div>
                <p className="w-8">{score.tie}</p>
                <div className="w-px h-32 bg-gray-400"></div>
                <p className="w-8">{score.computer}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2 my-4">
          <div className="flex justify-between text-xl font-semibold font-family">
            <p>Player Move</p>
            <p>Computer Move</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-40 ">
          <div className="flex w-70 justify-between items-center">
            <img src={Rock} alt={playerChoice} className="w-25" />
            <p>VS</p>
            <img src={Rock} alt={computerChoice} className="w-25" />
          </div>
          <div className="mt-4 text-xl font-bold text-accent">
            <p>{result}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-primary font-bold">Pick Your Move!</p>
          <div className="flex gap-4 justify-center">
            <ChoicesButton text="Rock" />
            <ChoicesButton text="Paper" />
            <ChoicesButton text="Scissor" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Rps = () => {
  return (
    <RpsProvider>
      <RpsGameContent />
    </RpsProvider>
  );
};

export default Rps;
