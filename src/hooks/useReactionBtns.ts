import { useEffect, useRef, useState } from "react";
import type {
  ReactionBtnType,
  ReactionMsgType,
  UiReaction,
  UiReactionId,
} from "../data/reactionData";
import { saveReactionToDB } from "../data/questionsData";
import type { DbReaction, DbReactionId } from "../data/questionsData";
import { reactionBtnData, reactionMsgData } from "../data/reactionData";

export const useReactionBtns = (
  currentQuestionID: string,
  userId: string,
  uiReaction: UiReaction | undefined,
) => {
  const [btnsMeta, setBtnsMeta] = useState(reactionBtnData);
  const [msgsMeta, setMsgsMeta] = useState(reactionMsgData);

  const turnOffAllBtns = () => setBtnsMeta((prev) => prev.map((btn) => ({ ...btn, isOn: false })));
  const turnOffAllMsgs = () => setMsgsMeta((prev) => prev.map((msg) => ({ ...msg, isOn: false })));

  useEffect(() => turnOffAllMsgs(), [currentQuestionID]);

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

  useEffect(() => {
    const timerId = setTimeout(() => {
      turnOffAllBtns();
      applyReactionsOnUI(uiReaction);
    }, 700);

    return () => clearTimeout(timerId);
  }, [currentQuestionID]);

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

  const setter = (
    prev: ReactionBtnType[] | ReactionMsgType[],
    id: UiReactionId,
    newState: boolean,
  ) => {
    return prev.map((item) => {
      if (item.id === id) return { ...item, isOn: newState };
      const clickedOnCorrect = id === "isCorrect" && item.id === "isIncorrect";
      const clickedOnIncorrect = id === "isIncorrect" && item.id === "isCorrect";
      if (clickedOnCorrect || clickedOnIncorrect) return { ...item, isOn: false };
      return item;
    });
  };

  const setBtn = (id: UiReactionId, newState: boolean) =>
    setBtnsMeta((prev) => setter(prev, id, newState) as ReactionBtnType[]);

  const setMsg = (id: UiReactionId, newState: boolean) =>
    setMsgsMeta((prev) => setter(prev, id, newState) as ReactionMsgType[]);

  // timeout
  const prevMsgTimeoutRef = useRef<number | null>(null);
  const clearPrevMsgTimeout = () => {
    if (prevMsgTimeoutRef.current !== null) {
      clearTimeout(prevMsgTimeoutRef.current);
      prevMsgTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => clearPrevMsgTimeout();
  }, []);

  const updateReactionOnClick = (reactionId: UiReactionId) => {
    // optimistic save
    const submittedReaction = createDbReactionOnClickOnBtn(userId, currentQuestionID, reactionId);
    saveReactionToDB(submittedReaction);

    const isClickedBtnOn = btnsMeta.find((item) => item.id === reactionId)?.isOn;
    const isClickedMsgOn = msgsMeta.find((item) => item.id === reactionId)?.isOn;
    const isOtherMsgOn = msgsMeta.some((item) => item.id !== reactionId && item.isOn);
    const otherOnMsgID = isOtherMsgOn && msgsMeta.find((item) => item.isOn)?.id;
    // const noMsgsOn = !msgsMeta.some((item) => item.isOn);

    if (isClickedBtnOn) {
      setBtn(reactionId, false);
    }

    if (isClickedBtnOn && isClickedMsgOn) {
      setBtn(reactionId, false);
      clearPrevMsgTimeout();
      setMsg(reactionId, false);
    }

    if (!isClickedBtnOn && !isOtherMsgOn) {
      setBtn(reactionId, true);
      setMsg(reactionId, true);
      prevMsgTimeoutRef.current = setTimeout(() => {
        setMsg(reactionId, false);
      }, 1500);
    }

    if (!isClickedBtnOn && isOtherMsgOn) {
      setBtn(reactionId, true);
      if (!otherOnMsgID) return;
      setMsg(otherOnMsgID, false);
      clearPrevMsgTimeout();
      setMsg(reactionId, true);
      prevMsgTimeoutRef.current = setTimeout(() => {
        setMsg(reactionId, false);
      }, 1500);
    }
  };

  return {
    btnsMeta,
    msgsMeta,
    updateReactionOnClick,
  };
};
