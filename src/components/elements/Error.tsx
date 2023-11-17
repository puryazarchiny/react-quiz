import { useQuiz } from "@/features/quiz";

export function Error() {
  const { error } = useQuiz();

  return <p className="text-2xl text-white">{error}</p>;
}
