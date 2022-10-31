"use client";

import { useRouter } from "next/navigation";
import { useQuiz } from "../../../hooks/use-quiz";

const SummaryPage = () => {
  const { answers } = useQuiz();
  const router = useRouter();

  const correctAnswers = answers.filter(
    ({ correctAnswer, givenAnswer }) => correctAnswer === givenAnswer
  );

  if (answers.length === 0) {
    router.push("/welcome");
  }

  return (
    <div className="summary">
      <h2>Congrats!</h2>
      <p>
        Your score is {correctAnswers.length} / {answers.length}
      </p>
    </div>
  );
};

export default SummaryPage;
