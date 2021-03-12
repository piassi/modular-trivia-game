export type HandleAnswerFunction = (answer: boolean) => void;

export type Trivia = {
  id: number;
  title: string;
  isTruthy: boolean;
};

export type Answer = {
  triviaId: number;
  answer: boolean;
};

export type GameState = {
  trivias: Trivia[];
  answers: Answer[];
};
