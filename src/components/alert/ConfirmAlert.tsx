import tw, { styled } from 'twin.macro';

import Button from '../Button';

import type { AlertProps } from './Alert';

type ConfirmAlertProps = AlertProps & {
  titleText: string;
  infoText: string;
  onConfirm?: (() => void) | (() => Promise<void>);
  onCancel?: () => void;
};

const ConfirmAlert = ({
  titleText,
  infoText,
  onConfirm = () => {},
  onCancel = () => {},
  onClose,
}: ConfirmAlertProps) => {
  const handleConfirm = async () => {
    await onConfirm();
    onClose(true);
  };

  const handleCancel = () => {
    onCancel();
    onClose(false);
  };

  return (
    <WrappingContainer>
      <Container>
        <Title>{titleText}</Title>
        <Info>{infoText}</Info>
        <ButtonContainer>
          <CancelButton onClick={handleCancel}>취소</CancelButton>
          <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>
        </ButtonContainer>
      </Container>
    </WrappingContainer>
  );
};

const WrappingContainer = tw.div`absolute top-0 left-0 w-full min-h-screen flex justify-center items-center`;
const Container = tw.div`bg-white rounded-2xl py-5 px-6 min-w-[313px]`;

const Title = tw.h3`text-slate-900 font-bold text-2xl leading-none  mb-2.5`;
const Info = tw.p`text-slate-900 opacity-60 mb-7`;

const ButtonContainer = tw.div`flex flex-row-reverse gap-5`;
const ConfirmButton = styled(Button)({
  ...tw`text-blue-500 bg-transparent w-fit h-fit`,
});
const CancelButton = styled(Button)({
  ...tw`text-slate-900  bg-transparent  w-fit h-fit`,
});

export default ConfirmAlert;
