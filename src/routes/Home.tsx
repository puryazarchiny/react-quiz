import { Link } from "react-router-dom";

import { Box, Error, Loading, Wrapper } from "@/components";
import { getQuestions, useQuiz } from "@/features/quiz";

export function Home() {
  const { error, status, dispatch } = useQuiz();

  getQuestions();

  return (
    <main>
      <section>
        <Wrapper>
          <Box classes="flex flex-col items-center gap-8 py-16">
            <h1 className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-4xl font-bold text-white">
                Welcome to the{" "}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-10.5 -9.45 21 18.9"
                fill="none"
                className="h-9 w-9 text-[#149eca]"
              >
                <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                <g stroke="currentColor" strokeWidth="1">
                  <ellipse rx="10" ry="4.5"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                </g>
              </svg>

              <span className="text-4xl font-bold text-white">Quiz</span>
            </h1>

            <p className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-2xl text-white">
                15 questions to test your
              </span>
              <span className="font-caveat text-3xl text-[#149eca]">React</span>
              <span className="text-2xl text-white">mastery</span>
            </p>

            {status === "ready" && (
              <Link
                to="/quiz"
                className="rounded-lg border-2 border-[#149eca] bg-[#149eca] px-4 py-2 text-xl text-white hover:bg-[#23272f]"
                onClick={() => dispatch({ type: "started" })}
              >
                Let's start
              </Link>
            )}

            {status === "error" && <Error error={error} />}
            {status === "loading" && <Loading />}
          </Box>
        </Wrapper>
      </section>
    </main>
  );
}
