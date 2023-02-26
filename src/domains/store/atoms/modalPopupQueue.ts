import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

export const modalPopupQueueAtom = atomWithReset<JSX.Element[]>([]);

export const currentModalPopupAtom = atom(
  (get) => get(modalPopupQueueAtom)[0] ?? null,
);
