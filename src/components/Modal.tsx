import tw from 'twin.macro';

import Button from './Button';

type ModalProps = {
  titleText: string;
  infoText: string;
  contents?: React.ReactNode;
};

const Modal = ({ titleText, infoText, contents }: ModalProps) => (
  <WrappingContainer>
    <Container>
      <Title>{titleText}</Title>
      <Info>{infoText}</Info>
      {contents && <ContentsContainer>{contents}</ContentsContainer>}
      <Button>확인</Button>
    </Container>
  </WrappingContainer>
);

const WrappingContainer = tw.div`absolute top-0 left-0 w-full min-h-screen flex justify-center items-center`;
const Container = tw.div`bg-white rounded-2xl py-5 px-6 min-w-[313px] flex flex-col items-center`;

const Title = tw.h3`text-slate-900 font-bold text-2xl leading-none  mb-2.5`;
const Info = tw.p`text-slate-900 opacity-60 mb-6`;

const ContentsContainer = tw.div`mb-[50px]`;

export default Modal;
