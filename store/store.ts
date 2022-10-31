import { createContext } from "react";
import { IGivenAnswer } from "../types";

interface IState {
  category: string;
  answers: IGivenAnswer[];
  setCategory: (category: string) => void;
  addAnswer: (answer: IGivenAnswer) => void;
}

export const Store = createContext<IState>({
  category: "",
  answers: [],
  setCategory: () => {},
  addAnswer: () => {},
});
