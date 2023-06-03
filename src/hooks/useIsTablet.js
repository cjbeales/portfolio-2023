import { useState, useEffect } from 'react';

export const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(false);

  function handleResize() {
    const width = window.innerWidth;
    if (width >= 767 && width <= 1025) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isTablet;
};
