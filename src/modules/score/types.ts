import { Trivia } from '../game/shared';

export type AnsweredTrivia = Trivia & {
  answeredRight: boolean;
};
