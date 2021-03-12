import { Module, Route } from '../../shared/module-types';
import { Container } from './Container';

const route: Route = {
  path: '/score',
  component: Container,
};

const namespace = 'score';

export const score: Module = {
  namespace,
  route,
};
