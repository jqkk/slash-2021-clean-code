import { http } from '@/config/rest';
import { PATH } from '@/config/rest/path';

export default {
  getAgreement: () => http.get(PATH.AGREEMENT),
  setAgreement: () => http.post(PATH.AGREEMENT),
} as const;
