import { useAtomValue, useSetAtom } from 'jotai';

import { closeAtom } from '@/stores/actions/alert';
import { alertAtom } from '@/stores/atoms/alert';

export type AlertProps = {
  onClose: (value: boolean) => void;
};

const Alert = () => {
  const { Component, props } = useAtomValue(alertAtom);
  const close = useSetAtom(closeAtom);

  const onClose = (value: boolean) => {
    close(value);
  };

  return <Component {...props} onClose={onClose} />;
};

export default Alert;
