import { rest } from 'msw';

const generateRandomBoolean = () => Math.random() < 0.5;

let agreement = false;

export const handlers = [
  rest.get('/api/agreement', (req, res, ctx) => res(ctx.json({ agreement }))),
  rest.post('/api/agreement', (req, res, ctx) => {
    agreement = true;
    return res(ctx.status(201));
  }),
  rest.get('/api/counselor', (req, res, ctx) => {
    const isWaitingForCounselor = generateRandomBoolean();
    if (isWaitingForCounselor) {
      return res(
        ctx.json({
          name: 'John Doe',
          image: '',
        }),
      );
    }
    return res(ctx.json(null));
  }),
];
