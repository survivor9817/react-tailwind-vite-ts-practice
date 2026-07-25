import { useEffect } from "react";
import { getOptionsFromDB, type FilterOption } from "../data/quizFilterOptionsData";
import type { QuizFiltersType } from "./useQuizFilters";
import { useFetchData } from "./useFetchData";

export const useQuizFilterSelectData = (filterId: string, quizFilters: QuizFiltersType) => {
  const { data, error, isLoading, fetchData } = useFetchData<FilterOption[] | undefined>();

  // dont use useCallback
  const loadOptions = async () => {
    await fetchData(() => getOptionsFromDB(filterId, quizFilters));
  };

  // onChangeCurrentBook
  useEffect(() => {
    loadOptions();
  }, [quizFilters.BookId]);

  return { options: data, isLoading, error, loadOptions };
};
