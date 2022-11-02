"use client";
import { useQuiz } from "../../../hooks/use-quiz";
import { DifficultyLevel } from "../../../types";
import classNames from "classnames";

const levels: DifficultyLevel[] = ["easy", "medium", "hard"];

const Difficulty = () => {
  const { setDifficulty, difficulty } = useQuiz();

  return (
    <section className="difficulty">
      <p>Set difficulty</p>
      <ul className="difficulty__options">
        {levels.map((level) => (
          <li
            key={level}
            className={classNames("difficulty__option", {
              "difficulty__option--selected": level === difficulty,
            })}
          >
            <button onClick={() => setDifficulty(level)}>{level}</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Difficulty;
