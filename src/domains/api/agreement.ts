import { http } from '@/config/rest';
import { PATH } from '@/config/rest/path';

export default {
  getAgreement: async () => {
    const response = await http.get<{ agreement: boolean }>(PATH.AGREEMENT);
    return response.data.agreement;
  },
  setAgreement: () => http.post(PATH.AGREEMENT),
} as const;
