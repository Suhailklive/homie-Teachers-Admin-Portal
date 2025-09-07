import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to automatically scroll to top when route changes
 * 
 * This hook listens to route changes and smoothly scrolls the page
 * to the top, providing a consistent user experience across navigation.
 * 
 * @param {Object} options - Configuration options
 * @param {boolean} options.smooth - Whether to use smooth scrolling (default: true)
 * @param {number} options.delay - Delay in milliseconds before scrolling (default: 0)
 * 
 * @example
 * // Basic usage
 * useScrollToTop();
 * 
 * // With custom options
 * useScrollToTop({ smooth: false, delay: 100 });
 */
const useScrollToTop = (options = {}) => {
  const { smooth = true, delay = 0 } = options;
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth ? 'smooth' : 'auto'
      });
    };

    if (delay > 0) {
      const timer = setTimeout(scrollToTop, delay);
      return () => clearTimeout(timer);
    } else {
      scrollToTop();
    }
  }, [location.pathname, smooth, delay]);
};

export default useScrollToTop;