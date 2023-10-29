import { useEffect, useReducer } from "react";

import { Questions, ACTIONTYPE } from "../../types.ts";

import Loading from "./Loading";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question.tsx";

export interface State {
  questions: Questions[];
  status: "loading" | "error" | "ready" | "active" | "finished";
  index: number;
  answer: number | null;
}

const initialState: State = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
};

const reducer = (state: State, action: ACTIONTYPE): State => {
  switch (action.type) {
    case "dataFailed":
      return { ...state, status: "error" };

    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "started":
      return { ...state, status: "active" };

    case "answer":
      return { ...state, answer: action.payload };
  }
};

function Main() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState,
  );

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
          question={questions[index]}
          answer={answer}
          dispatch={dispatch}
        />
      )}
    </main>
  );
}

export default Main;
