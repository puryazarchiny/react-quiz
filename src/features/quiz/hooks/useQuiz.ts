import { useContext } from "react";

import { QuizContext } from "@/features/quiz";

export function useQuiz() {
  const quizContext = useContext(QuizContext);

  if (!quizContext)
    throw new Error("useQuiz has to be used within <QuizContext.Provider>");

  return quizContext;
}
