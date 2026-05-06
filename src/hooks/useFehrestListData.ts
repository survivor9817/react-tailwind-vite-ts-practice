import { useCallback, useEffect } from "react";
import { type FehrestSection, getFehrestById } from "../data/fehrestsData";
import { useFetchData } from "./useFetchData";
import { useBookContext } from "../components/BookProvider";

export const useFehrestListData = () => {
  const { currentBook } = useBookContext();

  const { data, isLoading, error, fetchData } = useFetchData<FehrestSection[]>();

  const loadFehrest = useCallback(async (bookId: number) => {
    await fetchData(() => getFehrestById(bookId));
  }, []);

  useEffect(() => {
    if (!currentBook?.id) return;
    loadFehrest(currentBook?.id);
  }, [currentBook, loadFehrest]);

  return { currentFehrest: data, isLoading, error, loadFehrest };
};
