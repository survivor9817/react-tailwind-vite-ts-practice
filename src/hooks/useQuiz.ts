import { useState } from "react";
import { useQuestionData } from "./useQuestionData";
import { useQuestionIdsData } from "./useQuestionIdsData";
import { useQuizFilters } from "./useQuizFilters";
import useToggle from "./useToggle";

export const useQuiz = () => {
  const { quizFilters, clearFilters, onChangeFilterSelect } = useQuizFilters();
  const { questionIds, questionIdsLoading, loadQuestionIds, setQuestionIds } = useQuestionIdsData();
  const { question, questionLoading, loadQuestion, setQuestion } = useQuestionData();
  const startQuizLoading = questionIdsLoading || questionLoading;
  const [isQuizStarted, , showQuizView, showFilterView] = useToggle(/** from local? */);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const isFirstQuestion = currentQuestionIndex === 0;
  const lastQuestionIndex = questionIds ? questionIds.length - 1 : 0;
  const isLastQuestion = currentQuestionIndex === lastQuestionIndex;
  const [nextLoading, setNextLoading] = useState(false);
  const [prevLoading, setPrevLoading] = useState(false);
  const [endConfirmModal, , openEndConfirm, closeEndConfirm] = useToggle();
  const [resultsModal, , openResultsModal, closeResultsModal] = useToggle();

  const clearQuiz = () => {
    setQuestionIds(null);
    setQuestion(null);
  };

  const resetQuiz = () => {
    clearFilters();
    showFilterView();
    clearQuiz();
    setCurrentQuestionIndex(0);
  };

  const startQuiz = async () => {
    try {
      const ids = await loadQuestionIds(/** user quiz filters or quiz id ???? */);
      // khate baalaa ke error beshe ke hichi mipare toye kach vali khate paeen agar error
      // beshe tooye darkhaaste baalaaee yani yek quiz saakhte shode. ino ye karish bokon.
      await loadQuestion(ids[0] /** zero or maybe last index? */);
      showQuizView();
    } catch (err) {
      console.log(err);
    }
  };

  // const reviewQuiz = (quizId) => {}

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

  const goToPrevQuestion = async () => {
    if (isFirstQuestion) {
      return;
    }

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

  const submitQuiz = () => {
    closeEndConfirm();
    openResultsModal();
  };

  const terminateQuiz = () => {
    closeResultsModal();
    resetQuiz();
  };

  return {
    quizFilters,
    onChangeFilterSelect,
    isQuizStarted,
    currentQuestionIndex,
    startQuiz,
    startQuizLoading,
    questionIds,
    lastQuestionIndex,
    loadQuestion,
    question,
    isFirstQuestion,
    isLastQuestion,
    prevLoading,
    goToPrevQuestion,
    nextLoading,
    goToNextQuestion,
    openEndConfirm,
    endConfirmModal,
    submitQuiz,
    closeEndConfirm,
    resultsModal,
    terminateQuiz,
    closeResultsModal,

    // fetch quiz data errors handles by toast not by ui conditional statements.
    // questionIdsError,
    // questionError,
  };
};
