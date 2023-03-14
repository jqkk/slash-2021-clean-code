import { atom } from 'jotai';

type AlertStateType = {
  Component: ((props: any) => JSX.Element) | null;
  props: { [key: string]: any };
  responseHandler: (value: boolean | PromiseLike<boolean>) => void;
};

export const alertAtom = atom<AlertStateType>({
  Component: null,
  props: {},
  responseHandler: () => null,
});

export const closeAlertAtom = atom(null, (get, set, state: boolean) => {
  const { responseHandler } = get(alertAtom);
  responseHandler(state);
  set(alertAtom, {
    Component: () => <div />,
    props: {},
    responseHandler: () => {},
  });
});
