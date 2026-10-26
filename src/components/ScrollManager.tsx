import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Route changes land at the top; `/#section` links scroll to that section. */
export const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash, key]);

  return null;
};
