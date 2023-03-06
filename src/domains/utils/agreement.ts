const 이용약관동의여부확인 = () => {
  const agreement = localStorage.getItem('agreement');
  return agreement === 'true';
};

const 이용약관동의하기 = () => {
  localStorage.setItem('agreement', 'true');
};

export { 이용약관동의여부확인, 이용약관동의하기 };
