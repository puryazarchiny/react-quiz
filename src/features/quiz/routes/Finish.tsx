import { Box, Wrapper } from "@/components";
import { useQuiz } from "@/features/quiz";

export function Finish() {
  const { points } = useQuiz();

  return (
    <main>
      <section>
        <Wrapper>
          <Box classes="flex flex-col items-center gap-8 py-16 text-2xl text-white">
            <p>Finish</p>
            <p>{points}/280 Points</p>
          </Box>
        </Wrapper>
      </section>
    </main>
  );
}
