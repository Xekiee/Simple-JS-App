import React, { useState } from "react";

const choices = ["Rock, Paer, Scissor"];

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
    }
  };
  return { playerChoice, computerChoice, result, score, play };
};

export default useRpsGame;
