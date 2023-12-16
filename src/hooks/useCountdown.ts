import { useEffect, useState, useRef, useCallback } from 'react';

export const useCountdown = (initialValue: number, interval = 1000) => {
  const intervalRef = useRef<number | null>(null);
  const [countdown, setCountdown] = useState(initialValue);

  const startCountdown = useCallback(() => {
    if (intervalRef.current !== null) return;
    intervalRef.current = window.setInterval(() => {
      setCountdown((prev) => {
        if (prev > 0) {
          return prev - interval;
        }
        if (prev === 0) clearInterval(intervalRef.current!);

        return prev;
      });
    }, interval);
  }, [initialValue, interval]);

  const resetCountdown = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setCountdown(initialValue);
    }
  }, [initialValue]);

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return { countdown, startCountdown, resetCountdown };
};
