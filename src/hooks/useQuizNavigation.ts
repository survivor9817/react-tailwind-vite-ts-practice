import { useState } from "react";

export const useQuizNavigation = (
  startIndex: number,
  lastQuestionIndex: number,
  setShowEndConfirm: (show: boolean) => void,
) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(startIndex);

  const goToQuestion = (number: number) => {
    if (number < 0 || isNaN(number) || number > lastQuestionIndex) return;
    setCurrentQuestionIndex(number);
  };

  const goToPrevQuestion = () => {
    const newQuestionIndex = Math.max(0, currentQuestionIndex - 1);
    goToQuestion(newQuestionIndex);
  };

  const goToNextQuestion = () => {
    const isLastQuestion = currentQuestionIndex === lastQuestionIndex;
    if (isLastQuestion) {
      setShowEndConfirm(true);
      return;
    }
    const newQuestionIndex = Math.min(lastQuestionIndex, currentQuestionIndex + 1);
    goToQuestion(newQuestionIndex);
  };

  //   const isFirstQuestion = currentQuestionIndex === 0;

  return {
    currentQuestionIndex,
    // goToQuestion,
    goToPrevQuestion,
    goToNextQuestion,
  };
};
