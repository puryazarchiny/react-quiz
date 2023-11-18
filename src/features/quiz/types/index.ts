interface Question {
  description: string;
  options: string[];
  correctOption: number;
  points: number;
}

export interface State {
  answer: number | null;
  error: string;
  points: number;
  questionIndex: number;
  questions: Question[];
  seconds: number | null;
  status: "active" | "error" | "loading" | "ready";
}

export type ACTIONTYPE =
  | { type: "answered"; payload: number }
  | { type: "dataFailed"; payload: string }
  | { type: "dataReceived"; payload: Question[] }
  | { type: "nextQuestion"; payload: number }
  | { type: "started" }
  | { type: "tick" };
