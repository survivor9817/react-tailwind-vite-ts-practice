// useQuizData.ts
import { useCallback, useEffect } from "react";
import { useToast } from "../components/ToastProvider";
import { useFetchData } from "./useFetchData";
import { fetchQuestionIdsByFilter } from "../services/fetchQuestionIdsByFilter";
import { fetchNewQuizQuestionIds } from "../services/fetchNewQuizQuestionIds";

type QuestionId = string;

// voroodi filterhaaye user ro ke bayad begire dg...
export const useQuestionIdsData = () => {
  const { data, setData, error, isLoading, fetchData } = useFetchData<QuestionId[] | null>();

  const loadQuestionIdsByFilter = useCallback(async () => {
    // const ids = await fetchData(() => fetchQuestionIdsByFilter(/** user quiz filters???? */), {
    //   rethrowError: true,
    //   returnData: true,
    // });

    // current book id ro bezaar
    const ids = await fetchData(
      () => fetchNewQuizQuestionIds("123", "706", "rrr" /** user quiz filters or quiz id ???? */),
      {
        rethrowError: true,
        returnData: true,
      },
    );

    if (ids) return ids;
    throw new Error("تمرینی با این فیلترها موجود نیست.");
  }, []);

  const loadQuestionIdsByQuizId = useCallback(async () => {
    const ids = await fetchData(() => fetchQuestionIdsByFilter(/** user quiz id???? */), {
      rethrowError: true,
      returnData: true,
    });

    if (ids) return ids;
    throw new Error("تمرینی با این فیلترها موجود نیست.");
  }, []);

  // onError
  const { showToast } = useToast();
  useEffect(() => {
    if (error) {
      showToast("❌ خطا در بارگذاری آیدی سؤالات", { type: "error" });
    }
  }, [error]);

  return {
    questionIds: data,
    questionIdsLoading: isLoading,
    questionIdsError: error,
    loadQuestionIdsByFilter,
    loadQuestionIdsByQuizId,
    setQuestionIds: setData,
  };
};
