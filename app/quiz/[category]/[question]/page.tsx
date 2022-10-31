"use client";

import { useEffect, useState } from "react";
import { useQuiz } from "../../../../hooks/use-quiz";

interface IApiQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export default function Page() {
  const [question, setQuestion] = useState<IApiQuestion | null>(null);
  const { addAnswer } = useQuiz();

  const getQuestion = async () => {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=boolean"
    );

    const { results } = await response.json();

    setQuestion(results[0]);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  if (!question) return null;

  return (
    <div>
      <h1
        className="text-[24px]"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />
      <div>
        <button
          onClick={() =>
            addAnswer({
              question: question.question,
              correctAnswer: question.correct_answer,
              givenAnswer: "True",
            })
          }
        >
          True
        </button>
        <button
          onClick={() =>
            addAnswer({
              question: question.question,
              correctAnswer: question.correct_answer,
              givenAnswer: "False",
            })
          }
        >
          False
        </button>
      </div>
    </div>
  );
}
