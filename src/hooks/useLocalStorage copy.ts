import type { Dispatch, SetStateAction } from "react";
import { useCallback, useEffect, useState } from "react";
import { useEventCallback } from "./useEventCallback";
import { useEventListener } from "./useEventListener";

declare global {
  interface WindowEventMap {
    "local-storage": StorageEvent;
  }
}

type UseLocalStorageOptions<T> = {
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
  initializeWithValue?: boolean;
};

const isBrowser = typeof window !== "undefined";

export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T),
  options: UseLocalStorageOptions<T> = {},
): [T, Dispatch<SetStateAction<T>>, () => void] {
  const {
    serializer: customSerializer,
    deserializer: customDeserializer,
    initializeWithValue = true,
  } = options;

  const getDefaultValue = useCallback((): T => {
    return typeof initialValue === "function" ? (initialValue as () => T)() : initialValue;
  }, [initialValue]);

  const serializer = useCallback(
    (value: T): string => {
      return customSerializer ? customSerializer(value) : JSON.stringify(value);
    },
    [customSerializer],
  );

  const deserializer = useCallback(
    (value: string): T => {
      if (customDeserializer) {
        return customDeserializer(value);
      }

      if (value === "undefined") {
        return undefined as T;
      }

      try {
        return JSON.parse(value) as T;
      } catch (error) {
        console.error(`Error parsing localStorage key "${key}":`, error);

        return getDefaultValue();
      }
    },
    [customDeserializer, getDefaultValue, key],
  );

  const readValue = useCallback((): T => {
    if (!isBrowser) {
      return getDefaultValue();
    }

    try {
      const item = window.localStorage.getItem(key);

      return item ? deserializer(item) : getDefaultValue();
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);

      return getDefaultValue();
    }
  }, [key, deserializer, getDefaultValue]);

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (!initializeWithValue) {
      return getDefaultValue();
    }

    return readValue();
  });

  const setValue = useEventCallback<Dispatch<SetStateAction<T>>>((value) => {
    if (!isBrowser) return;

    setStoredValue((prev) => {
      const newValue = typeof value === "function" ? (value as (prev: T) => T)(prev) : value;

      try {
        window.localStorage.setItem(key, serializer(newValue));

        window.dispatchEvent(new StorageEvent("local-storage", { key }));
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }

      return newValue;
    });
  });

  const removeValue = useEventCallback(() => {
    if (!isBrowser) return;

    try {
      window.localStorage.removeItem(key);

      setStoredValue(getDefaultValue());

      window.dispatchEvent(new StorageEvent("local-storage", { key }));
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  });

  /*
    وقتی key تغییر کند:
    مثال:
    book-page-1 -> book-page-2
  */
  useEffect(() => {
    setStoredValue(readValue());
  }, [readValue]);

  const handleStorageChange = useCallback(
    (event: StorageEvent) => {
      if (event.key && event.key !== key) {
        return;
      }

      setStoredValue(readValue());
    },
    [key, readValue],
  );

  // تغییرات بین tab ها
  useEventListener("storage", handleStorageChange);

  // تغییرات بین instance های همین tab
  useEventListener("local-storage", handleStorageChange);

  return [storedValue, setValue, removeValue];
}
