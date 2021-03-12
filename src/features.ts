import { Reducer } from 'redux';
import { Feature, Route } from './shared/feature-types';
import { trivias } from './features/trivias';

export const features: Feature[] = [trivias];

export const getFeaturesRoutes: Route[] = features.map(({ route }) => route);

export const getFeaturesReducers = (): { [k: string]: Reducer } => {
  const hasReducer = (feature: Feature): boolean =>
    feature.reducer !== undefined;

  const featuresWithReducers = features.filter(hasReducer);
  const reducers: { [k: string]: Reducer } = {};
  for (const feature of featuresWithReducers) {
    reducers[feature.namespace] = feature.reducer;
  }

  return reducers;
};
