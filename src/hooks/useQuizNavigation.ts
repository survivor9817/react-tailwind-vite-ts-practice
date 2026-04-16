import { useState } from "react";

export const useQuizNavigation = (
  questionIds: string[],
  loadQuestion: (currentId: string) => Promise<void>,
  openEndConfirm: () => void,
) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [nextLoading, setNextLoading] = useState(false);
  const [prevLoading, setPrevLoading] = useState(false);

  // mitoonim loading har kodaam ro be onvaane disable digari paas bedim.
  // yaa shayd behtar baashe loading har kodaam disable hame baashe

  const goToQuestion = async (number: number) => {
    if (number < 0 || isNaN(number) || !questionIds || number >= questionIds.length) {
      return;
    }

    // loadQuestion(questionIds[number])
    //   .then(() => setCurrentQuestionIndex(number))
    //   .catch((err) => console.log(err));

    try {
      await loadQuestion(questionIds[number]);
      setCurrentQuestionIndex(number);
    } catch (error) {
      console.error("Error loading question:", error);
    }
  };

  const isFirstQuestion = currentQuestionIndex === 0;
  const lastQuestionIndex = questionIds.length - 1;
  const isLastQuestion = currentQuestionIndex === lastQuestionIndex;

  const goToPrevQuestion = async () => {
    if (isFirstQuestion) return;

    setPrevLoading(true);

    // goToQuestion(currentQuestionIndex - 1)
    //   .catch((err) => console.log(err))
    //   .finally(() => setPrevLoading(false));

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

    // goToQuestion(currentQuestionIndex - 1)
    //   .catch((err) => console.log(err))
    //   .finally(() => setNextLoading(false));

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
