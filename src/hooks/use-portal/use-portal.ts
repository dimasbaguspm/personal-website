import { ReactNode, ReactPortal, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const usePortal = (id: string) => {
  const rootEl = useRef(document.createElement('div'));

  useEffect(() => {
    const parentEl = document.querySelector(`#${id}`);
    if (parentEl) {
      parentEl.appendChild(rootEl.current);
    }

    return () => rootEl.current.remove();
  });

  return rootEl.current;
};

export const Portal = ({ id, children }: { id: string; children: ReactNode }): ReactPortal => {
  const target = usePortal(id);
  return createPortal(children, target);
};

export default usePortal;
