import { useCallback, useEffect } from "react";
import { useFetchData } from "./useFetchData";
import { useBookContext } from "../components/BookProvider";
import { fetchBookPage } from "../services/fetchBookPage";

export const useBookPageData = () => {
  const { data, isLoading, error, fetchData } = useFetchData<string>();

  const { currentBook, currentPage } = useBookContext();
  const loadPageContent = useCallback(async () => {
    if (!currentBook || !currentPage) return;
    await fetchData(() => fetchBookPage(currentBook.id, currentPage));
  }, [currentBook, currentPage]);

  useEffect(() => {
    loadPageContent();
  }, [loadPageContent]);

  return { pageContent: data, isLoading, error, loadPageContent };
};
