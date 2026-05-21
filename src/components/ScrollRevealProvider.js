import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const REVEAL_SELECTOR = 'main section, main article, main .scroll-reveal-target';

export default function ScrollRevealProvider({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    let observer;

    const frameId = requestAnimationFrame(() => {
      const nodes = Array.from(document.querySelectorAll(REVEAL_SELECTOR)).filter(node => {
        if (node.closest('[data-no-reveal]')) return false;
        if (node.closest('footer')) return false;
        if (node.closest('.scroll-stack-card')) return false;
        return true;
      });

      nodes.forEach((node, index) => {
        node.classList.remove('scroll-reveal-visible');
        node.classList.add('scroll-reveal');
        node.style.setProperty('--reveal-delay', `${Math.min(index * 45, 360)}ms`);
      });

      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('scroll-reveal-visible');
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
      );

      nodes.forEach(node => observer.observe(node));
    });

    return () => {
      cancelAnimationFrame(frameId);
      observer?.disconnect();
    };
  }, [pathname]);

  return children;
}
