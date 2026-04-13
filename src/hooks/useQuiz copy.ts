import { useQuizData } from "./useQuizData";
import { useQuizFilters } from "./useQuizFilters";
import useToggle from "./useToggle";

export const useQuiz = () => {
  const { quizFilters, clearFilters, onFilterChange } = useQuizFilters();

  const {
    questionIds,
    question,
    loading,
    // idsError,
    questionError,
    error,
    loadIds,
    loadQuestion,
    clearQuiz,
  } = useQuizData();

  const [isQuizStarted, , showQuizView, showFilterView] = useToggle();
  const [endConfirm, , openEndConfirm, closeEndConfirm] = useToggle();
  const [resultsModal, , openResultsModal, closeResultsModal] = useToggle();

  const resetQuiz = () => {
    clearFilters();
    showFilterView();
    clearQuiz();
  };

  const startQuiz = async () => {
    try {
      const ids = await loadIds(/** user quiz filters???? */);
      if (!ids?.length) return;
      await loadQuestion(ids[0]);
      showQuizView();
    } catch (error) {
      console.log(error);
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
    // useQuizFilters
    quizFilters,
    clearFilters,
    onFilterChange,

    // useQuizData
    questionIds,
    question,
    loading,
    // idsError,
    questionError,
    error,
    loadIds,
    loadQuestion,
    clearQuiz,

    // useQuiz
    isQuizStarted,
    endConfirm,
    openEndConfirm,
    resultsModal,
    startQuiz,
    submitQuiz,
    terminateQuiz,
  };
};
