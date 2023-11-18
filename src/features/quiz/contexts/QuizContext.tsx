import { Dispatch, createContext } from "react";

import { ACTIONTYPE, State } from "@/features/quiz";

interface QuizContextType extends State {
  dispatch: Dispatch<ACTIONTYPE>;
}

export const QuizContext = createContext<QuizContextType | null>(null);
