import { useEffect } from "react";

import { useQuiz } from "@/features/quiz";

export function Timer() {
  const { seconds, dispatch } = useQuiz();

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="CONTAINER | self-start rounded-lg border-2 border-[#149eca] px-4 py-2 font-mono text-xl text-white">
      {seconds !== null && Math.floor(seconds / 60) < 10 && "0"}
      {seconds !== null && Math.floor(seconds / 60)}:
      {seconds !== null && seconds % 60 < 10 && "0"}
      {seconds !== null && seconds % 60}
    </div>
  );
}
