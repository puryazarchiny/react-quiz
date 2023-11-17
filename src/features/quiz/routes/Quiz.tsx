import { Link, useNavigate } from "react-router-dom";

import { Box, Wrapper } from "@/components";
import { Progress, Question, Timer, useQuiz } from "@/features/quiz";

export function Quiz() {
  const { answer, questionIndex, seconds, dispatch } = useQuiz();
  const navigate = useNavigate();

  !seconds && navigate("/finish");

  return (
    <main>
      <section>
        <Wrapper>
          <Box classes="flex flex-col items-center gap-8 py-16">
            <Progress />
            <Question />

            <Box classes="flex w-full max-w-4xl justify-between">
              <Timer />

              {answer !== null && questionIndex < 14 && (
                <button
                  type="button"
                  className="rounded-lg border-2 border-[#149eca] bg-[#149eca] px-4 py-2 text-xl text-white hover:bg-[#23272f]"
                  onClick={() =>
                    dispatch({
                      type: "nextQuestion",
                      payload: questionIndex + 1,
                    })
                  }
                >
                  Next
                </button>
              )}

              {answer !== null && questionIndex === 14 && (
                <Link
                  to="/finish"
                  className="rounded-lg border-2 border-[#149eca] bg-[#149eca] px-4 py-2 text-xl text-white hover:bg-[#23272f]"
                >
                  Finish
                </Link>
              )}
            </Box>
          </Box>
        </Wrapper>
      </section>
    </main>
  );
}
