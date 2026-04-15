import { useQuiz } from "../hooks/useQuiz";
import FilterView from "./FilterView";
import QuizView from "./QuizView";
import QuizResultsModal from "./QuizResultsModal";
import QuizEndConfirm from "./QuizEndConfirm";

const Quiz = () => {
  const {
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

    // questionIdsError,
    // questionError,
  } = useQuiz();

  return (
    <>
      {!isQuizStarted ? (
        <FilterView
          quizFilters={quizFilters}
          onFilterChange={onFilterChange}
          startQuizLoading={startQuizLoading}
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

      {/* saakhte bakhshe moroor tamrin haaye ghabli */}
      {/* moddat, rooze hafte, tarikh, saat shoro, */}
    </>
  );
};

export default Quiz;
