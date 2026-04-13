import { useQuizFilters } from "../hooks/useQuizFilters";
import { useQuizData } from "../hooks/useQuizData";
import { useQuizActions } from "../hooks/useQuizActions";
import FilterView from "./FilterView";
import QuizView from "./QuizView";
import QuizResultsModal from "./QuizResultsModal";
import QuizEndConfirm from "./QuizEndConfirm";

const Quiz = () => {
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

  const {
    isQuizStarted,
    endConfirmModal,
    resultsModal,
    startQuiz,
    openEndConfirm,
    submitQuiz,
    closeEndConfirm,
    terminateQuiz,
    closeResultsModal,
  } = useQuizActions(clearFilters, clearQuiz, loadIds, loadQuestion);

  return (
    <>
      {!isQuizStarted ? (
        <FilterView
          quizFilters={quizFilters}
          onFilterChange={onFilterChange}
          loading={loading}
          startQuiz={startQuiz}
        />
      ) : (
        questionIds &&
        question && (
          <QuizView
            questionIds={questionIds}
            // cache the previous questions in an array
            questionData={question}
            loadQuestion={loadQuestion}
            openEndConfirm={openEndConfirm}
          />
        )
      )}

      {endConfirmModal && <QuizEndConfirm onAction={submitQuiz} onClose={closeEndConfirm} />}

      {resultsModal && questionIds && (
        <QuizResultsModal
          questionIds={questionIds}
          onAction={terminateQuiz}
          onClose={closeResultsModal}
        />
      )}

      {/* creating session and fetch ids error toast */}

      {/* loading error toast */}
    </>
  );
};

export default Quiz;
