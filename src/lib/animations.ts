
import { useEffect, useState, useRef, RefObject } from 'react';

// Custom hook to check if an element is in viewport
export function useInView(ref: RefObject<HTMLElement>, threshold: number = 0.1): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold]);

  return isIntersecting;
}

// Staggered animation for children based on delay
export function getStaggeredDelay(index: number, baseDelay: number = 0.1): string {
  return `${baseDelay + index * 0.1}s`;
}

// Get animation class based on viewport
export function getAnimationClass(isInView: boolean, animation: string = 'fade-in'): string {
  return isInView ? `animate-${animation}` : 'opacity-0';
}
