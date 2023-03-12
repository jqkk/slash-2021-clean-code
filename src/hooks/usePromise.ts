import { BasicAlert } from '@/components/Alert';

import useAlert from './useAlert';
import useLoading from './useLoading';

const usePromise = () => {
  const { showLoading, hideLoading } = useLoading();
  const { alert } = useAlert();

  const promise = async <T>(fn: () => Promise<T>) => {
    try {
      showLoading();
      const response = await fn();
      hideLoading();
      return response;
    } catch (e: any) {
      hideLoading();
      alert(BasicAlert, {
        titleText: 'Error',
        infoText: e.message,
      });
      throw e;
    }
  };

  return { promise };
};

export default usePromise;
