// useQuizData.ts
import { useState } from "react";
import { getQuestionFromDB, getQuestionIds, type QuestionType } from "../data/questionsData";
import { fakeFetch } from "./fakeFetch";
import { useToast } from "../components/ToastProvider";

// voroodi filterhaaye user ro ke bayad begire dg...
export const useQuizData = () => {
  const [questionIds, setQuestionIds] = useState<string[] | null>(null);
  const [idsLoading, setIdsLoading] = useState(false);
  const [idsError, setIdsError] = useState<Error | null>(null);

  const [question, setQuestion] = useState<QuestionType | null>(null);
  const [questionLoading, setQuestionLoading] = useState(false);
  const [questionError, setQuestionError] = useState<Error | null>(null);

  const { show } = useToast();

  const loadIds = async (/** user quiz filters???? */) => {
    setIdsLoading(true);
    setIdsError(null);

    try {
      const ids = await fakeFetch(
        () => getQuestionIds(/** user quiz filters???? */),
        // { errorChance: 1 },
        // { errorChance: 1 },
      );
      setQuestionIds(ids);
      return ids;
    } catch (error) {
      show("❌ خطایی رخ داد", { type: "error" });
      setIdsError(error instanceof Error ? error : new Error(String(error)));

      return [];
    } finally {
      setIdsLoading(false);
    }
  };

  const loadQuestion = async (currentId: string) => {
    // ابتدا مطمئن شویم که questionIds لود شده
    if (!questionIds) {
      await loadIds();
    }

    if (!currentId) {
      setQuestionLoading(false);
      return;
    }

    setQuestionLoading(true);
    setQuestionError(null);

    try {
      const q = await fakeFetch(() => getQuestionFromDB(currentId));
      if (q) setQuestion(q);
    } catch (error) {
      setQuestionError(error instanceof Error ? error : new Error(String(error)));
    } finally {
      setQuestionLoading(false);
    }
  };

  const clearQuiz = () => {
    setQuestionIds(null);
    setQuestion(null);
  };

  return {
    questionIds,
    question,
    idsLoading,
    questionLoading,
    loading: idsLoading || questionLoading,
    idsError,
    questionError,
    error: idsError || questionError,
    loadIds,
    loadQuestion,
    clearQuiz,
  };
};
