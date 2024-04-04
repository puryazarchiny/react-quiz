import { useEffect } from "react";

import { API_URL } from "@/config";
import { useQuiz } from "@/features/quiz";

export function useFetch() {
  const { dispatch } = useQuiz();

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "dataReceived", payload: data.questions }),
      )
      .catch(
        (error) =>
          error instanceof Error &&
          dispatch({ type: "dataFailed", payload: error.message }),
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
