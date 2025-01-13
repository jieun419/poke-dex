import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }: { children: ReactNode }) => {
  const rootPortal = document.getElementById('rootPortal') as HTMLElement;

  return createPortal(children, rootPortal);
};

export default Portal;
