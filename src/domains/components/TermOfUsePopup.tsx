import { useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import { Alert } from '@/components';

import { dequeueModalPopupQueueAtom } from '../store/actions';
import { modalPopupQueueAtom } from '../store/atoms';
import { 이용약관동의하기 } from '../utils';

const TermOfUsePopup = () => {
  const closeModalPopup = useSetAtom(dequeueModalPopupQueueAtom);
  const clearModalPopupQueue = useResetAtom(modalPopupQueueAtom);

  const handleSubmit = () => {
    이용약관동의하기();
    closeModalPopup();
  };

  const handleCancel = () => {
    clearModalPopupQueue();
  };

  return (
    <Alert
      titleText='약관에 동의하시겠습니까?'
      infoText='약관 동의가 필요합니다.'
      cancelable
      onConfirm={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default TermOfUsePopup;
