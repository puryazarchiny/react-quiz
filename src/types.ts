export interface Questions {
  description: string;
  options: string[];
  correctOption: number;
  points: number;
}

export type ACTIONTYPE =
  | { type: "dataReceived"; payload: Questions[] }
  | { type: "dataFailed" }
  | { type: "started" }
  | { type: "answered"; payload: number }
  | { type: "nextQuestion"; payload: number }
  | { type: "finished" }
  | { type: "tick" };
