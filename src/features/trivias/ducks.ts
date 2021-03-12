import { Dispatch } from 'redux';
import { Action, State } from '../../store/types';
import * as service from './service';

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
    case SET:
      return action.payload;
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

export const fetchTrivias = () => async (dispatch: Dispatch) => {
  const trivias = await service.getTrivias();
  dispatch(setTrivias(trivias));
};
