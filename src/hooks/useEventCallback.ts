import { useRef, useLayoutEffect, useCallback } from "react";

export function useEventCallback<T extends (...args: any[]) => any>(callback: T): T {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  return useCallback(
    ((...args: any[]) => {
      return callbackRef.current(...args);
    }) as T,
    [],
  );
}
