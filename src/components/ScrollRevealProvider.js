import { animate } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const REVEAL_SELECTOR = 'main section, main article, main .scroll-reveal-target';
const MAX_DELAY_S = 0.36;
const STAGGER_S = 0.045;

export default function ScrollRevealProvider({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    let observer;
    const runningAnimations = new WeakMap();

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
        node.style.opacity = '0';
        node.style.transform = 'translateY(22px)';
        node.dataset.revealDelay = String(Math.min(index * STAGGER_S, MAX_DELAY_S));
      });

      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const node = entry.target;
            observer.unobserve(node);

            const delay = Number.parseFloat(node.dataset.revealDelay || '0');
            runningAnimations.get(node)?.stop?.();

            const controls = animate(
              node,
              { opacity: 1, y: 0 },
              {
                duration: 0.65,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
              }
            );

            runningAnimations.set(node, controls);
            node.classList.add('scroll-reveal-visible');
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
