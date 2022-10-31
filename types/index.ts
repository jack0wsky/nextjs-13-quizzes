export type Difficulty = "easy" | "medium" | "hard";

export interface IGivenAnswer {
  question: string;
  correctAnswer: string;
  givenAnswer: string;
}
