import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTransition = ({ duration = 1000 }: { duration?: number } = {}) => {
  const [pageTransition, setPageTransition] = useState(false);
  const location = useLocation();


  useEffect(() => {
    setPageTransition(true);
    const timeoutId = setTimeout(() => {
      setPageTransition(false);
    }, duration);

    return () => clearTimeout(timeoutId);
  }, [location.pathname, duration]);

  return {
    pageTransition,
  };
};
