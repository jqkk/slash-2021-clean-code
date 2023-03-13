import { useAtom } from 'jotai';

import { loadingAtom } from '@/stores/atoms/loading';

const useLoading = () => {
  const [loading, setLoading] = useAtom(loadingAtom);

  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  return { loading, showLoading, hideLoading };
};

export default useLoading;
