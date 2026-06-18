import { useEffect } from "react";
import type { UiReaction, UiReactionId } from "../data/reactionData";
import { useReactionBtns } from "./useReactionBtns";
import { useReactionMsgs } from "./useReactionMsgs";
import { postQuizReaction } from "../services/postQuizReaction";

export const useQuizReactions = (
  quizId: string,
  currentQuestionID: string,
  userId: string,
  uiReaction: UiReaction | undefined,
) => {
  const { btnsMeta, setBtnOnClick, turnOffAllBtns, applyReactionsOnUI } = useReactionBtns();
  const { msgsMeta, setMsgOnClick } = useReactionMsgs();
  // const {} = usePostReactions();

  useEffect(() => {
    const timerId = setTimeout(() => {
      turnOffAllBtns();
      applyReactionsOnUI(uiReaction);
    }, 700);

    return () => clearTimeout(timerId);
  }, [currentQuestionID]);

  const onClickOnReactionBtn = (reactionId: UiReactionId) => {
    // optimistic save
    postQuizReaction(quizId, userId, currentQuestionID, reactionId);

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
