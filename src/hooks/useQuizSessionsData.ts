import { useCallback, useEffect } from "react";
import { useFetchData } from "./useFetchData";
import { useBookContext } from "../components/BookProvider";
import { fetchQuizSessions } from "../services/fetchQuizSessions";

export type QuizSession = {
  quizId: string;
  userId: string;
  bookId: string;
  startTime: string;
  endTime: string;
  duration: number;
  progress: number;
  lastVisitedQuestion: string;
  filterTags: string;
  questionIds: string[];
};

export const useQuizSessionsData = () => {
  const { data, isLoading, error, fetchData } = useFetchData<QuizSession[]>();

  const { currentBook } = useBookContext();
  const loadQuizSessions = useCallback(async () => {
    if (!currentBook?.id) return;
    await fetchData(() => fetchQuizSessions("123" /** userId */, currentBook?.id));
  }, [currentBook]);

  useEffect(() => {
    loadQuizSessions();
  }, [currentBook, loadQuizSessions]);

  return { quizSessions: data, isLoading, error, loadQuizSessions };
};
