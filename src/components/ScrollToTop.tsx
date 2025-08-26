import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to the top on route changes so navigations land at the top of the page
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jump to top instantly; override any CSS smooth behavior by specifying 'auto'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
