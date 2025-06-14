import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Component này sẽ cuộn trang lên đầu khi chuyển route
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 