import { BasicAlert, Button } from '@/components';
import { useAlert, usePromise } from '@/hooks';

import { counselor } from '../api';

type QuestionSubmitButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    questionInput: string;
    onClickkWithExpert: (expert: {
      name: string;
      image: string;
    }) => Promise<void> | null;
    onClickkWithoutExpert: () => Promise<void> | null;
  };

const QuestionSubmitButton = ({
  questionInput,
  onClickkWithExpert,
  onClickkWithoutExpert,
  children,
}: QuestionSubmitButtonProps) => {
  const { promise } = usePromise();
  const { alert } = useAlert();

  const handle질문제출 = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      if (questionInput === '') {
        alert(BasicAlert, {
          titleText: 'Error',
          infoText: '질문을 입력해주세요',
        });
        return;
      }
      const 연결전문가 = await promise(counselor.getCounselor);
      if (연결전문가 !== null) {
        onClickkWithExpert(연결전문가);
      } else {
        onClickkWithoutExpert();
      }
    } catch (e) {
      alert(BasicAlert, {
        titleText: 'Error',
        infoText: '다시시도해주세요',
      });
    }
  };

  return (
    <Button type='submit' onClick={handle질문제출}>
      {children}
    </Button>
  );
};

export default QuestionSubmitButton;
