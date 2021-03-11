import { Action, State } from '../types';

export type Error = {
  message: string;
};

export type ErrorState = Error[];

export const ADD = 'errors/ADD';

export default function reducer(state: ErrorState = [], action: Action = {}) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    default:
      return state;
  }
}

export function addError(payload: {}) {
  return { type: ADD, payload };
}

export function getErrors(state: State) {
  return state.errors;
}
