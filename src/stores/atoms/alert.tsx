import { atom } from 'jotai';

type AlertStateType = {
  Component: (props: any) => JSX.Element;
  props: { [key: string]: any };
  responseHandler: (value: boolean | PromiseLike<boolean>) => void;
};

export const alertAtom = atom<AlertStateType>({
  Component: () => <div />,
  props: {},
  responseHandler: () => null,
});
