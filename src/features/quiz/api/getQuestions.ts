import { useEffect } from "react";

import { API_URL } from "@/config";
import { useQuiz } from "@/features/quiz";

export function useFetch() {
  const { dispatch } = useQuiz();

  useEffect(() => {
    const getQuestions = () => {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => dispatch({ type: "dataReceived", payload: data }))
        .catch(
          (error) =>
            error instanceof Error &&
            dispatch({ type: "dataFailed", payload: error.message }),
        );
    };
    getQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
