import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const ScrollToTop = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params, searchParams]);

  return null;
};

export default ScrollToTop;
