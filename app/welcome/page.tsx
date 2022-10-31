"use client";

import Categories from "./components/categories";
import { useQuiz } from "../../hooks/use-quiz";
import Link from "next/link";

export default function Home() {
  const { category } = useQuiz();

  return (
    <main className="welcome">
      <h1 className="text-black text-[24px]">Welcome in Quiz World</h1>

      <Categories />

      <Link href={`/quiz/${category}/1`}>Next</Link>
    </main>
  );
}
