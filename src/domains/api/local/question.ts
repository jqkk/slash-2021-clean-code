import { delay } from '@/utils';

export default {
  sendQuestion: async (question: string, id?: string) => {
    await delay(500);
    // eslint-disable-next-line no-console
    console.log(question, id);
  },
};
