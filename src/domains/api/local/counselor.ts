import { delay, generateRandomBoolean } from '@/utils';

export default {
  getCounselor: async () => {
    await delay(500);
    const isWaitingForCounselor = generateRandomBoolean();
    if (isWaitingForCounselor) {
      return {
        name: 'John Doe',
        image: '/assets/svgs/Avatar.svg',
      };
    }
    return null;
  },
} as const;
