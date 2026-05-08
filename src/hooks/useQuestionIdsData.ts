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

  // dota taabe misaazim yeki by filter yeki by session id
  const loadQuestionIds = async (/** user quiz filters???? */) => {
    setIdsLoading(true);
    setIdsError(null);

    try {
      const ids = await fakeFetch(
        () => getQuestionIds(/** user quiz filters???? */),
        // { errorChance: 0.5 },
        // { errorChance: 0.5 },
      );
      if (!ids || !ids.length) throw new Error("تمرینی موجود نیست!"); // na dige tamrin nabood error bendaze server.
      setQuestionIds(ids);
      return ids;
    } catch (rawError) {
      showToast("❌ خطا در بارگذاری آیدی سؤالات", { type: "error" });
      const err = rawError instanceof Error ? rawError : new Error(String(rawError));
      setIdsError(err);
      throw err;
    } finally {
      setIdsLoading(false);
    }
  };

  return { questionIds, questionIdsLoading, questionIdsError, loadQuestionIds, setQuestionIds };
};
