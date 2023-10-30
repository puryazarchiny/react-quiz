import { useEffect } from "react";

import { ACTIONTYPE } from "../../types";

import Container from "../containers/Container";

interface TimerProps {
  seconds: number | null;
  dispatch: React.Dispatch<ACTIONTYPE>;
}

function Timer({ seconds, dispatch }: TimerProps) {
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <Container classes="self-start rounded-full border-2 border-[#149eca] px-6 py-2 text-xl text-white">
      {seconds !== null && Math.floor(seconds / 60) < 10 && "0"}
      {seconds !== null && Math.floor(seconds / 60)}:
      {seconds !== null && seconds % 60 < 10 && "0"}
      {seconds !== null && seconds % 60}
    </Container>
  );
}

export default Timer;
