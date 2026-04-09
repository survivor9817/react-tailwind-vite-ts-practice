import { useEffect, useRef, useState } from "react";
import type { QuizFiltersType } from "../components/Quiz";

export const useQuizFiltersProgressiveDisclosure = (quizFilters: QuizFiltersType) => {
  const quizFilterBoxRef = useRef<HTMLDivElement>(null);
  const [quizFilterBoxHeight, setFiltersHeight] = useState<number>(110);

  // ----------  progressive disclosure ----------
  const showLevel = quizFilters.Where.value !== "";
  const showSource = quizFilters.Level.value !== "";
  const showBtn = quizFilters.Source.value !== "";

  useEffect(() => {
    if (!quizFilterBoxRef.current) return;
    if (showBtn) {
      setFiltersHeight(quizFilterBoxRef.current.scrollHeight + 24);
    } else {
      setFiltersHeight(quizFilterBoxRef.current.scrollHeight);
    }

    return () => setFiltersHeight(110);
  }, [quizFilters]);

  return { showLevel, showSource, showBtn, quizFilterBoxRef, quizFilterBoxHeight };
};
