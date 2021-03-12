import { ComponentType } from 'react';
import { Reducer } from 'redux';

export type Route = {
  path: string;
  component: ComponentType;
};

export type Feature = {
  namespace: string;
  route: Route;
  reducer: Reducer;
};
