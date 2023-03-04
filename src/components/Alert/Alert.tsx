import tw, { styled } from 'twin.macro';

import Button from '../Button';
import Portal from '../Portal';

type AlertProps = {
  titleText: string;
  infoText: string;
  onOk?: () => void;
};

const Alert = ({ titleText, infoText, onOk = () => {} }: AlertProps) => (
  <Portal>
    <WrappingContainer>
      <Container>
        <Title>{titleText}</Title>
        <Info>{infoText}</Info>
        <ButtonContainer>
          <ConfirmButton onClick={onOk}>확인</ConfirmButton>
        </ButtonContainer>
      </Container>
    </WrappingContainer>
  </Portal>
);

const WrappingContainer = tw.div`absolute top-0 left-0 w-full min-h-screen flex justify-center items-center`;
const Container = tw.div`bg-white rounded-2xl py-5 px-6 min-w-[313px]`;

const Title = tw.h3`text-slate-900 font-bold text-2xl leading-none  mb-2.5`;
const Info = tw.p`text-slate-900 opacity-60 mb-7`;

const ButtonContainer = tw.div`flex flex-row-reverse gap-5`;
const ConfirmButton = styled(Button)({
  ...tw`text-blue-500 bg-transparent w-fit h-fit`,
});

export default Alert;
