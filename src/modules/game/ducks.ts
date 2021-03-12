import { Dispatch } from 'redux';
import { Action, State } from '../../store/types';
import * as service from './service';
import { Trivia, GameState } from './types';

export const SET_TRIVIAS = 'game/SET_TRIVIAS';

const defaultState: GameState = {
  trivias: [],
};

export default function reducer(state = defaultState, action: Action = {}) {
  switch (action.type) {
    case SET_TRIVIAS:
      return { ...state, trivias: action.payload };
    default:
      return state;
  }
}

export function getTrivias(state: State) {
  return state.game.trivias;
}

export function setTrivias(payload: Trivia[]) {
  return { type: SET_TRIVIAS, payload };
}

export const fetchTrivias = () => async (dispatch: Dispatch) => {
  const trivias = await service.getTrivias();
  dispatch(setTrivias(trivias));
};
