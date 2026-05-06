import { useCallback, useEffect } from "react";
import { getBookPage } from "../data/fehrestsData";
import { useFetchData } from "./useFetchData";
import { useBookContext } from "../components/BookProvider";

export const useBookPageData = () => {
  const { data, isLoading, error, fetchData } = useFetchData<string>();

  const { currentBook, currentPage } = useBookContext();
  const loadPageContent = useCallback(async () => {
    if (!currentBook || !currentPage) return;
    await fetchData(() => getBookPage(currentBook.id, currentPage));
  }, [currentBook, currentPage]);

  useEffect(() => {
    loadPageContent();
  }, [loadPageContent]);

  return { pageContent: data, isLoading, error, loadPageContent };
};
