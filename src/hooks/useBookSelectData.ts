import { useCallback, useEffect } from "react";
import { getOptionsOfBookSelector, type BookOption } from "../data/booksData";
import { useFetchData } from "./useFetchData";

export const useBookSelectData = () => {
  const { data, isLoading, error, fetchData } = useFetchData<BookOption[] | undefined>();

  const loadOptions = useCallback(async () => {
    await fetchData(() => getOptionsOfBookSelector());
  }, []);

  useEffect(() => {
    loadOptions();
  }, [loadOptions]);

  return { options: data, isLoading, error, loadOptions };
};
