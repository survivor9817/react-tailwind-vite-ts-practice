import { useEffect } from "react";
import type { UiReaction, UiReactionId } from "../data/reactionData";
import { useReactionBtns } from "./useReactionBtns";
import { useReactionMsgs } from "./useReactionMsgs";
import { saveReaction } from "../services/saveReaction";

export const useQuizReactions = (
  currentQuestionID: string,
  userId: string,
  uiReaction: UiReaction | undefined,
) => {
  const { btnsMeta, setBtnOnClick, turnOffAllBtns, applyReactionsOnUI } = useReactionBtns();
  const { msgsMeta, setMsgOnClick } = useReactionMsgs();

  useEffect(() => {
    const timerId = setTimeout(() => {
      turnOffAllBtns();
      applyReactionsOnUI(uiReaction);
    }, 700);

    return () => clearTimeout(timerId);
  }, [currentQuestionID]);

  const onClickOnReactionBtn = (reactionId: UiReactionId) => {
    // optimistic save
    saveReaction(userId, currentQuestionID, reactionId);

    const isClickedBtnOn = btnsMeta.find((item) => item.id === reactionId)?.isOn;
    setBtnOnClick(reactionId, !isClickedBtnOn);
    setMsgOnClick(reactionId, !!isClickedBtnOn);
  };

  return {
    btnsMeta,
    msgsMeta,
    onClickOnReactionBtn,
  };
};
