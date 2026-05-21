import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const { pathname } = useLocation();
  const shellRef = useRef(null);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;

    shell.classList.remove('page-enter-active');
    void shell.offsetWidth;
    shell.classList.add('page-enter-active');
  }, [pathname]);

  return (
    <div ref={shellRef} className="page-transition-shell">
      {children}
    </div>
  );
}
