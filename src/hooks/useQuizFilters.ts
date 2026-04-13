import { useContext, useEffect, useState } from "react";
import { BookContext } from "../Darsyavar";
import type { ActionMeta, SingleValue } from "react-select";
import type { FilterOption } from "../data/fehrestsData";

export type QuizFiltersType = {
  BookId: number | undefined;
  Where: {
    value: string;
    label: string;
  };
  Level: {
    value: string;
    label: string;
  };
  Source: {
    value: string;
    label: string;
  };
};

export const useQuizFilters = () => {
  const { currentBook } = useContext(BookContext);
  const [quizFilters, setQuizFilters] = useState<QuizFiltersType>({
    BookId: currentBook?.id,
    Where: { value: "", label: "" },
    Level: { value: "", label: "" },
    Source: { value: "", label: "" },
  });

  const clearFilters = () => {
    setQuizFilters({
      BookId: currentBook?.id,
      Where: { value: "", label: "" },
      Level: { value: "", label: "" },
      Source: { value: "", label: "" },
    });
  };

  useEffect(() => clearFilters(), [currentBook]);

  const onFilterChange = (
    selected: SingleValue<FilterOption>,
    action: ActionMeta<FilterOption>,
  ) => {
    const id = action.name;
    if (!id) return;
    setQuizFilters((prev) => ({
      ...prev,
      [id]: selected,
    }));
  };

  return {
    quizFilters,
    // setQuizFilters,
    clearFilters,
    onFilterChange,
  };
};
