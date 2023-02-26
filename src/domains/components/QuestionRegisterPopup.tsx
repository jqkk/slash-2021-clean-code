import { Alert } from '@/components';

type IProps = {
  onConfirm: () => void;
};

const QuestionRegisterPopup = ({ onConfirm }: IProps) => (
  <Alert
    titleText='질문이 등록되었어요'
    infoText='답변이 오면 알려드릴게요.'
    onConfirm={onConfirm}
  />
);

export default QuestionRegisterPopup;
