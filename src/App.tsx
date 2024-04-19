import { BrowserRouter } from "react-router-dom";

import { Footer, Header } from "@/components";
import { QuizProvider } from "@/features/quiz";
import { AppRoutes } from "@/routes";

import "./index.css";

export function App() {
  const root = document.getElementById("root")!;

  root.setAttribute(
    "class",
    "grid min-h-screen grid-rows-[auto_1fr_auto] bg-[#23272f] font-wotfard",
  );

  return (
    <BrowserRouter>
      <QuizProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </QuizProvider>
    </BrowserRouter>
  );
}
