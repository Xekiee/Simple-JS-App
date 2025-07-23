import { useState } from "react";
import Rock from "../../../assets/Rock.png";
import Paper from "../../../assets/Paper.png";
import Scissor from "../../../assets/Scissors.png";

const choices = ["Rock", "Paper", "Scissor"];

const getResult = (player, computer) => {
  if (player === computer) return "Draw";
  if (
    (player === "Rock" && computer === "Scissor") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissor" && computer === "Paper")
  ) {
    return "You Win!";
  } else {
    return "You Lose";
  }
};

const Choicesimage = {
  Rock,
  Paper,
  Scissor,
};
const useRpsGame = () => {
  const [playerChoice, setPlayerChoice] = useState(" ");
  const [computerChoice, SetComputerChoice] = useState("");
  const [result, SetResult] = useState("");
  const [score, SetScore] = useState({ player: 0, computer: 0, tie: 0 });

  const play = (choice) => {
    const random = choices[Math.floor(Math.random() * choices.length)];
    const result = getResult(choice, random);

    setPlayerChoice(choice);
    SetComputerChoice(random);
    SetResult(result);

    if (result === "You Win!") {
      SetScore((prev) => ({ ...prev, player: prev.player + 1 }));
    } else if (result === "You Lose") {
      SetScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
    } else if (result === "Draw") {
      SetScore((prev) => ({ ...prev, tie: prev.tie + 1 }));
    }
  };
  return { playerChoice, computerChoice, result, score, Choicesimage, play };
};

export default useRpsGame;
