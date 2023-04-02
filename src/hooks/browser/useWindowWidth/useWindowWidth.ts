/**
 * Return browser window size
 * @width Number - browser window size
 * */

import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(document.documentElement.clientWidth);
  useEffect(() => {
    const handleWidth = () => setWidth(document.documentElement.clientWidth);
    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  });
  return width;
};
