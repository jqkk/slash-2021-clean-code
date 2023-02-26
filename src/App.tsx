import tw from 'twin.macro';

import { QuestionPage } from '@/pages';

const App = () => (
  <Container>
    <MobileContainer>
      <QuestionPage />
    </MobileContainer>
  </Container>
);

const Container = tw.div`flex justify-center`;
const MobileContainer = tw.div`max-w-[393px] w-full min-h-screen bg-black p-10`;

export default App;
