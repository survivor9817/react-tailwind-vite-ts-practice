import { useState } from "react";
import type { UiReaction, UiReactionId } from "../data/reactionData";
import { reactionBtnData } from "../data/reactionData";

export const useReactionBtns = () => {
  const [btnsMeta, setBtnsMeta] = useState(reactionBtnData);

  const turnOffAllBtns = () => setBtnsMeta((prev) => prev.map((btn) => ({ ...btn, isOn: false })));

  const setBtnOnClick = (id: UiReactionId, newState: boolean) =>
    setBtnsMeta((prev) =>
      prev.map((item) => {
        if (item.id === id) return { ...item, isOn: newState };
        const clickedOnCorrect = id === "isCorrect" && item.id === "isIncorrect";
        const clickedOnIncorrect = id === "isIncorrect" && item.id === "isCorrect";
        if (clickedOnCorrect || clickedOnIncorrect) return { ...item, isOn: false };
        return item;
      }),
    );

  const applyReactionsOnUI = (
    state: UiReaction = {
      isCorrect: false,
      isIncorrect: false,
      isLike: false,
      isStar: false,
      isReport: false,
    },
  ) => {
    setBtnsMeta((prev) => prev.map((btn) => ({ ...btn, isOn: state[btn.id] })));
  };

  return {
    btnsMeta,
    setBtnOnClick,
    turnOffAllBtns,
    applyReactionsOnUI,
  };
};
