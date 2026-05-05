import { useState, useRef, useEffect, useCallback } from "react";
import { fakeFetch } from "../utils/fakeFetch";

export const useFetchData = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchData = useCallback(async (fetcher: () => T) => {
    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    setError(null);

    try {
      const res = await fakeFetch(fetcher, { signal: controller.signal });
      if (!controller.signal.aborted) setData(res);
    } catch (error) {
      if (error instanceof DOMException && (error as Error).name === "AbortError") return;
      if (!controller.signal.aborted) setError((error as Error).message || "An error occurred");
    } finally {
      if (!controller.signal.aborted) setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    return () => abortControllerRef.current?.abort();
  }, []);

  const reset = () => {
    abortControllerRef.current?.abort();
    setData(null);
    setError(null);
    setIsLoading(false);
  };

  return { data, error, isLoading, fetchData, reset };
};
