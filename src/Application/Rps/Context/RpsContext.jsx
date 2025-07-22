import { createContext, useContext } from "react";
import useRpsGame from "../Hooks/Hooks";

const RpsContext = createContext();

export const RpsProvider = ({ children }) => {
  const game = useRpsGame();
  return <RpsContext.Provider value={game}>{children} </RpsContext.Provider>;
};

export const useRps = () => useContext(RpsContext);
