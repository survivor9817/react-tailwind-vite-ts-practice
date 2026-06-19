import { useQuiz } from "../hooks/useQuiz";
import FilterView from "./FilterView";
import QuizView from "./QuizView";
import QuizReview from "./QuizReview";

const Quiz = () => {
  const {
    reviewQuiz,
    quizFilters,
    onChangeFilterSelect,
    isQuizStarted,
    currentQuestionIndex,
    startQuiz,
    startQuizLoading,
    quiz,
    lastQuestionIndex,
    // loadQuestion,
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

    // we have toast on errors
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

          <QuizReview reviewQuiz={reviewQuiz} startQuizLoading={startQuizLoading} />
        </div>
      ) : (
        quiz &&
        question && (
          <QuizView
            quiz={quiz}
            questionData={question}
            currentQuestionIndex={currentQuestionIndex}
            lastQuestionIndex={lastQuestionIndex}
            isFirstQuestion={isOnFirstQuestion}
            isLastQuestion={isOnLastQuestion}
            prevLoading={prevLoading}
            goToPrevQuestion={goToPrevQuestion}
            nextLoading={nextLoading}
            goToNextQuestion={goToNextQuestion}
            endConfirmModal={endConfirmModal}
            openEndConfirm={openEndConfirm}
            submitQuiz={submitQuiz}
            closeEndConfirm={closeEndConfirm}
            resultsModal={resultsModal}
            terminateQuiz={terminateQuiz}
            closeResultsModal={closeResultsModal}
          />
        )
      )}
    </>
  );
};

export default Quiz;
