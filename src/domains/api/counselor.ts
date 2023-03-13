import { http } from '@/config/rest';
import { PATH } from '@/config/rest/path';

export default {
  getCounselor: async () => {
    const response = await http.get<{ name: string; image: string } | null>(
      PATH.COUNSELOR,
    );
    return response.data;
  },
} as const;
