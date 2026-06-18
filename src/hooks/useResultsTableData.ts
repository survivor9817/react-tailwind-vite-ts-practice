import { useCallback, useEffect } from "react";
import { type QuizResults } from "../data/questionsData";
import { useFetchData } from "./useFetchData";
import { fetchResultsByQuizId } from "../services/fetchResultsByQuizId";

export const useResultsTableData = (quizId: string) => {
  const { data, error, isLoading, fetchData } = useFetchData<QuizResults>();

  const fetchResults = useCallback(async () => {
    await fetchData(() => fetchResultsByQuizId(quizId)); // make a fetch function for this.
  }, [quizId, fetchData]);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  return { results: data, error, isLoading, loadQuizResults: fetchResults };
};
