// useQuizData.ts
import { useState } from "react";
import { getQuestionIds } from "../data/questionsData";
import { fakeFetch } from "../utils/fakeFetch";
import { useToast } from "../components/ToastProvider";

// voroodi filterhaaye user ro ke bayad begire dg...
export const useQuestionIdsData = () => {
  const [questionIds, setQuestionIds] = useState<string[] | null>(null);
  const [questionIdsLoading, setIdsLoading] = useState(false);
  const [questionIdsError, setIdsError] = useState<Error | null>(null);

  const { showToast } = useToast();

  const loadQuestionIds = async (/** user quiz filters???? */) => {
    setIdsLoading(true);
    setIdsError(null);

    try {
      const ids = await fakeFetch(() => getQuestionIds(/** user quiz filters???? */));
      setQuestionIds(ids);
      return ids;
    } catch (error) {
      showToast("❌ خطا در بارگذاری آیدی سؤالات", { type: "error" });
      setIdsError(error instanceof Error ? error : new Error(String(error)));
      return [];
    } finally {
      setIdsLoading(false);
    }
  };

  return { questionIds, questionIdsLoading, questionIdsError, loadQuestionIds, setQuestionIds };
};
