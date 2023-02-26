import tw, { styled } from 'twin.macro';

const Input = styled.input(() => ({
  ...tw`w-full border-b-[3px] border-white bg-inherit focus-visible:outline-none text-white text-2xl leading-none font-normal placeholder:text-center placeholder:text-white placeholder:opacity-75`,
}));

export default Input;
