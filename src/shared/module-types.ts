import { ComponentType } from 'react';
import { Reducer } from 'redux';

export type Route = {
  path: string;
  component: ComponentType;
};

export type Module = {
  namespace: string;
  route: Route;
  reducer?: Reducer;
};
