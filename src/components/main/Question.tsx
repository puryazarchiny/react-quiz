import Wrapper from "../containers/Wrapper";

import { Questions, ACTIONTYPE } from "../../types";

interface QuestionProps {
  question: Questions;
  answer: number | null;
  dispatch: React.Dispatch<ACTIONTYPE>;
}

function Question({ question, answer, dispatch }: QuestionProps) {
  return (
    <Wrapper classes="flex flex-col items-center gap-8 py-16">
      <h2 className="text-justify text-2xl font-bold text-white">
        {question.description}
      </h2>

      <ul className="grid w-full max-w-4xl auto-rows-fr grid-cols-1 gap-4">
        {question.options.map((option, index) => (
          <li
            key={option}
            className={
              !answer
                ? "w-full cursor-pointer rounded border-2 border-[#393d44] bg-[#393d44] p-4 text-justify text-xl text-white hover:bg-[#23272f]"
                : index === question.correctOption
                ? "w-full cursor-pointer rounded border-2 border-[#149eca] bg-[#149eca] p-4 text-justify text-xl text-white"
                : "w-full cursor-pointer rounded border-2 border-red-500 bg-red-500 p-4 text-justify text-xl text-white"
            }
            onClick={() => dispatch({ type: "answer", payload: index })}
          >
            {option}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default Question;
