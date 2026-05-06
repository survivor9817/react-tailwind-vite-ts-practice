import { useCallback, useEffect } from "react";
import { getOptionsFromDB, type FilterOption } from "../data/quizFilterOptionsData";
import type { QuizFiltersType } from "./useQuizFilters";
import { useFetchData } from "./useFetchData";

export const useFilterSelectData = (filterId: string, quizFilters: QuizFiltersType) => {
  const { data, error, isLoading, fetchData } = useFetchData<FilterOption[] | undefined>();

  const loadOptions = useCallback(
    async (/** quizFilters??? */) => {
      await fetchData(() => getOptionsFromDB(filterId, quizFilters));
    },
    [],
  );

  // onChangeCurrentBook
  useEffect(() => {
    loadOptions();
  }, [quizFilters.BookId, loadOptions]);

  return { options: data, isLoading, error, loadOptions };
};
