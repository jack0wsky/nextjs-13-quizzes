"use client";

import { ReactNode, useState } from "react";
import { Store } from "../store/store";
import { IGivenAnswer } from "../types";
import "./index.scss";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState("");
  const [answers, setAnswers] = useState<IGivenAnswer[]>([]);

  const addAnswer = (answer: IGivenAnswer) => {
    setAnswers([answer, ...answers]);
  };

  return (
    <html>
      <body>
        <Store.Provider value={{ category, setCategory, answers, addAnswer }}>
          {children}
        </Store.Provider>
      </body>
    </html>
  );
};

export default RootLayout;
