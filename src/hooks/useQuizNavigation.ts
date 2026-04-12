// useQuizNavigation.ts
import { useState } from "react";

// import { useQuizData } from "./useQuizData";

export const useQuizNavigation = (
  questionIds: string[],
  loadQuestion: (currentId: string) => Promise<void>,
  openEndConfirm: () => void,
) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [nextLoading, setNextLoading] = useState(false);
  const [prevLoading, setPrevLoading] = useState(false);

  const goToQuestion = async (number: number) => {
    if (number < 0 || isNaN(number) || !questionIds || number >= questionIds.length) {
      return;
    }

    try {
      await loadQuestion(questionIds[number]);
      setCurrentQuestionIndex(number);
    } catch (error) {
      console.error("Error loading question:", error);
    }
  };

  // in dota mitoonan export beshan taa state dokme haaye ghabli va badi taeen beshe
  // vali khob niazi ham nist, oudake!
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = questionIds ? currentQuestionIndex === questionIds.length - 1 : false;

  const goToPrevQuestion = async () => {
    if (isFirstQuestion) {
      return;
    }

    try {
      setPrevLoading(true);
      await goToQuestion(currentQuestionIndex - 1);
    } catch (error) {
      console.log(error);
    } finally {
      setPrevLoading(false);
    }
  };

  const goToNextQuestion = async () => {
    if (isLastQuestion) {
      openEndConfirm();
      return;
    }

    try {
      setNextLoading(true);
      await goToQuestion(currentQuestionIndex + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setNextLoading(false);
    }
  };

  return {
    currentQuestionIndex,
    prevLoading,
    goToPrevQuestion,
    nextLoading,
    goToNextQuestion,
  };
};
