import { useQuestionData } from "./useQuestionData";
import { useQuestionIdsData } from "./useQuestionIdsData";
import { useQuizFilters } from "./useQuizFilters";
import useToggle from "./useToggle";

export const useQuiz = () => {
  const { quizFilters, clearFilters, onChangeFilterSelect: onFilterChange } = useQuizFilters();

  const { questionIds, questionIdsLoading, questionIdsError, loadQuestionIds, setQuestionIds } =
    useQuestionIdsData();

  const { question, questionLoading, questionError, loadQuestion, setQuestion } = useQuestionData();

  const startQuizLoading = questionIdsLoading || questionLoading;

  const clearQuiz = () => {
    setQuestionIds(null);
    setQuestion(null);
  };

  // useQuizActions
  const [isQuizStarted, , showQuizView, showFilterView] = useToggle();
  const [endConfirmModal, , openEndConfirm, closeEndConfirm] = useToggle();
  const [resultsModal, , openResultsModal, closeResultsModal] = useToggle();

  const resetQuiz = () => {
    clearFilters();
    showFilterView();
    clearQuiz();
  };

  const startQuiz = async (/** agar id quiz pass dade shode hamona 
    ro biar agar na filter bezan load kon. yaa shayad behtar baashe 
    ye taabe dg benevisam vase oon*/) => {
    try {
      const ids = await loadQuestionIds(/** user quiz filters or quiz id ???? */);
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
    quizFilters,
    onFilterChange,
    isQuizStarted,
    startQuiz,
    startQuizLoading,
    questionIds,
    loadQuestion,
    question,
    endConfirmModal,
    openEndConfirm,
    submitQuiz,
    closeEndConfirm,
    resultsModal,
    terminateQuiz,
    closeResultsModal,

    questionIdsError,
    questionError,
  };
};
