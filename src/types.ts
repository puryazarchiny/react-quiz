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
  | { type: "answer"; payload: number };
