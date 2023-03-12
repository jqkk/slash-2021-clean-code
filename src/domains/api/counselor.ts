import { http } from '@/config/rest';
import { PATH } from '@/config/rest/path';

export default {
  getCounselor: () => http.get(PATH.COUNSELOR),
} as const;
