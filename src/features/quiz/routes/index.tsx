import { Route, Routes } from "react-router-dom";

import { Finish } from "./Finish";
import { Quiz } from "./Quiz";

export function QuizRoutes() {
  return (
    <Routes>
      <Route path="finish" element={<Finish />} />
      <Route path="quiz" element={<Quiz />} />
    </Routes>
  );
}
