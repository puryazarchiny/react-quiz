import Container from "../containers/Container";

interface ProgressBarProps {
  questionIndex: number;
  answer: number | null;
  points: number;
}

function ProgressBar({ questionIndex, answer, points }: ProgressBarProps) {
  return (
    <Container classes="grid w-full max-w-xl grid-cols-2 gap-y-2">
      <progress
        max={15}
        value={questionIndex + +Boolean(answer)}
        className="col-span-full w-full rounded-full bg-[#393d44] [&::-moz-progress-bar]:rounded-full [&::-moz-progress-bar]:bg-[#149eca] [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-[#393d44] [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-[#149eca]"
      ></progress>

      <p className="text-lg text-[#bbb]">
        Question{" "}
        <span className="font-bold text-white">{questionIndex + 1}</span>
        /15
      </p>

      <p className="justify-self-end text-lg text-[#bbb]">
        <span className="font-bold text-white">{points}</span>/280 Points
      </p>
    </Container>
  );
}

export default ProgressBar;
