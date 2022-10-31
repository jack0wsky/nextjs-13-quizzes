import { createContext } from "react";
import { IGivenAnswer, DifficultyLevel } from "../types";

interface IState {
  category: string;
  answers: IGivenAnswer[];
  difficulty: DifficultyLevel | null;
  setDifficulty: (difficulty: DifficultyLevel) => void;
  setCategory: (category: string) => void;
  addAnswer: (answer: IGivenAnswer) => void;
}

export const Store = createContext<IState>({
  category: "",
  difficulty: null,
  setDifficulty: () => {},
  answers: [],
  setCategory: () => {},
  addAnswer: () => {},
});
