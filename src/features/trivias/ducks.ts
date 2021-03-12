import { Action, State } from '../../store/types';

export type Trivia = {
  id: number;
  title: string;
  isTruthy: boolean;
};

export type TriviasState = Trivia[];

export const LOAD = 'trivias/LOAD';
export const SET = 'trivias/SET';

export default function reducer(state: TriviasState = [], action: Action = {}) {
  switch (action.type) {
    case LOAD:
      return state;
    default:
      return state;
  }
}

export function getTrivias(state: State) {
  return state.trivias;
}

export function setTrivias(payload: Trivia[]) {
  return { type: SET, payload };
}
