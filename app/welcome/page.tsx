"use client";

import Categories from "./components/categories";
import { useQuiz } from "../../hooks/use-quiz";
import Link from "next/link";
import Difficulty from "./components/difficulty";

export default function Home() {
  const { category } = useQuiz();

  return (
    <main className="welcome">
      <h1 className="text-black text-[24px]">Welcome in Quiz World</h1>

      <Categories />

      <Difficulty />

      <Link href={`/quiz/${category}/1`}>Next</Link>
    </main>
  );
}
