import tw, { styled } from 'twin.macro';

const Button = styled.button(() => ({
  ...tw`w-full text-white bg-blue-500 text-2xl leading-none font-normal h-[62px] rounded-lg`,
}));

export default Button;
