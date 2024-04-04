import { Wrapper } from "@/components";
import { useQuiz } from "@/features/quiz";

export function Finish() {
  const { points } = useQuiz();

  return (
    <main>
      <section>
        <Wrapper>
          <div className="CONTAINER | flex flex-col items-center gap-8 py-16 text-white">
            <p className="text-4xl font-bold">Finish</p>
            <p className="text-2xl">
              <span className="text-[#149eca]">{points}</span>/280 Points
            </p>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
