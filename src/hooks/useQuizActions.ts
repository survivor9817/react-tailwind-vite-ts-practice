import useToggle from "./useToggle";

export const useQuizActions = (
  clearFilters: () => void,
  clearQuiz: () => void,
  loadIds: () => Promise<string[]>,
  loadQuestion: (currentId: string) => Promise<void>,
) => {
  const [isQuizStarted, , showQuizView, showFilterView] = useToggle();
  const [endConfirmModal, , openEndConfirm, closeEndConfirm] = useToggle();
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
    isQuizStarted,
    endConfirmModal,
    resultsModal,
    startQuiz,
    openEndConfirm,
    submitQuiz,
    closeEndConfirm,
    terminateQuiz,
    closeResultsModal,
  };
};
