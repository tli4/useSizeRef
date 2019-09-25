import React, { useEffect, useState, useRef, MutableRefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useSizeRef = <T = HTMLElement>(): [
  MutableRefObject<T>,
  { width: number; height: number },
] => {
  const element = useRef<T>(null);
  const [state, setState] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!element.current) {
      return () => {};
    }
    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        setState({ width: entry.target.clientWidth, height: entry.target.clientHeight });
      });
    });
    resizeObserver.observe((element.current as unknown) as HTMLElement);
    return () => {
      resizeObserver.disconnect();
    };
  }, [element.current]);
  return [element as MutableRefObject<T>, state];
};

export default useSizeRef;
