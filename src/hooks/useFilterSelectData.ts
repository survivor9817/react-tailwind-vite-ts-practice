import { useEffect, useState } from "react";
import { fakeFetch } from "../utils/fakeFetch";
import { getOptionsFromDB, type FilterOption } from "../data/quizFilterOptionsData";
import { useToast } from "../components/ToastProvider";
import type { QuizFiltersType } from "./useQuizFilters";

export const useFilterSelectData = (
  initialOptions: FilterOption[] | undefined,
  filterId: string,
  quizFilters: QuizFiltersType,
) => {
  const [options, setOptions] = useState<FilterOption[] | undefined>(initialOptions);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setHasError] = useState(false);

  const { showToast } = useToast();

  const loadOptions = async () => {
    // abort signal yaadet nare besaazi
    setIsLoading(true);
    setHasError(false);

    try {
      const data = await fakeFetch(
        () => getOptionsFromDB(filterId, quizFilters),
        // { errorChance: 0.5 },
        // { delay: 1000 },
      );
      if (data) setOptions(data);
    } catch (error) {
      console.error(`Error loading options for ${filterId}:`, error);
      showToast("خطا در بارگذاری گزینه های غربال", { type: "error" });
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadOptions();
    // ye fekri be haale abort signal bokon. alan nadare bayad dashte bashe.
  }, [quizFilters.BookId]);

  return { options, isLoading, isError, loadOptions };
};
