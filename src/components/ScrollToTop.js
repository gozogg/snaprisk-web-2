import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSmoothScroll } from './SmoothScrollProvider';

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenisRef = useSmoothScroll();

  useEffect(() => {
    const lenis = lenisRef?.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: false, duration: 0.9 });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, lenisRef]);

  return null;
}

export default ScrollToTop;
