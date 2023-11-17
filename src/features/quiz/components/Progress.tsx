import { Box } from "@/components";
import { useQuiz } from "@/features/quiz";

export function Progress() {
  const { answer, points, questionIndex } = useQuiz();

  return (
    <Box classes="grid w-full max-w-xl grid-cols-2 gap-y-2">
      <progress
        max={15}
        value={questionIndex + Number(Boolean(answer))}
        className="col-span-full w-full rounded-full bg-[#393d44] [&::-moz-progress-bar]:rounded-full [&::-moz-progress-bar]:bg-[#149eca] [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-[#393d44] [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-[#149eca]"
      ></progress>

      <p className="text-xl">
        <span className="text-[#bbb]">Question</span>
        <span className="font-bold text-white"> {questionIndex + 1}</span>
        <span className="text-[#bbb]">/15</span>
      </p>

      <p className="justify-self-end text-xl">
        <span className="font-bold text-white">{points}</span>
        <span className="text-[#bbb]">/280 Points</span>
      </p>
    </Box>
  );
}
