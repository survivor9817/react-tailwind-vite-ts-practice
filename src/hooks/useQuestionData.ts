// useQuizData.ts
import { useState } from "react";
import { getQuestionFromDB, type QuestionType } from "../data/questionsData";
import { fakeFetch } from "../utils/fakeFetch";
import { useToast } from "../components/ToastProvider";

// voroodi filterhaaye user ro ke bayad begire dg...
export const useQuestionData = () => {
  const [question, setQuestion] = useState<QuestionType | null>(null);
  const [questionLoading, setQuestionLoading] = useState(false);
  const [questionError, setQuestionError] = useState<Error | null>(null);

  const { showToast } = useToast();

  const loadQuestion = async (questionId: string) => {
    if (!questionId) {
      setQuestionLoading(false);
      return;
    }

    setQuestionLoading(true);
    setQuestionError(null);

    try {
      const q = await fakeFetch(() => getQuestionFromDB(questionId));
      if (q) setQuestion(q);
    } catch (error) {
      showToast("❌ خطا در بارگذاری آیدی سؤالات", { type: "error" });
      setQuestionError(error instanceof Error ? error : new Error(String(error)));
    } finally {
      setQuestionLoading(false);
    }
  };

  return { question, questionLoading, questionError, loadQuestion, setQuestion };
};
