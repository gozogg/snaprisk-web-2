import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReactiveHeaderHideOnDrag({ children, scrollContainerRef, conditional, firstHiddenYValue, scrollThreshold, hiddenAtTopY }) {
  const headerRef = useRef(null);
  const lastScrollTop = useRef(0); // Keeps track of the last scroll position
  const headerHeight = useRef(0); // Stores the height of the header

  useEffect(() => {
    // Set header height once the component mounts
    if (headerRef.current) {
      headerHeight.current = headerRef.current.offsetHeight;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const header = headerRef.current;

      if (header) {
        if (scrollTop <= 0) {
          header.style.transform = `translateY(0px)`;
          lastScrollTop.current = 0; // Reset last scroll position
          return;
        }

        // Calculate the distance scrolled since the last update
        const scrollDistance = scrollTop - lastScrollTop.current;
        lastScrollTop.current = scrollTop;

        // Calculate the new translateY position, clamped to -headerHeight
        const currentTranslateY = parseFloat(header.style.transform.replace('translateY(', '')) || 0;
        const newTranslateY = Math.max(-headerHeight.current, Math.min(0, currentTranslateY - scrollDistance));

        // Apply the transform to move the header up or down by the scroll distance
        header.style.transform = `translateY(${newTranslateY}px)`;
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="fixed sm:relative top-0 left-0 w-full z-[60] dark:bg-slate-950 bg-white"
      style={{
        top: 0,
        left: 0,
        right: 0,
        transform: 'translateY(0px)',
      }}
    >
      {children}
    </div>
  );
}
