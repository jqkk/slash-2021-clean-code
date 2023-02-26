import { atom } from 'jotai';

import { modalPopupQueueAtom } from '../atoms/modalPopupQueue';

export const pushModalPopupQueueAtom = atom(
  null,
  (get, set, popup: JSX.Element) => {
    set(modalPopupQueueAtom, (queue) => [...queue, popup]);
  },
);

export const dequeueModalPopupQueueAtom = atom(null, (get, set) => {
  set(modalPopupQueueAtom, (queue) => queue.slice(1));
});
