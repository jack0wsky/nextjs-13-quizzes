"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useQuiz } from "../../../../hooks/use-quiz";
import classNames from "classnames";

interface IApiQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  id: string;
  regions: [];
  tags: string[];
}

export default function Page() {
  const [selected, setSelected] = useState<string | null>(null);
  const [question, setQuestion] = useState<IApiQuestion | null>(null);
  const [validateAnswer, setValidateAnswer] = useState<
    "correct" | "incorrect" | null
  >(null);

  const router = useRouter();
  const pathname = usePathname();

  const page = pathname.split("/")[3];

  const { addAnswer, answers, difficulty } = useQuiz();

  const getQuestion = async () => {
    const response = await fetch(
      "https://the-trivia-api.com/api/questions?limit=1&difficulty=easy"
    );

    const data = await response.json();

    return setQuestion(data[0]);
  };

  useEffect(() => {
    if (!difficulty) {
      return router.push("/welcome");
    }

    if (answers.length === 10) {
      router.push("/quiz/summary");
    }

    if (!!question) return;

    getQuestion();

    return () => {
      setQuestion(null);
    };
  }, []);

  const chooseAnswer = (
    { question, correctAnswer }: IApiQuestion,
    answer: string
  ) => {
    addAnswer({
      question,
      correctAnswer,
      givenAnswer: answer,
    });
    setValidateAnswer(correctAnswer === answer ? "correct" : "incorrect");
    setSelected(answer);

    setTimeout(() => {
      router.push(`/quiz/main/${Number(page) + 1}`);
    }, 1000);
  };

  if (!question) return null;

  const { correctAnswer, incorrectAnswers } = question;

  const availableAnswers = [...incorrectAnswers, correctAnswer].sort((a, b) =>
    a > b ? 1 : -1
  );

  return (
    <div className="question">
      <p className="question__number">{page} of 10 questions</p>
      <p className="question__category">{question.category}</p>
      <h1
        className="question__title"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />
      <div className="question__answers">
        {availableAnswers.map((answer) => (
          <button
            key={answer}
            className={classNames("question__answer", {
              "question__answer--selected": selected === answer,
              "question__answer--correct":
                validateAnswer === "correct" && selected === answer,
              "question__answer--incorrect":
                validateAnswer === "incorrect" && selected === answer,
            })}
            onClick={() => chooseAnswer(question, answer)}
          >
            {answer}
          </button>
        ))}
      </div>

      {validateAnswer === "correct" && (
        <p className="question__correct-answer">This is true! 🎉</p>
      )}
      {validateAnswer === "incorrect" && (
        <p className="question__wrong-answer">Wrong ☹️</p>
      )}
    </div>
  );
}
