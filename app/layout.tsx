"use client";

import { ReactNode, useState } from "react";
import { Store } from "../store/store";
import { IGivenAnswer, DifficultyLevel } from "../types";
import "./index.scss";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState<DifficultyLevel | null>(null);
  const [answers, setAnswers] = useState<IGivenAnswer[]>([]);

  const resetQuiz = () => {
    setDifficulty(null);
    setAnswers([]);
  };

  const addAnswer = (answer: IGivenAnswer) => {
    setAnswers([answer, ...answers]);
  };

  return (
    <html>
      <body>
        <Store.Provider
          value={{
            category,
            difficulty,
            setDifficulty,
            setCategory,
            answers,
            addAnswer,
            resetQuiz,
          }}
        >
          {children}
        </Store.Provider>
      </body>
    </html>
  );
};

export default RootLayout;
