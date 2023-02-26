import tw from 'twin.macro';

import { Button } from '@/components';

const App = () => (
  <Container>
    <MobileContainer>
      <Button>질문하기</Button>
    </MobileContainer>
  </Container>
);

const Container = tw.div`flex justify-center`;
const MobileContainer = tw.div`max-w-[393px] w-full min-h-screen bg-black p-10`;

export default App;
