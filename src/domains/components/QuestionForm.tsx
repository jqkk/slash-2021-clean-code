import React from 'react';

import tw from 'twin.macro';

import {
  BasicAlert,
  Button,
  ConfirmAlert,
  DetailAlert,
  Input,
} from '@/components';
import { useInput, useAlert } from '@/hooks';

import { 이용약관동의여부확인, 이용약관동의하기 } from '../utils';

const QuestionForm = () => {
  const { value: question, onChange } = useInput();
  const { alert } = useAlert();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const 약관동의여부 = 이용약관동의여부확인();
    if (!약관동의여부) {
      const response = await alert(ConfirmAlert, {
        titleText: '약관에 동의하시겠습니까?',
        infoText: '약관 동의가 필요합니다.',
        onConfirm: () => {
          이용약관동의하기();
        },
      });
      if (!response) {
        return;
      }
    }

    await alert(DetailAlert, {
      titleText: '질문하기',
      infoText: 'KIM이 설명해드려요',
    });

    alert(BasicAlert, {
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
