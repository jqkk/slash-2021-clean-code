import tw from 'twin.macro';

import { BasicAlert, DetailAlert, Input } from '@/components';
import { useInput, useAlert } from '@/hooks';

import QuestionSubmitButton from './QuestionSubmitButton';
import { question } from '../api';
import { useAgreement } from '../hooks';

const QuestionForm = () => {
  const { value: questionInput, onChange, reset } = useInput();
  const { alert } = useAlert();
  const { openPopupToNotAgreedUsers } = useAgreement();

  const handleClickWithoutExpert = async () => {
    const 약관동의여부 = await openPopupToNotAgreedUsers();
    if (!약관동의여부) {
      return;
    }
    await question.sendQuestion(questionInput);
    await alert(BasicAlert, {
      titleText: '질문이 등록되었어요',
      infoText: '답변이 등록되면 알려드릴게요',
    });
    reset();
  };

  const handleClcikWithExpert = async (expert: {
    name: string;
    image: string;
  }) => {
    await alert(DetailAlert, {
      titleText: '질문하기',
      infoText: `${expert.name}이 설명해드려요`,
      contents: <img src={expert.image} alt='연결전문가' />,
    });
    const 약관동의여부 = await openPopupToNotAgreedUsers();
    if (!약관동의여부) {
      return;
    }
    await question.sendQuestion(questionInput, expert.name);
    await alert(BasicAlert, {
      titleText: `질문이 등록되었어요`,
      infoText: '답변이 등록되면 알려드릴게요',
    });
    reset();
  };

  return (
    <Form>
      <Input
        placeholder='어떤 내용이 궁금한가요?'
        tw='mb-7'
        onChange={onChange}
        value={questionInput}
      />
      <QuestionSubmitButton
        questionInput={questionInput}
        onClickkWithExpert={handleClcikWithExpert}
        onClickkWithoutExpert={handleClickWithoutExpert}>
        질문하기
      </QuestionSubmitButton>
    </Form>
  );
};

const Form = tw.form`flex h-full flex-col justify-center items-center`;

export default QuestionForm;
