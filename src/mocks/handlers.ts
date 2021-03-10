import { DefaultRequestBody, MockedRequest, rest, RestHandler } from 'msw';
import { trivias } from './mocked-db.json';

export const handlers: RestHandler<MockedRequest<DefaultRequestBody>>[] = [
  rest.get('https://mocked.api/trivias/get-all', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(trivias));
  }),
];
