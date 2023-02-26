import React, { useState } from 'react';

import tw from 'twin.macro';

import { Alert, Button, Input } from '@/components';
import { useInput } from '@/hooks';

const QuestionForm = () => {
  const [open, setOpen] = useState(false);
  const { value: question, onChange, reset } = useInput();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    reset();
    setOpen(true);
  };

  const handleConfirm = () => {
    setOpen(false);
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
      {open && (
        <Alert
          titleText='질문이 등록되었어요'
          infoText='답변이 오면 알려드릴게요.'
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
};

const Form = tw.form`flex h-full flex-col justify-center items-center`;

export default QuestionForm;
