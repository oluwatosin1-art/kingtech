import { useEffect, useRef, useState } from 'react';

/**
 * Reveals an element when it scrolls into view.
 * @param {Object} options
 * @param {number} options.threshold - 0 to 1, how much must be visible (default 0.15)
 * @param {boolean} options.once - animate only first time (default true)
 * @param {string} options.rootMargin - offset from viewport (default '0px 0px -80px 0px')
 */
export function useReveal({ threshold = 0.15, once = true, rootMargin = '0px 0px -80px 0px' } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: if IntersectionObserver unsupported, just show
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once, rootMargin]);

  return { ref, visible };
}