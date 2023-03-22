import tw, { styled } from 'twin.macro';

import Button from '../Button';

import type { AlertProps } from './Alert';

type BasicAlertProps = AlertProps & {
  titleText: string;
  infoText: string;
  onOk?: () => void;
};

const BasicAlert = ({
  titleText,
  infoText,
  onOk = () => {},
  onClose,
}: BasicAlertProps) => {
  const handleOk = () => {
    onOk();
    onClose(true);
  };

  return (
    <WrappingContainer>
      <Container>
        <Title>{titleText}</Title>
        <Info>{infoText}</Info>
        <ButtonContainer>
          <ConfirmButton onClick={handleOk}>확인</ConfirmButton>
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

export default BasicAlert;
