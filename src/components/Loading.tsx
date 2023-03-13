import tw from 'twin.macro';

import { useLoading } from '@/hooks';

const Loading = () => {
  const { loading } = useLoading();

  if (!loading) {
    return null;
  }

  return (
    <Container>
      <Spinner />
    </Container>
  );
};

const Container = tw.div`absolute top-0 left-0 w-full min-h-screen flex justify-center items-center bg-white opacity-50`;
const Spinner = tw.div`animate-spin text-black rounded-full border-4 border-solid border-transparent border-l-current w-14 h-14`;

export default Loading;
