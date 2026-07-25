// useQuizData.ts
import { useCallback, useEffect } from "react";
import type { QuestionType } from "../data/questionsData";
import { useToast } from "../components/ToastProvider";
import { fetchQuestionById, fetchQuestionByIdForQuiz } from "../services/fetchQuestionById";
import { useFetchData } from "./useFetchData";

// voroodi filterhaaye user ro ke bayad begire dg...
export const useQuestionData = () => {
  const { data, setData, error, isLoading, fetchData } = useFetchData<QuestionType | null>();

  const loadQuestion = useCallback(async (questionId: string, quizId: string) => {
    if (!questionId) return;
    // await fetchData(() => fetchQuestionById(questionId), { rethrowError: true });
    await fetchData(() => fetchQuestionByIdForQuiz(questionId, quizId), { rethrowError: true });
  }, []);

  // onError
  const { showToast } = useToast();
  useEffect(() => {
    if (error) {
      showToast("❌ خطا در بارگذاری تمرین! دوباره تلاش کنید.", { type: "error" });
    }
  }, [error]);

  return {
    question: data,
    questionLoading: isLoading,
    questionError: error,
    loadQuestion,
    setQuestion: setData,
  };
};
