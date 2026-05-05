import type { SelectInstance } from "react-select";
import { useStudyPageLayoutContext } from "../components/StudyPageLayoutProvider";
import type { FilterOption } from "../data/quizFilterOptionsData";
import { useEffect, useRef } from "react";

export const useFocusOnLastFilter = () => {
  const { activeTab } = useStudyPageLayoutContext();
  const filterSelectRef = useRef<SelectInstance<FilterOption, false>>(null);

  // timeout
  const timeoutRef = useRef<number | null>(null);
  const clearPrevMsgTimeout = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearPrevMsgTimeout();
    };
  }, []);

  const focusOnSelector = () => {
    timeoutRef.current = setTimeout(() => filterSelectRef.current?.focus(), 420);
  };

  useEffect(() => {
    if (activeTab === 1) focusOnSelector();
    return () => {
      clearPrevMsgTimeout();
    };
    // manteghe in effect mitoone be hooke modiriat konande vaaled
    // montaghel beshe. inja baa har baar taghire activeTab hame
    // filterhaa focus mishan va focus rooye akhari baaghi mimoone. ke
    // hamoon chizie ke maa mikhaym, pas dast nemizanim behesh felan.
  }, [activeTab]);
  return { filterSelectRef };
};
