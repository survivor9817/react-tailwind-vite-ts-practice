import { useEffect, useState } from "react";
import type { ActionMeta, SingleValue } from "react-select";
import { useBookContext } from "../../components/BookProvider";

export type QuizFiltersKey = "BookId" | "Where" | "Level" | "Source";

export type QuizFilterOption = {
  value: QuizFiltersKey | "";
  label: string;
  isDisabled?: boolean;
};

export type QuizFiltersType = {
  BookId: string | undefined;
  Where: QuizFilterOption;
  Level: QuizFilterOption;
  Source: QuizFilterOption;
};

const EMPTY_OPTION: QuizFilterOption = { value: "", label: "" };

export const useQuizFilters = () => {
  const { currentBook } = useBookContext();

  const emptyQuizFilter: QuizFiltersType = {
    BookId: currentBook?.id,
    Where: EMPTY_OPTION,
    Level: EMPTY_OPTION,
    Source: EMPTY_OPTION,
  };

  const [quizFilters, setQuizFilters] = useState<QuizFiltersType>(emptyQuizFilter);

  const clearFilters = () => {
    setQuizFilters(emptyQuizFilter);
  };

  useEffect(() => {
    clearFilters();
  }, [currentBook]);

  const updateQuizFilters = (id: QuizFiltersKey, selectedFilter: SingleValue<QuizFilterOption>) => {
    setQuizFilters((prev) => ({
      ...prev,
      [id]: selectedFilter,
    }));
  };

  // set new user selected filter option on quizFilters
  const onChangeFilterSelect = (
    selected: SingleValue<QuizFilterOption>,
    action: ActionMeta<QuizFilterOption>,
  ) => {
    const id = action.name;
    if (!id) return;
    updateQuizFilters(id as QuizFiltersKey, selected);
  };

  return {
    quizFilters,
    // setQuizFilters,
    clearFilters,
    onChangeFilterSelect,
  };
};
