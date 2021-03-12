import { Module, Route } from '../../shared/module-types';
import { Container } from './Container';
import reducer from './ducks';

const route: Route = {
  path: '/',
  component: Container,
};

const namespace = 'game';

export const game: Module = {
  namespace,
  route,
  reducer,
};
