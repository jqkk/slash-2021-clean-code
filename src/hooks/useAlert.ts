import { useSetAtom } from 'jotai';

import { alertAtom } from '@/stores/atoms/alert';

const useAlert = () => {
  const setAlertState = useSetAtom(alertAtom);

  const alert = async (
    Component: (props: any) => JSX.Element,
    props: { [key: string]: any },
  ) =>
    new Promise((resolve) => {
      setAlertState({
        Component,
        props,
        responseHandler: resolve,
      });
    });

  return { alert };
};

export default useAlert;
