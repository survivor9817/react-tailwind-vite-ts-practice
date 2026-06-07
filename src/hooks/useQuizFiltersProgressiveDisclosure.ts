import { useLayoutEffect, useEffect, useRef, useState } from "react";
import type { QuizFiltersType } from "./useQuizFilters";

export const useQuizFiltersProgressiveDisclosure = (quizFilters: QuizFiltersType) => {
  const quizFilterBoxRef = useRef<HTMLDivElement>(null);
  const [quizFilterBoxHeight, setFiltersHeight] = useState<number>(110);

  const showLevel = quizFilters.Where.value !== "";
  const showSource = quizFilters.Level.value !== "";
  const showBtn = quizFilters.Source.value !== "";

  useEffect(() => {
    setFiltersHeight(110);
  }, [quizFilters.BookId]); // book id ro az contextesh bardari ke behtare ke daaghaan

  useLayoutEffect(() => {
    const el = quizFilterBoxRef.current;
    if (el) setFiltersHeight(el.scrollHeight + (showBtn ? 24 : 0));
  }, [showLevel, showSource, showBtn]);

  // // ✅ جایگزین useLayoutEffect
  // useEffect(() => {
  //   const el = quizFilterBoxRef.current;
  //   if (!el) return;

  //   const measureHeight = () => {
  //     setFiltersHeight(el.scrollHeight + (showBtn ? 24 : 0));
  //   };

  //   // اول بارگذاری
  //   // measureHeight();

  //   // برای مطمئن شدن از رندر کامل
  //   requestAnimationFrame(measureHeight);
  // }, [showLevel, showSource, showBtn]);

  return {
    showLevel,
    showSource,
    showBtn,
    quizFilterBoxRef,
    quizFilterBoxHeight,
  };
};
