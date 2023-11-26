import { useState, useEffect } from 'react';

export const useIsDesktop = () => {
  const [isDesktop, setisDesktop] = useState(false);

  function handleResize() {
    const width = window.innerWidth;
    if (width >= 1025) {
      setisDesktop(true);
    } else {
      setisDesktop(false);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isDesktop;
};
