import { useQuiz } from "@/features/quiz";

export function Question() {
  const { answer, questionIndex, questions, dispatch } = useQuiz();
  const question = questions[questionIndex];
  const normal =
    "h-full w-full rounded-lg border-2 border-[#393d44] bg-[#393d44] p-4 hover:bg-[#23272f] text-justify";
  const correct =
    "h-full w-full rounded border-2 border-[#149eca] bg-[#149eca] p-4 text-justify";
  const notCorrect =
    "h-full w-full rounded border-2 border-red-500 bg-red-500 p-4 text-justify";

  return (
    <div className="CONTAINER | flex w-full flex-col items-center gap-8">
      <h2 className="text-center text-2xl font-bold text-[#149eca]">
        {question.description}
      </h2>

      <ul className="grid w-full max-w-4xl auto-rows-fr grid-cols-1 gap-4 text-xl text-white">
        {question.options.map((option, index) => (
          <li key={option}>
            <button
              type="button"
              disabled={answer !== null}
              className={
                answer === null
                  ? normal
                  : index === question.correctOption
                    ? correct
                    : notCorrect
              }
              onClick={() => dispatch({ type: "answered", payload: index })}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
