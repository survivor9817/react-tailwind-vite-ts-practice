import { useCallback, useEffect } from "react";
import type { BookOption } from "../data/booksData";
import { useFetchData } from "./useFetchData";
import { fetchBookSelectOptions } from "../services/fetchBookSelectOptions";

export const useBookSelectData = () => {
  const { data, isLoading, error, fetchData } = useFetchData<BookOption[] | undefined>();

  const loadOptions = useCallback(async () => {
    // esm haaye ketaab haa dastebandi shode bar asaase paaye va reshte
    // daste aval ketaabhaaye paaye i ke kaarbar entekhaab karde.
    await fetchData(() => fetchBookSelectOptions());
  }, []);

  useEffect(() => {
    loadOptions();
  }, [loadOptions]);

  return { options: data, isLoading, error, loadOptions };
};
