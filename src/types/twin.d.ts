import 'twin.macro';
import type { css as cssImport } from '@emotion/react';
import type { CSSInterpolation } from '@emotion/serialize';
import type styledImport from '@emotion/styled';

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module 'react' {
  // The tw and css prop
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface DOMAttributes<T> {
    tw?: string;
    css?: CSSInterpolation;
  }
}
