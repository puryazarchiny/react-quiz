import { useQuiz } from "@/features/quiz";

export function Progress() {
  const { answer, points, questionIndex } = useQuiz();

  return (
    <div className="CONTAINER | flex w-full max-w-xl flex-col gap-2">
      <progress
        max={15}
        value={questionIndex + Number(Boolean(answer))}
        className="w-full rounded-full bg-[#393d44] [&::-moz-progress-bar]:rounded-full [&::-moz-progress-bar]:bg-[#149eca] [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-[#393d44] [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-[#149eca]"
      ></progress>
      <div className="CONTAINER | flex justify-between text-xl text-white">
        <p>
          Question<span className="text-[#149eca]"> {questionIndex + 1}</span>
          /15
        </p>
        <p>
          <span className="text-[#149eca]">{points}</span>/280 Points
        </p>
      </div>
    </div>
  );
}
