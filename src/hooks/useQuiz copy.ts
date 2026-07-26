import { useState } from "react";
import { useQuestionData } from "./useQuestionData";
import { useQuizData } from "./useQuizData";
import { useQuizFilters } from "./useQuizFilters";
import useToggle from "./useToggle";
import type { QuizSession } from "./useQuizSessionsData";

export const useQuiz = () => {
  const { quizFilters, clearFilters, onChangeFilterSelect } = useQuizFilters();
  const { quiz, quizLoading, loadNewQuiz, loadExistingQuiz, setQuiz } = useQuizData();
  const { question, questionLoading, questionError, loadQuestion, setQuestion } = useQuestionData();
  const startQuizLoading = quizLoading || questionLoading;
  const [isQuizStarted, , showQuizView, showFilterView] = useToggle(/** from local? */);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const isOnFirstQuestion = currentQuestionIndex === 0;
  const lastQuestionIndex = quiz ? quiz.questionIds.length - 1 : 0; // quiz.questionsCount
  const isOnLastQuestion = currentQuestionIndex === lastQuestionIndex;
  const [endConfirmModal, , openEndConfirm, closeEndConfirm] = useToggle();
  const [resultsModal, , openResultsModal, closeResultsModal] = useToggle();

  const clearQuiz = () => {
    setQuiz(null);
    setQuestion(null);
  };

  const resetQuiz = () => {
    clearFilters();
    showFilterView();
    clearQuiz();
    setCurrentQuestionIndex(0);
  };

  const enterQuiz = async (quiz: QuizSession, startIndex = 0) => {
    const { questionIds, quizId } = quiz;
    await loadQuestion(questionIds[startIndex], quizId);
    showQuizView();
  };

  const runQuiz = async (getQuiz: () => Promise<QuizSession>, startIndex = 0) => {
    return getQuiz()
      .then((quiz) => enterQuiz(quiz, startIndex))
      .catch((err) => {
        setQuiz(null);
        console.log(err); // or any rollback strategy
      });
  };

  const startQuiz = () => {
    return runQuiz(() => {
      return loadNewQuiz(quizFilters);
    });
  };

  const reviewQuiz = (quizId: string) => {
    return runQuiz(() => {
      return loadExistingQuiz(quizId);
    });
  };

  const isInRange = (num: number, min: number, max: number) => {
    return Number.isInteger(num) && num >= min && num <= max;
  };

  const goToQuestion = (index: number) => {
    if (!quiz || !quiz.questionIds.length) return;
    const min = 0;
    const max = quiz.questionIds.length - 1; // or use questionCount
    if (isInRange(index, min, max)) {
      setCurrentQuestionIndex(index);
    }
  };

  const goToPrevQuestion = async () => {
    goToQuestion(currentQuestionIndex - 1);
  };

  const goToNextQuestion = async () => {
    if (isOnLastQuestion) {
      openEndConfirm();
      return;
    }

    goToQuestion(currentQuestionIndex + 1);
  };

  const submitQuiz = () => {
    closeEndConfirm();
    openResultsModal();
    // disable answer buttons. ()
  };

  const terminateQuiz = () => {
    closeResultsModal();
    resetQuiz();
  };

  return {
    filters: { quizFilters, clearFilters, onChangeFilterSelect },
    quiz: {
      isQuizStarted,
      quiz,
      startQuizLoading,
      startQuiz,
      reviewQuiz,
      submitQuiz,
      terminateQuiz,
    },
    question: { question, questionLoading, questionError },
    navigation: {
      currentQuestionIndex,
      isOnFirstQuestion,
      isOnLastQuestion,
      goToQuestion,
      goToPrevQuestion,
      goToNextQuestion,
    },
    modals: {
      endConfirmModal,
      resultsModal,
      closeEndConfirm,
      openEndConfirm,
      closeResultsModal,
      openResultsModal,
    },
  };

  // return {
  //   reviewQuiz,
  //   quizFilters,
  //   onChangeFilterSelect,
  //   isQuizStarted,
  //   currentQuestionIndex,
  //   startQuiz,
  //   startQuizLoading,
  //   quiz,
  //   questionsCount,
  //   loadQuestion,
  //   question,
  //   questionError,
  //   isOnFirstQuestion,
  //   isOnLastQuestion,
  //   goToPrevQuestion,
  //   goToNextQuestion,
  //   openEndConfirm,
  //   endConfirmModal,
  //   submitQuiz,
  //   closeEndConfirm,
  //   resultsModal,
  //   terminateQuiz,
  //   closeResultsModal,

  //   // fetch quiz data errors handles by toast not by ui conditional statements.
  //   // questionIdsError,
  //   // questionError,
  // };
};
