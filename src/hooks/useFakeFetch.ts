// src/hooks/useFakeFetch.ts
import { useEffect, useRef, useState, useCallback } from "react";

type FakeFetchOptions<T> = {
  delay?: number;
  shouldError?: boolean | ((attempt: number) => boolean);
  resolver?: () => Promise<T> | T;
};

export function useFakeFetch<T>(
  source: T | (() => T | Promise<T>),
  opts: FakeFetchOptions<T> = {},
) {
  const { delay = 500, shouldError = false, resolver } = opts;

  const [data, setData] = useState<T | null>(null);
  const [isError, setIsError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const attemptRef = useRef(0);
  const abortCtrl = useRef({ aborted: false });

  const getData = useCallback((): Promise<T> => {
    if (resolver) return Promise.resolve(resolver());
    if (typeof source === "function") return Promise.resolve((source as () => T | Promise<T>)());
    return Promise.resolve(source as T);
  }, [source, resolver]);

  const runFetch = useCallback(() => {
    setIsLoading(true);
    setIsError(null);
    setData(null);
    abortCtrl.current.aborted = false;
    attemptRef.current += 1;
    const attempt = attemptRef.current;

    const errorNow = typeof shouldError === "function" ? shouldError(attempt) : shouldError;

    const timer = setTimeout(() => {
      if (abortCtrl.current.aborted) return;

      if (errorNow) {
        setIsError(new Error("Fake fetch error (simulated)"));
        setIsLoading(false);
        return;
      }

      getData()
        .then((res) => {
          if (!abortCtrl.current.aborted) setData(res);
        })
        .catch((e) => {
          if (!abortCtrl.current.aborted) setIsError(e instanceof Error ? e : new Error(String(e)));
        })
        .finally(() => {
          if (!abortCtrl.current.aborted) setIsLoading(false);
        });
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, getData, shouldError]);

  useEffect(() => {
    const cleanup = runFetch();
    return () => {
      abortCtrl.current.aborted = true;
      cleanup();
    };
  }, [runFetch]);

  const refetch = useCallback(() => runFetch(), [runFetch]);

  return { data, isError, isLoading, refetch };
}
