import { useState, useCallback } from 'react';

const useInput = (initalValue = '') => {
  const [value, setValue] = useState(initalValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const reset = useCallback(() => setValue(initalValue), [initalValue]);

  return { value, onChange, reset };
};

export default useInput;
