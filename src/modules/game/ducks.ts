import { Dispatch } from 'redux';
import { Action, State } from '../../store/types';
import * as service from './service';
import { Trivia, GameState, Answer } from './types';

export const SET_TRIVIAS = 'game/SET_TRIVIAS';
export const ADD_ANSWER = 'game/ADD_ANSWER';

const defaultState: GameState = {
  trivias: [],
  answers: {},
};

export default function reducer(state = defaultState, action: Action = {}) {
  switch (action.type) {
    case SET_TRIVIAS:
      return { ...state, trivias: action.payload };

    case ADD_ANSWER:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.triviaId]: action.payload.answer,
        },
      };

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

export function addAnswer(payload: Answer) {
  return { type: ADD_ANSWER, payload };
}

export function getAnswers(state: State) {
  return state.game.answers;
}

export const fetchTrivias = () => async (dispatch: Dispatch) => {
  const trivias = await service.getTrivias();
  dispatch(setTrivias(trivias));
};
