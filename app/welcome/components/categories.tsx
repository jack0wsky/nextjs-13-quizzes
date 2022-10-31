"use client";

import { useQuiz } from "../../../hooks/use-quiz";
import classNames from "classnames";

const categories = [
  { label: "Sports", value: "sports" },
  { label: "Geography", value: "geography" },
  { label: "History", value: "history" },
];

const Categories = () => {
  const { category, setCategory } = useQuiz();

  return (
    <section className="categories">
      <h2 className="categories__header">First, pick category</h2>
      <ul className="categories__list">
        {categories.map(({ label, value }) => (
          <li className="categories__list-item" key={value}>
            <button
              className={classNames("categories__list-item-button", {
                "categories__list-item-button--selected": category === value,
              })}
              onClick={() => setCategory(value)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
