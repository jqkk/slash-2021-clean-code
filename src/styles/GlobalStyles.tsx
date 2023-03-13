import React from 'react';

import { Global } from '@emotion/react';
import { css, GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css({
  html: {
    fontFamily: 'Noto Sans',
  },
  '#root > button': {
    backgroundColor: '#25262b',
  },
  '.jotai-devtools-UnstyledButton-root img': {
    maxWidth: 'initial',
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
