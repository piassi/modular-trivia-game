import { Feature, Route } from '../../shared/feature-types';
import { Main } from './components/Main';
import reducer from './ducks';

const route: Route = {
  path: '/',
  component: Main,
};

const namespace = 'trivias';

export const trivias: Feature = {
  namespace,
  route,
  reducer,
};
