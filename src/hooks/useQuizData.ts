// useQuizData.ts
import { useCallback, useEffect } from "react";
import { useToast } from "../components/ToastProvider";
import { useFetchData } from "./useFetchData";
import { fetchQuizById } from "../services/fetchQuizById";
import { fetchNewQuiz } from "../services/fetchNewQuiz";
import type { QuizFiltersType } from "./useQuizFilters";

type QuizSession = {
  quizId: string;
  userId: string;
  bookId: string;
  startTime: string;
  endTime: string | null;
  duration: number;
  progress: number;
  lastVisitedQuestion: string;
  filterTags: string;
  questionIds: string[];
};

// voroodi filterhaaye user ro ke bayad begire dg...
export const useQuizData = () => {
  const { data, setData, error, isLoading, fetchData } = useFetchData<
    QuizSession | null | undefined
  >();

  // load new quiz by filter or ...
  const loadNewQuiz = useCallback(async (filters: QuizFiltersType) => {
    // current book id ro bezaar
    const quiz = await fetchData(() => fetchNewQuiz("123", "706", "rrr"), {
      rethrowError: true,
      returnData: true,
    });

    if (quiz) return quiz;
    throw new Error("تمرینی با این غربال‌ها موجود نیست.");
  }, []);

  const loadExistingQuiz = useCallback(async (quizId: string) => {
    const quiz = await fetchData(() => fetchQuizById(quizId), {
      rethrowError: true,
      returnData: true,
    });

    if (quiz) return quiz;
    throw new Error("تمرینی با این آیدی موجود نیست.");
  }, []);

  // onError
  const { showToast } = useToast();
  useEffect(() => {
    if (error) {
      showToast("❌ خطا در بارگذاری آیدی سؤالات", { type: "error" });
    }
  }, [error]);

  return {
    quiz: data,
    quizLoading: isLoading,
    quizError: error,
    loadNewQuiz,
    loadExistingQuiz,
    setQuiz: setData,
  };
};
