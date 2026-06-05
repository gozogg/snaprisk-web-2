import { animate } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const REVEAL_SELECTOR = 'main section, main article, main .scroll-reveal-target';
const MAX_DELAY_S = 0.36;
const STAGGER_S = 0.045;
const OBSERVER_OPTIONS = { threshold: 0.08, rootMargin: '0px 0px -6% 0px' };

function resetRevealStyles(node) {
  node.style.opacity = '';
  node.style.transform = '';
  delete node.dataset.revealDelay;
  node.classList.remove('scroll-reveal', 'scroll-reveal-visible');
}

function isInViewport(node) {
  const rect = node.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < viewHeight * 0.92 && rect.bottom > 0;
}

export default function ScrollRevealProvider({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    let observer;
    let observedNodes = [];
    const runningAnimations = new WeakMap();

    const revealNode = (node, { immediate = false } = {}) => {
      observer?.unobserve(node);

      const delay = immediate ? 0 : Number.parseFloat(node.dataset.revealDelay || '0');
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
    };

    const frameId = requestAnimationFrame(() => {
      const nodes = Array.from(document.querySelectorAll(REVEAL_SELECTOR)).filter(node => {
        if (node.closest('[data-no-reveal]')) return false;
        if (node.closest('footer')) return false;
        if (node.closest('.scroll-stack-card')) return false;
        return true;
      });

      observedNodes = nodes;

      nodes.forEach((node, index) => {
        node.classList.remove('scroll-reveal-visible');
        node.classList.add('scroll-reveal');
        node.style.opacity = '0';
        node.style.transform = 'translateY(22px)';
        node.dataset.revealDelay = String(Math.min(index * STAGGER_S, MAX_DELAY_S));
      });

      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          revealNode(entry.target);
        });
      }, OBSERVER_OPTIONS);

      nodes.forEach(node => {
        observer.observe(node);
        if (isInViewport(node)) {
          revealNode(node, { immediate: true });
        }
      });
    });

    return () => {
      cancelAnimationFrame(frameId);
      observer?.disconnect();
      observedNodes.forEach(resetRevealStyles);
    };
  }, [pathname]);

  return children;
}
