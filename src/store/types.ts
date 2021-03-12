import { TriviasState } from '../modules/game/ducks';
import { ErrorState } from './ducks/errors';

export type Action = {
  type?: string;
  payload?: any;
};

export type State = {
  errors: ErrorState;
  trivias: TriviasState;
};
