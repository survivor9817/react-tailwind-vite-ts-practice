import { useCallback, useEffect } from "react";
import { getLatestResultsFromDB, type QuizResults } from "../data/questionsData";
import { useFetchData } from "./useFetchData";

export const useResultsTableData = (userId: string, questionIds: string[]) => {
  const { data, error, isLoading, fetchData } = useFetchData<QuizResults>();

  const fetchResults = useCallback(async () => {
    if (!userId || questionIds.length === 0) return;
    await fetchData(() => getLatestResultsFromDB(userId, questionIds)); // make a fetch function for this.
  }, [userId, questionIds, fetchData]);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  return { results: data, error, isLoading, loadQuizResults: fetchResults };
};
