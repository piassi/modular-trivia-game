import { Reducer } from 'redux';
import { Module } from './shared/module-types';
import { game } from './modules/game';

export const modules: Module[] = [game];

export const getModulesReducers = (): { [k: string]: Reducer } => {
  const hasReducer = (module: Module): boolean => module.reducer !== undefined;

  const modulesWithReducers = modules.filter(hasReducer);
  const reducers: { [k: string]: Reducer } = {};
  for (const module of modulesWithReducers) {
    reducers[module.namespace] = module.reducer;
  }

  return reducers;
};
