import { Feature, Route } from '../../shared/feature-types';
import { Container } from './Container';
import reducer from './ducks';

const route: Route = {
  path: '/',
  component: Container,
};

const namespace = 'trivias';

export const trivias: Feature = {
  namespace,
  route,
  reducer,
};
