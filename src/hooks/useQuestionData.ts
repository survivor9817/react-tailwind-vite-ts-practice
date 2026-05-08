// useQuizData.ts
import { useState } from "react";
import type { QuestionType } from "../data/questionsData";
import { fakeFetch } from "../utils/fakeFetch";
import { useToast } from "../components/ToastProvider";
import { fetchQuestionById } from "../services/fetchQuestionById";

// voroodi filterhaaye user ro ke bayad begire dg...
export const useQuestionData = () => {
  const [question, setQuestion] = useState<QuestionType | null>(null);
  const [questionLoading, setQuestionLoading] = useState(false);
  const [questionError, setQuestionError] = useState<Error | null>(null);

  const { showToast } = useToast();
  // // onError
  // const { showToast } = useToast();
  // useEffect(() => {
  //   if (error) {
  //     showToast("❌ خطا در بارگذاری تمرین! دوباره تلاش کنید.", { type: "error" });
  //   }
  // }, [error]);

  const loadQuestion = async (questionId: string) => {
    if (!questionId) return;
    setQuestionLoading(true);
    setQuestionError(null);

    try {
      const q = await fakeFetch(
        () => fetchQuestionById(questionId),
        // { errorChance: 0.5 },
        // { errorChance: 1 },
      );
      if (q) setQuestion(q);
    } catch (rawError) {
      showToast("❌ خطا در بارگذاری تمرین! دوباره تلاش کنید.", { type: "error" });
      const err = rawError instanceof Error ? rawError : new Error(String(rawError));
      setQuestionError(err);
      throw err;
    } finally {
      setQuestionLoading(false);
    }
  };

  return { question, questionLoading, questionError, loadQuestion, setQuestion };
};
