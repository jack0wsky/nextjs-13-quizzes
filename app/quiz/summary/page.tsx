"use client";

import { useRouter } from "next/navigation";
import { useQuiz } from "../../../hooks/use-quiz";
import Link from "next/link";

const SummaryPage = () => {
  const { answers, resetQuiz } = useQuiz();
  const router = useRouter();

  const correctAnswers = answers.filter(
    ({ correctAnswer, givenAnswer }) => correctAnswer === givenAnswer
  );

  if (answers.length === 0) {
    router.push("/welcome");
  }

  const restartQuiz = () => {
    // resetQuiz();
    router.push("/welcome");
  };

  return (
    <div className="summary">
      <h2>Congrats!</h2>
      <p>
        Your score is {correctAnswers.length} / {answers.length}
      </p>
      <Link className="summary__try-again" href="/welcome">
        Try again
      </Link>
    </div>
  );
};

export default SummaryPage;
