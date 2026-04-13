import { useEffect, useState } from "react";
import useToggle from "./useToggle";

export const useQuizAnswer = (descriptiveAnswer: string, currentQuestionIndex: number) => {
  const [answerContent, setAnswerContent] = useState(descriptiveAnswer);
  const [isAnswerVisible, toggleAnswer, , hideAnswer] = useToggle();

  useEffect(() => {
    hideAnswer();

    const timerId = setTimeout(() => setAnswerContent(descriptiveAnswer), 700);

    return () => clearTimeout(timerId);
  }, [currentQuestionIndex]);

  return { answerContent, isAnswerVisible, toggleAnswer };
};
