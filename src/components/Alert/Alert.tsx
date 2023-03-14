import { AnimatePresence, motion } from 'framer-motion';
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

  return (
    <AnimatePresence>
      {Component && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}>
          <Component {...props} onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
