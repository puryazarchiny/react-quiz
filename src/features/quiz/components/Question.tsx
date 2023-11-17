import { Box } from "@/components";
import { useQuiz } from "@/features/quiz";

export function Question() {
  const { answer, questionIndex, questions, dispatch } = useQuiz();
  const question = questions[questionIndex];

  return (
    <Box classes="flex w-full flex-col items-center gap-8">
      <h2 className="text-center text-2xl font-bold text-white">
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
                  ? "h-full w-full rounded-lg border-2 border-[#393d44] bg-[#393d44] p-4 text-justify text-xl text-white hover:bg-[#23272f]"
                  : index === question.correctOption
                  ? "h-full w-full rounded border-2 border-[#149eca] bg-[#149eca] p-4 text-justify text-xl text-white"
                  : "h-full w-full rounded border-2 border-red-500 bg-red-500 p-4 text-justify text-xl text-white"
              }
              onClick={() => dispatch({ type: "answered", payload: index })}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </Box>
  );
}
