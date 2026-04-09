import { useContext, useEffect, useState } from "react";
import { BookContext } from "../Darsyavar";
import type { ActionMeta, SingleValue } from "react-select";
import type { FilterOption } from "../data/data";

export const useQuizFilters = () => {
  const { currentBook } = useContext(BookContext);

  const [quizFilters, setQuizFilters] = useState({
    Book: currentBook?.id,
    Where: { value: "", label: "" },
    Level: { value: "", label: "" },
    Source: { value: "", label: "" },
  });

  const resetFilters = () => {
    setQuizFilters({
      Book: currentBook?.id,
      Where: { value: "", label: "" },
      Level: { value: "", label: "" },
      Source: { value: "", label: "" },
    });
  };
  useEffect(() => resetFilters(), [currentBook]);

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
    setQuizFilters,
    resetFilters,
    onFilterChange,
  };
};
