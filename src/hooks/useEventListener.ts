import { useRef, useLayoutEffect, useEffect } from "react";

const isBrowser = typeof window !== "undefined";

export function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
) {
  const handlerRef = useRef(handler);

  useLayoutEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!isBrowser) return;

    const listener = (event: Event) => {
      handlerRef.current(event as WindowEventMap[K]);
    };

    window.addEventListener(eventName, listener);

    return () => {
      window.removeEventListener(eventName, listener);
    };
  }, [eventName]);
}
