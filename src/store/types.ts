import { GameState } from '../modules/game/types';

export type Action = {
  type?: string;
  payload?: any;
};

export type State = {
  game: GameState;
};
