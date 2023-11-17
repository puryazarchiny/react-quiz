import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "@/App.tsx";
import { QuizProvider } from "@/features/quiz";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizProvider>
        <App />
      </QuizProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
