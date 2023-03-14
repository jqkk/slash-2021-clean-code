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
