import { useCallback, useEffect } from "react";
import { getOptionsFromDB, type FilterOption } from "../data/quizFilterOptionsData";
import { useToast } from "../components/ToastProvider";
import type { QuizFiltersType } from "./useQuizFilters";
import { useFetchData } from "./useFetchData";

export const useFilterSelectData = (filterId: string, quizFilters: QuizFiltersType) => {
  const { data, error, isLoading, fetchData } = useFetchData<FilterOption[] | undefined>();

  const loadOptions = useCallback(() => {
    fetchData(() => getOptionsFromDB(filterId, quizFilters));
  }, []);

  // onChangeCurrentBook
  useEffect(() => {
    loadOptions();
  }, [quizFilters.BookId, loadOptions]);

  // onError
  const { showToast } = useToast();
  useEffect(() => {
    if (error) showToast("خطا در بارگذاری گزینه های غربال", { type: "error" });
  }, [error]);

  return { options: data, isLoading, error, loadOptions };
};
