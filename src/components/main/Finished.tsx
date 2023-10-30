import Wrapper from "../containers/Wrapper";

interface FinishedProps {
  points: number;
}

function Finished({ points }: FinishedProps) {
  return (
    <Wrapper classes="flex h-full flex-col items-center justify-center gap-8 text-2xl font-bold text-white">
      <p>Finished</p>
      <p>{points}/280 Points</p>
    </Wrapper>
  );
}

export default Finished;
