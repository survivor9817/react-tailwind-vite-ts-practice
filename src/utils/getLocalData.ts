type Serializable = string | number | boolean | Record<string, any>;

export function getLocalData<T>(key: Serializable, defaultValue: T): T {
  const storageKey = JSON.stringify(key);
  try {
    const data = localStorage.getItem(storageKey);
    return data ? (JSON.parse(data) as T) : defaultValue;
  } catch (error) {
    console.error(`Error loading ${storageKey}:`, error);
    return defaultValue;
  }
}
