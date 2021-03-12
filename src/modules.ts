import { Reducer } from 'redux';
import { Module } from './shared/module-types';
import { game } from './modules/game';

export const modules: Module[] = [game];

export const getModulesReducers = (): { [k: string]: Reducer } => {
  const reducers: { [k: string]: Reducer } = {};
  for (const { reducer, namespace } of modules) {
    if (reducer === undefined) {
      continue;
    }

    reducers[namespace] = reducer;
  }

  return reducers;
};
