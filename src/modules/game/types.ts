export type HandleAnswerFunction = (answer: boolean) => void;

export type Trivia = {
  id: number;
  title: string;
  isTruthy: boolean;
};

export type TriviasState = Trivia[];
