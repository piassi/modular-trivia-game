export type HandleAnswerFunction = (answer: boolean) => void;

export type Trivia = {
  id: number;
  category: string;
  question: string;
  correctAnswer: boolean;
};

export type Answer = {
  triviaId: number;
  answer: boolean;
};

export type GameState = {
  trivias: Trivia[];
  answers: { [key: string]: boolean };
};
