import { useEffect } from "react";
import { type DbReactionId, type DbReaction, saveReactionToDB } from "../data/questionsData";
import type { UiReaction, UiReactionId } from "../data/reactionData";
import { useReactionBtns } from "./useReactionBtns";
import { useReactionMsgs } from "./useReactionMsgs";

export const useQuizReactions = (
  currentQuestionID: string,
  userId: string,
  uiReaction: UiReaction | undefined,
) => {
  const createDbReactionOnClickOnBtn = (
    userId: string,
    currentQuestionID: string,
    reactionId: DbReactionId,
  ): DbReaction => {
    const isAnswer = reactionId === "isCorrect" || reactionId === "isIncorrect";

    return {
      userId: userId,
      questionId: currentQuestionID,
      reactionId: reactionId,
      reactionType: isAnswer ? "answer" : "feedback",
      createdAt: new Date().toISOString(),
    };
  };

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
    const submittedReaction = createDbReactionOnClickOnBtn(userId, currentQuestionID, reactionId);
    saveReactionToDB(submittedReaction);

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
