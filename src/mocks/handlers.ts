import { rest } from 'msw';

const generateRandomBoolean = () => Math.random() < 0.5;

const delay = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

let agreement = false;

export const handlers = [
  rest.get('/api/agreement', async (req, res, ctx) => {
    const isError = generateRandomBoolean();
    await delay(isError ? 5000 : 1000);
    return res(ctx.json({ agreement }));
  }),
  rest.post('/api/agreement', async (req, res, ctx) => {
    await delay(1000);
    agreement = true;
    return res(ctx.status(201));
  }),
  rest.get('/api/counselor', async (req, res, ctx) => {
    await delay(1000);
    const isWaitingForCounselor = generateRandomBoolean();
    if (isWaitingForCounselor) {
      return res(
        ctx.json({
          name: 'John Doe',
          image: '/assets/svgs/Avatar.svg',
        }),
      );
    }
    return res(ctx.json(null));
  }),
];
