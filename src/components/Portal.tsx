import type React from 'react';
import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: React.ReactNode;
};

const Portal = ({ children }: PortalProps) => {
  const element = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    document.body.appendChild(element);
    return () => {
      document.body.removeChild(element);
    };
  }, [element]);
  return createPortal(children, element);
};

export default Portal;
