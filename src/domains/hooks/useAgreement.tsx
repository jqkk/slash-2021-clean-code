import { ConfirmAlert } from '@/components';
import { useAlert, usePromise } from '@/hooks';

import { agreement } from '../api';

const useAgreement = () => {
  const { promise } = usePromise();
  const { alert } = useAlert();

  const openPopupToNotAgreedUsers = async () => {
    const 약관동의 = await promise(agreement.getAgreement);
    if (!약관동의) {
      const response = await alert(ConfirmAlert, {
        titleText: '약관에 동의하시겠습니까?',
        infoText: '약관 동의가 필요합니다.',
        onConfirm: async () => {
          await promise(agreement.setAgreement);
        },
      });
      if (!response) {
        return false;
      }
    }
    return true;
  };

  return { openPopupToNotAgreedUsers };
};

export default useAgreement;
