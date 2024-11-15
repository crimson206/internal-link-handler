import React, { useEffect, useRef } from 'react';

export const useInternalLinkHandler = <T extends HTMLElement>(externalRef?: React.RefObject<T>) => {
  const internalRef = useRef<T>(null);
  const ref = externalRef || internalRef;

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = container.querySelector(`#${id}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    container.addEventListener('click', handleClick);
    return () => container.removeEventListener('click', handleClick);
  }, [ref]);

  return ref;
};

export const InternalLinkHandler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useInternalLinkHandler(containerRef);

  return <div ref={containerRef}>{children}</div>;
};