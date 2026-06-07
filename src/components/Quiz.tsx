import { useQuiz } from "../hooks/useQuiz";
import FilterView from "./FilterView";
import QuizView from "./QuizView";
import QuizResultsModal from "./QuizResultsModal";
import QuizEndConfirm from "./QuizEndConfirm";
import QuizReview from "./QuizReview";

const Quiz = () => {
  const {
    // startReview,
    quizFilters,
    onChangeFilterSelect,
    isQuizStarted,
    currentQuestionIndex,
    startQuiz,
    startQuizLoading,
    questionIds,
    lastQuestionIndex,
    // loadQuestion,
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

    // we have toast on error
    // questionIdsError,
    // questionError,
  } = useQuiz();

  return (
    <>
      {!isQuizStarted ? (
        <div className="flex flex-col justify-center gap-18 p-2">
          <FilterView
            quizFilters={quizFilters}
            onChangeFilterSelect={onChangeFilterSelect}
            startQuizLoading={startQuizLoading}
            startQuiz={startQuiz}
          />
          <QuizReview
          // reviewQuiz={reviewQuiz}
          />
        </div>
      ) : (
        questionIds &&
        question && (
          <QuizView
            // cache the previous questions in an array
            questionData={question}
            openEndConfirm={openEndConfirm}
            currentQuestionIndex={currentQuestionIndex}
            lastQuestionIndex={lastQuestionIndex}
            isFirstQuestion={isFirstQuestion}
            isLastQuestion={isLastQuestion}
            prevLoading={prevLoading}
            goToPrevQuestion={goToPrevQuestion}
            nextLoading={nextLoading}
            goToNextQuestion={goToNextQuestion}
          />
        )
      )}

      {endConfirmModal && (
        <QuizEndConfirm
          onAction={submitQuiz}
          // endLoading={endLoading}
          onClose={closeEndConfirm}
        />
      )}

      {resultsModal && questionIds && (
        <QuizResultsModal
          questionIds={questionIds}
          onAction={terminateQuiz}
          onClose={closeResultsModal}
        />
      )}

      {/* saakhte bakhshe moroor tamrin haaye ghabli */}
      {/* saakhte modaale infoye yek tamrin ghabli */}
    </>
  );
};

export default Quiz;
