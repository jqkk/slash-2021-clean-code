import React from 'react';

import tw from 'twin.macro';

import {
  BasicAlert,
  Button,
  ConfirmAlert,
  DetailAlert,
  Input,
} from '@/components';
import { useInput, useAlert, usePromise } from '@/hooks';
import { delay } from '@/utils';

import { agreement, counselor } from '../api';

const QuestionForm = () => {
  const { value: question, onChange, reset } = useInput();
  const { promise } = usePromise();
  const { alert } = useAlert();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const response = await handle약관동의팝업();
      if (response) {
        await handle연결전문가질문제출();
        await handle새전문가질문제출();
        reset();
      }
    } catch (e) {
      alert(BasicAlert, {
        titleText: 'Error',
        infoText: '다시시도해주세요',
      });
    }
  };

  const handle약관동의팝업 = async () => {
    const 약관동의 = await promise(agreement.getAgreement);
    if (!약관동의) {
      const response = await alert(ConfirmAlert, {
        titleText: '약관에 동의하시겠습니까?',
        infoText: '약관 동의가 필요합니다.',
        onConfirm: async () => {
          await promise(agreement.setAgreement);
        },
      });
      if (!response) {
        return false;
      }
      await delay(500);
    }
    return true;
  };

  const handle연결전문가질문제출 = async () => {
    const response = await promise(counselor.getCounselor);
    if (response) {
      await alert(DetailAlert, {
        titleText: '질문하기',
        infoText: `${response.name}이 설명해드려요`,
        contents: <img src={response.image} alt='연결전문가' />,
      });
      await delay(500);
    }
  };

  const handle새전문가질문제출 = async () => {
    await alert(BasicAlert, {
      titleText: '질문이 등록되었어요',
      infoText: '답변이 등록되면 알려드릴게요',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder='어떤 내용이 궁금한가요?'
        tw='mb-7'
        onChange={onChange}
        value={question}
      />
      <Button type='submit'>질문하기</Button>
    </Form>
  );
};

const Form = tw.form`flex h-full flex-col justify-center items-center`;

export default QuestionForm;
