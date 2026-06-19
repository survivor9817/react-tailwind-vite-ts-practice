import { useState } from "react";
import { useQuestionData } from "./useQuestionData";
import { useQuizData } from "./useQuizData";
import { useQuizFilters } from "./useQuizFilters";
import useToggle from "./useToggle";

export const useQuiz = () => {
  const { quizFilters, clearFilters, onChangeFilterSelect } = useQuizFilters();
  const { quiz, quizLoading, loadNewQuiz, loadExistingQuiz, setQuiz } = useQuizData();
  const { question, questionLoading, loadQuestion, setQuestion } = useQuestionData();
  const startQuizLoading = quizLoading || questionLoading;
  const [isQuizStarted, , showQuizView, showFilterView] = useToggle(/** from local? */);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const isOnFirstQuestion = currentQuestionIndex === 0;
  const lastQuestionIndex = quiz ? quiz.questionIds.length - 1 : 0; // quiz.questionsCount
  const isOnLastQuestion = currentQuestionIndex === lastQuestionIndex;
  const [nextLoading, setNextLoading] = useState(false);
  const [prevLoading, setPrevLoading] = useState(false);
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

  const startQuiz = async () => {
    try {
      // yek req bokonesh reza
      const quiz = await loadNewQuiz(quizFilters); // ino baas ye kari koni question aval ro ham befreste dg.
      // khate baalaa ke error beshe ke hichi mipare toye kach vali khate paeen agar error
      // beshe tooye darkhaaste baalaaee yani yek quiz saakhte shode. ino ye karish bokon.
      await loadQuestion(quiz.questionIds[0], quiz.quizId);
      showQuizView();
    } catch (err) {
      console.log(err);
    }
  };

  const reviewQuiz = async (quizId: string) => {
    console.log("rev");
    try {
      const quiz = await loadExistingQuiz(quizId);
      // khate baalaa ke error beshe ke hichi mipare toye kach vali khate paeen agar error
      // beshe tooye darkhaaste baalaaee yani yek quiz saakhte shode. ino ye karish bokon.
      await loadQuestion(quiz.questionIds[0], quiz.quizId /** zero or maybe last index? */);
      showQuizView();
    } catch (err) {
      console.log(err);
    }
  };

  const goToQuestion = async (index: number) => {
    if (!quiz || !quiz.questionIds.length) return; // mitooni toast bezaari ke erroro neshoone user bedi
    if (Number.isInteger(index) && index >= 0 && index < quiz.questionIds.length) {
      try {
        await loadQuestion(quiz.questionIds[index], quiz.quizId);
        setCurrentQuestionIndex(index);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const goToPrevQuestion = async () => {
    if (isOnFirstQuestion) {
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
    if (isOnLastQuestion) {
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
    // disable answer buttons. ()
  };

  const terminateQuiz = () => {
    closeResultsModal();
    resetQuiz();
  };

  return {
    reviewQuiz,
    quizFilters,
    onChangeFilterSelect,
    isQuizStarted,
    currentQuestionIndex,
    startQuiz,
    startQuizLoading,
    quiz,
    lastQuestionIndex,
    loadQuestion,
    question,
    isOnFirstQuestion,
    isOnLastQuestion,
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
