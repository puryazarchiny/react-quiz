import { useEffect, useReducer } from "react";

import { Questions, ACTIONTYPE } from "../../types.ts";

import Loading from "./Loading";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question.tsx";

export interface State {
  questions: Questions[];
  status: "loading" | "error" | "ready" | "active" | "finished";
  questionIndex: number;
  answer: number | null;
  points: number;
}

const initialState: State = {
  questions: [],
  status: "loading",
  questionIndex: 0,
  answer: null,
  points: 0,
};

const reducer = (state: State, action: ACTIONTYPE): State => {
  switch (action.type) {
    case "dataFailed":
      return { ...state, status: "error" };

    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "started":
      return { ...state, status: "active" };

    case "answered":
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === state.questions[state.questionIndex].correctOption
            ? state.points + state.questions[state.questionIndex].points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, questionIndex: action.payload, answer: null };
  }
};

function Main() {
  const [{ questions, status, questionIndex, answer, points }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <main>
      {status === "loading" && <Loading />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen dispatch={dispatch} />}
      {status === "active" && (
        <Question
          question={questions[questionIndex]}
          questionIndex={questionIndex}
          answer={answer}
          points={points}
          dispatch={dispatch}
        />
      )}
    </main>
  );
}

export default Main;
