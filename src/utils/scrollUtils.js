/**
 * Scroll Utilities
 * 
 * Collection of utility functions for managing page scrolling behavior
 */

/**
 * Scrolls the page to the top
 * 
 * @param {Object} options - Scroll options
 * @param {boolean} options.smooth - Whether to use smooth scrolling (default: true)
 * @param {number} options.delay - Delay in milliseconds before scrolling (default: 0)
 * 
 * @example
 * // Basic usage
 * scrollToTop();
 * 
 * // With instant scroll
 * scrollToTop({ smooth: false });
 * 
 * // With delay
 * scrollToTop({ delay: 300 });
 */
export const scrollToTop = (options = {}) => {
  const { smooth = true, delay = 0 } = options;

  const performScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : 'auto'
    });
  };

  if (delay > 0) {
    setTimeout(performScroll, delay);
  } else {
    performScroll();
  }
};

/**
 * Scrolls to a specific element
 * 
 * @param {string|Element} target - CSS selector string or DOM element
 * @param {Object} options - Scroll options
 * @param {boolean} options.smooth - Whether to use smooth scrolling (default: true)
 * @param {number} options.offset - Offset from the top in pixels (default: 0)
 * 
 * @example
 * // Scroll to element
 * scrollToElement('#content');
 * 
 * // Scroll with offset for fixed headers
 * scrollToElement('.section', { offset: 80 });
 */
export const scrollToElement = (target, options = {}) => {
  const { smooth = true, offset = 0 } = options;

  const element = typeof target === 'string' 
    ? document.querySelector(target) 
    : target;

  if (!element) {
    console.warn('ScrollToElement: Target element not found');
    return;
  }

  const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementTop - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: smooth ? 'smooth' : 'auto'
  });
};

/**
 * Checks if the page is scrolled
 * 
 * @param {number} threshold - Minimum scroll distance to consider as "scrolled" (default: 10)
 * @returns {boolean} Whether the page is scrolled beyond the threshold
 */
export const isPageScrolled = (threshold = 10) => {
  return window.pageYOffset > threshold;
};

/**
 * Gets the current scroll position
 * 
 * @returns {Object} Object containing x and y scroll positions
 */
export const getScrollPosition = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});