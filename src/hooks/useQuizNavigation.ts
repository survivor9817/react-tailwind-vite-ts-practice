import { useState } from "react";

export const useQuizNavigation = (
  questionIds: string[] | null,
  loadQuestion: (currentId: string) => Promise<void>,
  openEndConfirm: () => void,
) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [nextLoading, setNextLoading] = useState(false);
  const [prevLoading, setPrevLoading] = useState(false);

  // mitoonim loading har kodaam ro be onvaane disable digari paas bedim.
  // yaa shayd behtar baashe loading har kodaam disable hame baashe

  const goToQuestion = async (index: number) => {
    if (!questionIds || !questionIds.length) return; // mitooni toast bezaari ke erroro neshoone user bedi
    if (Number.isInteger(index) && index >= 0 && index < questionIds.length) {
      try {
        await loadQuestion(questionIds[index]);
        setCurrentQuestionIndex(index);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const isFirstQuestion = currentQuestionIndex === 0;
  const lastQuestionIndex = questionIds ? questionIds.length - 1 : 0;
  const isLastQuestion = currentQuestionIndex === lastQuestionIndex;

  const goToPrevQuestion = async () => {
    if (isFirstQuestion) return;

    setPrevLoading(true);
    try {
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

    setNextLoading(true);
    try {
      await goToQuestion(currentQuestionIndex + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setNextLoading(false);
    }
  };

  return {
    currentQuestionIndex,
    lastQuestionIndex,

    prevLoading,
    goToPrevQuestion,
    nextLoading,
    goToNextQuestion,

    isFirstQuestion,
    isLastQuestion,
  };
};
