import { useCallback, useEffect } from "react";
import { getResultsFromDB, type QuizResults } from "../data/questionsData";
import { useFetchData } from "./useFetchData";

export const useResultsTableData = (userId: string, questionIds: string[]) => {
  const { data, error, isLoading, fetchData } = useFetchData<QuizResults>();

  const fetchResults = useCallback(() => {
    if (!userId || questionIds.length === 0) return;
    fetchData(() => getResultsFromDB(userId, questionIds));
  }, [userId, questionIds, fetchData]);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  return { results: data, error, isLoading, loadQuizResults: fetchResults };
};
