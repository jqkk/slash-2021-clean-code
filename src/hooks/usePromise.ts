import useLoading from './useLoading';

const usePromise = () => {
  const { showLoading, hideLoading } = useLoading();

  const promise = async <T>(fn: () => Promise<T>) => {
    try {
      showLoading();
      const response = await fn();
      hideLoading();
      return response;
    } catch (e) {
      hideLoading();
      throw e;
    }
  };

  return { promise };
};

export default usePromise;
