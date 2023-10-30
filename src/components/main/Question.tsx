import Wrapper from "../containers/Wrapper";

import { Questions, ACTIONTYPE } from "../../types";

import ProgressBar from "./ProgressBar";

interface QuestionProps {
  question: Questions;
  questionIndex: number;
  answer: number | null;
  points: number;
  dispatch: React.Dispatch<ACTIONTYPE>;
}

function Question({
  question,
  questionIndex,
  answer,
  points,
  dispatch,
}: QuestionProps) {
  return (
    <Wrapper classes="flex flex-col items-center gap-8 py-16">
      <ProgressBar
        questionIndex={questionIndex}
        answer={answer}
        points={points}
      />

      <h2 className="pt-4 text-justify text-2xl font-bold text-white">
        {question.description}
      </h2>

      <ul className="grid w-full max-w-4xl auto-rows-fr grid-cols-1 gap-4">
        {question.options.map((option, index) => (
          <li key={option}>
            <button
              type="button"
              disabled={answer !== null}
              className={
                answer === null
                  ? "w-full rounded border-2 border-[#393d44] bg-[#393d44] p-4 text-justify text-xl text-white hover:bg-[#23272f]"
                  : index === question.correctOption
                  ? "w-full rounded border-2 border-[#149eca] bg-[#149eca] p-4 text-justify text-xl text-white"
                  : "w-full rounded border-2 border-red-500 bg-red-500 p-4 text-justify text-xl text-white"
              }
              onClick={() => dispatch({ type: "answered", payload: index })}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>

      {answer !== null && (
        <button
          type="button"
          className="self-end rounded-full border-2 border-[#149eca] bg-[#149eca] px-6 py-2 text-xl text-white hover:border-2 hover:border-[#149eca] hover:bg-[#23272f]"
          onClick={() =>
            dispatch({ type: "nextQuestion", payload: ++questionIndex })
          }
        >
          Next
        </button>
      )}
    </Wrapper>
  );
}

export default Question;
