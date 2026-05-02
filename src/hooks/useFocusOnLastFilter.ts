import type { SelectInstance } from "react-select";
import { useStudyPageLayoutContext } from "../components/StudyPageLayoutProvider";
import type { FilterOption } from "../data/quizFilterOptionsData";
import { useEffect, useRef } from "react";

export const useFocusOnLastFilter = () => {
  const { activeTab } = useStudyPageLayoutContext();
  const selectRef = useRef<SelectInstance<FilterOption, false>>(null);
  const focusOnSelector = () => setTimeout(() => selectRef.current?.focus(), 420);
  // const focusOnSelector = () => selectRef.current?.focus();
  useEffect(() => {
    if (activeTab === 1) focusOnSelector();
    // manteghe in effect mitoone be hooke modiriat konande vaaled
    // montaghel beshe. inja baa har baar taghire activeTab hame
    // filterhaa focus mishan va focus rooye akhari baaghi mimoone. ke
    // hamoon chizie ke maa mikhaym, pas dast nemizanim behesh felan.
  }, [activeTab]);
  return { selectRef };
};
