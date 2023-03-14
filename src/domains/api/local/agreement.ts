import { delay } from '@/utils';

let agreement = false;

export default {
  getAgreement: async () => {
    await delay(500);
    return agreement;
  },
  setAgreement: async () => {
    await delay(500);
    agreement = true;
  },
} as const;
