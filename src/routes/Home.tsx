import { Link } from "react-router-dom";

import { Wrapper } from "@/components";
import { getQuestions, useQuiz } from "@/features/quiz";

export function Home() {
  const { error, status, dispatch } = useQuiz();
  const quiz = (
    <Link
      to="/quiz"
      className="rounded-lg border-2 border-[#149eca] bg-[#149eca] px-4 py-2 text-xl hover:bg-[#23272f]"
      onClick={() => dispatch({ type: "started" })}
    >
      Let's start
    </Link>
  );
  const errorMessage = <p className="text-2xl font-bold">{error}</p>;
  const loading = <p className="text-2xl font-bold">Loading...</p>;

  getQuestions();

  return (
    <main>
      <section>
        <Wrapper>
          <div className="CONTAINER | flex flex-col items-center gap-8 py-16 text-center text-white">
            <h1 className="text-4xl font-bold">
              Welcome to the{" "}
              <span className="font-caveat text-5xl text-[#149eca]">React</span>{" "}
              Quiz
            </h1>
            <p className="text-2xl">15 questions to test your React mastery</p>
            {status === "ready" && quiz}
            {status === "error" && errorMessage}
            {status === "loading" && loading}
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
