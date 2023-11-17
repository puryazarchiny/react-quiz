import { Dispatch, ReactNode, createContext, useReducer } from "react";

interface QuizContextType extends State {
  dispatch: Dispatch<ACTIONTYPE>;
}

interface QuizProvider {
  children: ReactNode;
}

interface Question {
  description: string;
  options: string[];
  correctOption: number;
  points: number;
}

interface State {
  answer: number | null;
  error: string;
  points: number;
  questionIndex: number;
  questions: Question[];
  seconds: number | null;
  status: "error" | "loading" | "ready";
}

type ACTIONTYPE =
  | { type: "answered"; payload: number }
  | { type: "dataFailed"; payload: string }
  | { type: "dataReceived"; payload: Question[] }
  | { type: "nextQuestion"; payload: number }
  | { type: "tick" };

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

    case "dataReceived": {
      const SECONDS_PER_QUESTION = 15;

      return {
        ...state,
        answer: null,
        points: 0,
        questionIndex: 0,
        questions: action.payload,
        seconds: state.questions.length * SECONDS_PER_QUESTION,
        status: "ready",
      };
    }

    case "nextQuestion":
      return { ...state, answer: null, questionIndex: action.payload };

    case "tick":
      return {
        ...state,
        seconds: state.seconds && state.seconds - 1,
      };
  }
};

export const QuizContext = createContext<QuizContextType | null>(null);

export function QuizProvider({ children }: QuizProvider) {
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
