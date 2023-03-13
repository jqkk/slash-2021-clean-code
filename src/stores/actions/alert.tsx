import { atom } from 'jotai';

import { alertAtom } from '../atoms/alert';

export const closeAtom = atom(null, (get, set, state: boolean) => {
  const { responseHandler } = get(alertAtom);
  responseHandler(state);
  set(alertAtom, {
    Component: null,
    props: {},
    responseHandler: () => {},
  });
});
