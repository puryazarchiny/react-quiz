import { ReactNode, useReducer } from "react";

import { ACTIONTYPE, QuizContext, State } from "@/features/quiz";

interface QuizProviderProps {
  children: ReactNode;
}

const initialState: State = {
  answer: null,
  error: "",
  points: 0,
  questionIndex: 0,
  questions: [],
  seconds: null,
  status: "loading",
};

const reducer = (state: State, action: ACTIONTYPE): State => {
  switch (action.type) {
    case "answered":
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === state.questions[state.questionIndex].correctOption
            ? state.points + state.questions[state.questionIndex].points
            : state.points,
      };

    case "dataFailed":
      return { ...state, error: action.payload, status: "error" };

    case "dataReceived":
      return {
        ...state,
        answer: null,
        points: 0,
        questionIndex: 0,
        questions: action.payload,
        status: "ready",
      };

    case "nextQuestion":
      return { ...state, answer: null, questionIndex: action.payload };

    case "started": {
      const SECONDS_PER_QUESTION = 15;

      return {
        ...state,
        seconds: state.questions.length * SECONDS_PER_QUESTION,
        status: "active",
      };
    }

    case "tick":
      return {
        ...state,
        seconds: state.seconds && state.seconds - 1,
      };
  }
};

export function QuizProvider({ children }: QuizProviderProps) {
  const [
    { answer, error, points, questionIndex, questions, seconds, status },
    dispatch,
  ] = useReducer(reducer, initialState);
  const value = {
    answer,
    error,
    points,
    questionIndex,
    questions,
    seconds,
    status,
    dispatch,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}
