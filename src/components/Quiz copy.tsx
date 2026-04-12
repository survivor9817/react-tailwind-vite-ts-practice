// src/components/Quiz.tsx (نسخه نهایی)
import { useState, useContext } from "react";
import { BookContext } from "../Darsyavar";
import { useQuizFiltersProgressiveDisclosure } from "../hooks/useQuizFiltersProgressiveDisclosure";
import { useQuizData } from "../hooks/useQuizData";
import { useQuizFeedback } from "../hooks/useQuizFeedback";
import useToggle from "../hooks/useToggle";

// ... import کردن کامپوننت‌های UI

const Quiz = () => {
  const { currentBook } = useContext(BookContext);
  
  // ----------  فیلترها ----------
  const [quizFilters, setQuizFilters] = useState<QuizFiltersType>({...});
  
  // ----------  هوک جلسه کوییز ----------
  const {
    questionIDs,
    currentQuestion,
    currentIndex,
    totalQuestions,
    isLoading,
    startQuiz,
    goToNext,
    goToPrev,
  } = useQuizData(quizFilters);

  // ----------  فیدبک ----------
  const { submitFeedback } = useQuizFeedback(currentQuestion?.id);

  // ----------  UI State ----------
  const [isAnswerVisible, toggleAnswer] = useToggle();
  const [endConfirm, , openEndConfirm, closeEndConfirm] = useToggle();
  const [results, , openResults, closeResults] = useToggle();

  // ----------  Effects ----------
  // ریست کردن جواب باز هنگام تغییر سوال
  useEffect(() => {
    toggleAnswer(false);
  }, [currentIndex]);

  // ----------  Handlers ----------
  const handleStartQuiz = async () => {
    await startQuiz(); // صدا زدن API برای گرفتن آیدی‌ها
  };

  const handleEndQuiz = () => {
    closeEndConfirm();
    openResults();
  };

  // ----------  Render ----------
  if (!currentBook?.id) return <p>درخواست خطا شد.</p>;

  return (
    <div>
      {!questionIDs.length ? (
        // حالت فیلترها
        <FilterView 
          filters={quizFilters} 
          onChange={setQuizFilters} 
          onStart={handleStartQuiz}
          isLoading={isLoading}
        />
      ) : (
        // حالت کوییز
        <QuizView
          question={currentQuestion}
          currentIndex={currentIndex}
          total={totalQuestions}
          onNext={goToNext}
          onPrev={goToPrev}
          onEnd={openEndConfirm}
          isAnswerVisible={isAnswerVisible}
          toggleAnswer={toggleAnswer}
          onFeedback={submitFeedback}
        />
      )}
      {/* isAnswerVisible
goToPrevQuestion
openEndConfirm
goToNextQuestion
currentQuestionIndex
lastQuestionIndex
msgsMeta
toggleAnswer
btnsMeta */}
      {/* مودال‌ها */}
      {endConfirm && <EndConfirmModal onConfirm={handleEndQuiz} onClose={closeEndConfirm} />}
      {results && <ResultsModal feedbacks={[]} onClose={closeResults} />}
    </div>
  );
};