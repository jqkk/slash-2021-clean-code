import React from 'react';

import { useAtomValue, useSetAtom } from 'jotai';
import tw from 'twin.macro';

import { Button, Input } from '@/components';
import { useInput } from '@/hooks';

import QuestionRegisterPopup from './QuestionRegisterPopup';
import TermOfUsePopup from './TermOfUsePopup';
import {
  dequeueModalPopupQueueAtom,
  pushModalPopupQueueAtom,
} from '../store/actions';
import { currentModalPopupAtom } from '../store/atoms';
import { 이용약관동의여부확인 } from '../utils';

const QuestionForm = () => {
  const modalPopup = useAtomValue(currentModalPopupAtom);
  const createModalPopup = useSetAtom(pushModalPopupQueueAtom);
  const closeModalPopup = useSetAtom(dequeueModalPopupQueueAtom);
  const { value: question, onChange, reset } = useInput();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const 약관동의여부 = 이용약관동의여부확인();
    if (!약관동의여부) {
      createModalPopup(<TermOfUsePopup />);
    }
    createModalPopup(
      <QuestionRegisterPopup
        onConfirm={() => {
          closeModalPopup();
          reset();
        }}
      />,
    );
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder='어떤 내용이 궁금한가요?'
          tw='mb-7'
          onChange={onChange}
          value={question}
        />
        <Button type='submit'>질문하기</Button>
      </Form>
      {modalPopup}
    </>
  );
};

const Form = tw.form`flex h-full flex-col justify-center items-center`;

export default QuestionForm;
