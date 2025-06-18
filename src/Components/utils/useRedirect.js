import { useCallback } from 'react'

const useRedirect = () => {
  const redirectTo = useCallback((url) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  return redirectTo;
};

export default useRedirect;
