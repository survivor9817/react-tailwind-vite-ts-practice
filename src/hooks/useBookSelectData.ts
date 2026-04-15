import { useEffect, useState } from "react";
import { getOptionsOfBookSelector, type BookOption } from "../data/booksData";
import { fakeFetch } from "../utils/fakeFetch";

export const useBookSelectData = () => {
  const [options, setOptions] = useState<BookOption[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const loadOptions = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const data = await fakeFetch(
        () => getOptionsOfBookSelector(),
        // { errorChance: 0.5 },
        { delay: 3000 },
        // { errorChance: 1 },
      );
      if (data) setOptions(data);
    } catch (e) {
      console.error(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadOptions();
  }, []);

  return { options, isLoading, isError, loadOptions };
};
