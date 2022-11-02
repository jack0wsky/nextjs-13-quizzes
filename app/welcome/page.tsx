"use client";

import Link from "next/link";
import Difficulty from "./components/difficulty";

export default function Home() {
  return (
    <main className="welcome">
      <h1 className="welcome__title">Welcome in Quiz World</h1>

      <Difficulty />

      <Link className="button" href={`/quiz/main/1`}>
        Next
      </Link>
    </main>
  );
}
