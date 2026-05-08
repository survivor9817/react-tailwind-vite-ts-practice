import { useCallback, useEffect } from "react";
import type { FehrestSection } from "../data/fehrestsData";
import { useFetchData } from "./useFetchData";
import { useBookContext } from "../components/BookProvider";
import { fetchFehrestListById } from "../services/fetchFehrestListById";

export const useFehrestListData = () => {
  const { data, isLoading, error, fetchData } = useFetchData<FehrestSection[]>();

  const { currentBook } = useBookContext();
  const loadFehrest = useCallback(async () => {
    if (!currentBook?.id) return;
    await fetchData(() => fetchFehrestListById(currentBook?.id));
  }, []);

  useEffect(() => {
    loadFehrest();
  }, [currentBook, loadFehrest]);

  return { currentFehrest: data, isLoading, error, loadFehrest };
};
