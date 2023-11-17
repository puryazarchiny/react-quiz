import { Route, Routes } from "react-router-dom";

import { QuizRoutes } from "@/features/quiz";
import { Home } from "./Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<QuizRoutes />} />
    </Routes>
  );
}
