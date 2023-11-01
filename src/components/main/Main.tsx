import { useEffect, useReducer } from "react";

import { Questions, ACTIONTYPE } from "../../types.ts";

import Loading from "./Loading";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question.tsx";
import Finished from "./Finished.tsx";

export interface State {
  questions: Questions[];
  status: "loading" | "error" | "ready" | "active" | "finished";
  questionIndex: number;
  answer: number | null;
  points: number;
  seconds: number | null;
}

const initialState: State = {
  questions: [],
  status: "loading",
  questionIndex: 0,
  answer: null,
  points: 0,
  seconds: null,
};

const reducer = (state: State, action: ACTIONTYPE): State => {
  switch (action.type) {
    case "dataFailed":
      return { ...state, status: "error" };

    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "started":
      return {
        ...state,
        status: "active",
        seconds: state.questions.length * 10,
      };

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

    case "finished":
      return { ...state, status: "finished" };

    case "tick":
      return {
        ...state,
        seconds: state.seconds && state.seconds - 1,
        status: state.seconds === 0 ? "finished" : state.status,
      };
  }
};

function Main() {
  const [
    { questions, status, questionIndex, answer, points, seconds },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://react-quiz-bua2.onrender.com/questions")
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
          seconds={seconds}
          dispatch={dispatch}
        />
      )}
      {status === "finished" && <Finished points={points} />}
    </main>
  );
}

export default Main;
