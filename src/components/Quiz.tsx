import { createContext, useContext, useEffect, useRef, useState } from "react";
import { BookContext } from "../Darsyavar";
import {
  getFlatFehrestSectionsById,
  getLevelOptions,
  getReferenceOptions,
  type FilterOption,
} from "../data/data";
import type { ActionMeta, SingleValue } from "react-select";
import FilterSelector from "./FilterSelector";
import { useQuizFiltersProgressiveDisclosure } from "../hooks/useQuizFiltersProgressiveDisclosure";
import StartQuizBtn from "./StartQuizBtn";
import Modal from "./Modal";
import QuizEndConfirm from "./QuizEndConfirm";
import QuizResultsModalContent from "./QuizResultsModalContent";
import IconBtn from "./IconBtn";
import { questionsData, requestedQuestionsIDs, serverSavedFeedback } from "../data/questionsData";
import useToggle from "../hooks/useToggle";
import { useFeedbackBtns } from "../hooks/useFeedbackBtns";
import { feedbackBtnData, feedbackMsgData } from "../data/feedbackData";
import { useQuizNavigation } from "../hooks/useQuizNavigation";
import QuizProgressBar from "./QuizProgressBar";
import QuizTagBar from "./QuizTagBar";
import QuizProgressLabel from "./QuizProgressLabel";
import Question from "./Question";
import FeedbackMessages from "./FeedbackMessages";
import Answer from "./Answer";
import AnswerCollapsibleContainer from "./AnswerCollapsibleContainer";
import ShowAnswerBtn from "./ShowAnswerBtn";
import Author from "./Author";
import QuestionDetails from "./QuestionDetails";
import FeedbackButtons from "./FeedbackButtons";

type QuizContextType = {
  isQuizOn: boolean;
  showQuizView: (value: boolean) => void;
  showFilterView: (value: boolean) => void;
};
export const QuizContext = createContext<QuizContextType>({
  isQuizOn: false,
  showQuizView: () => {},
  showFilterView: () => {},
});

export type QuizFiltersType = {
  Book: number | undefined;
  Where: {
    value: string;
    label: string;
  };
  Level: {
    value: string;
    label: string;
  };
  Source: {
    value: string;
    label: string;
  };
};

const Quiz = () => {
  const { currentBook } = useContext(BookContext);
  const [isQuizOn, setIsQuizOn] = useState(true);
  const [loadingQuiz, setLoadingQuiz] = useState(false);
  const [quizFilters, setQuizFilters] = useState<QuizFiltersType>({
    Book: currentBook?.id,
    Where: { value: "", label: "" },
    Level: { value: "", label: "" },
    Source: { value: "", label: "" },
  });

  const showQuizView = () => setIsQuizOn(true);
  const showFilterView = () => setIsQuizOn(false);

  const resetFilters = () => {
    setQuizFilters({
      Book: currentBook?.id,
      Where: { value: "", label: "" },
      Level: { value: "", label: "" },
      Source: { value: "", label: "" },
    });
  };

  const onFilterChange = (
    selected: SingleValue<FilterOption>,
    action: ActionMeta<FilterOption>,
  ) => {
    const id = action.name;
    if (!id) return;
    setQuizFilters((prev) => ({
      ...prev,
      [id]: selected,
    }));
  };

  const startQuiz = (formData: FormData) => {
    setLoadingQuiz(true);
    console.log(formData);
    // fetch data by filters

    setTimeout(() => {
      showQuizView();
      setLoadingQuiz(false);
      // resetFilters();
    }, 1000);
    // setTimeout(() => {
    //   showFilterView();
    // }, 3000);
  };

  // ----------  progressive disclosure ----------
  const { quizFilterBoxRef, quizFilterBoxHeight, showLevel, showSource, showBtn } =
    useQuizFiltersProgressiveDisclosure(quizFilters);

  useEffect(() => resetFilters(), [currentBook, isQuizOn]);

  if (!currentBook?.id) return <p>درخواست خطا شد.</p>;
  const whereOptions = getFlatFehrestSectionsById(currentBook.id);
  const levelOptions = getLevelOptions();
  const referenceOptions = getReferenceOptions();

  const quizContextValue: QuizContextType = {
    isQuizOn,
    showQuizView,
    showFilterView,
  };

  // taeen saakhtemaan daade haaye database soaalaat va user
  // quizfilter va set esh ro befrestim toye form okeye
  // baraye startQuiz ham faghat loading esh ro mikhad ke
  // toye form saakhtemishe statesh va setfilter ham ke
  // paasdadim dg

  // ==================================================================
  // useFetchQuestionIDs and feedbacks
  // ==================================================================
  const questionIDs = useRef(requestedQuestionsIDs);
  const feedbacks = useRef(serverSavedFeedback);

  // ==================================================================
  // useQuizNavigations
  // ==================================================================
  const lastQuestionIndex = questionIDs.current.length - 1;

  const [endConfirm, , openEndConfirm, closeEndConfirm] = useToggle();

  const { currentQuestionIndex, goToPrevQuestion, goToNextQuestion } = useQuizNavigation(
    0,
    lastQuestionIndex,
    openEndConfirm,
  );

  const [isAnswerVisible, toggleAnswer, , hideAnswer] = useToggle();
  useEffect(() => {
    hideAnswer();
  }, [currentQuestionIndex]);

  const [results, , openResults, closeResults] = useToggle();

  // ==================================================================
  // useFeedbackBtns
  // ==================================================================

  const {
    feedbacks: feedbackss,
    btnsMeta,
    msgsMeta,
    updateFeedbackOnClick,
  } = useFeedbackBtns(
    feedbackBtnData,
    feedbackMsgData,
    currentQuestionIndex,
    "123",
    feedbacks.current,
    questionIDs.current,
  );

  // const { /* quizStatus ,*/ setQuizStatus } = useContext(QuizContext);
  // // const { currentBook, goToQuiz } = useContext(BookContext);
  // function showFilterView() {
  //   setQuizStatus("off");
  // }

  // age ketaab ro vasate tamrin avaz kard avaz nashe,
  // kaarbaro majboor kone be bastane quiz.
  // useEffect(() => {
  //   if (quizStatus === "in-progress") {
  //     goToQuiz();
  //     openEndConfirm();
  //   }
  // }, [currentBook]);

  function endQuiz() {
    closeEndConfirm();
    openResults();
    console.log(feedbacks);
  }

  // ==================================================================
  // useFetchQuestion
  // ==================================================================
  const questionData = questionsData[currentQuestionIndex];
  if (!questionData) return null;
  const { question, descriptiveAnswer, author, source, date, score, tags } = questionData;

  return (
    <QuizContext.Provider value={quizContextValue}>
      {!isQuizOn ? (
        <form
          className="flex flex-col justify-center items-center w-full h-125 p-2"
          action={startQuiz}
        >
          {/* ----------  Wrapper با انیمیشن ارتفاع ---------- */}
          <div
            ref={quizFilterBoxRef}
            style={{ height: quizFilterBoxHeight }}
            className="flex flex-col gap-8 py-8 px-6 border-2 rounded-4xl overflow-hidden w-full max-w-115 max-h-76
               transition-[height] ease-in-out duration-300"
          >
            <FilterSelector
              id="Where"
              label="از کجای کتاب تمرین می‌خوای؟"
              selectedOption={quizFilters.Where}
              onChange={onFilterChange}
              options={whereOptions}
            />
            {showLevel && (
              <FilterSelector
                id="Level"
                label="در چه سطحی باشند؟"
                selectedOption={quizFilters.Level}
                onChange={onFilterChange}
                options={levelOptions}
              />
            )}
            {showSource && (
              <FilterSelector
                id="Source"
                label="از چه منبعی باشند؟"
                selectedOption={quizFilters.Source}
                onChange={onFilterChange}
                options={referenceOptions}
              />
            )}
          </div>

          <StartQuizBtn show={showBtn} loading={loadingQuiz} type="submit" />
          {/* // onClick={handleStart} */}
        </form>
      ) : (
        <div
          className={`quiz-box flex flex-col p-2 overflow-hidden ${isAnswerVisible ? "open" : ""}`}
        >
          {/* confirm modal */}
          {endConfirm && (
            <Modal onClose={closeEndConfirm} className="w-77.5">
              <QuizEndConfirm onAction={endQuiz} onClose={closeEndConfirm} />
            </Modal>
          )}

          {/* results modal */}
          {results && (
            <Modal onClose={closeResults} className="w-77.5">
              <QuizResultsModalContent
                onAction={showFilterView}
                onClose={closeResults}
                feedbacksData={feedbackss.current}
                totalQuestionsNumber={questionIDs.current.length}
              />
            </Modal>
          )}

          {/* Quiz card */}
          {/* <!-- Row 1 : Navigation Buttons of Exercise Section --> */}
          <div className="flex justify-between items-center h-12 mb-1">
            <div className="flex">
              <IconBtn i={"arrow_circle_right"} onClick={goToPrevQuestion} />
            </div>

            <div className="flex">
              <IconBtn
                className={"text-red-700"}
                i={"power_settings_circle"}
                onClick={openEndConfirm}
              />

              <IconBtn i={"arrow_circle_left"} onClick={goToNextQuestion} />
            </div>
          </div>

          {/* Question Box */}
          <div
            className="border-2 rounded-t-3xl rounded-b-2xl transition-[border-radius]"
            style={{ borderBottomLeftRadius: isAnswerVisible ? "6px" : "16px" }}
          >
            {/* <!-- Row 2 : Exercise Number and Tags --> */}
            <div className="relative h-14.5">
              <QuizProgressLabel current={currentQuestionIndex} max={lastQuestionIndex} />
              <QuizTagBar tags={tags} />
            </div>

            {/* <!-- Row 3 : Exercise Number and Tags --> */}
            <QuizProgressBar current={currentQuestionIndex} max={lastQuestionIndex} />

            {/* <!-- Row 4 : Question Box --> */}
            <div className="relative min-h-30">
              <Question question={question} />
              <FeedbackMessages msgs={msgsMeta} />
            </div>
          </div>

          {/* <!-- Row 5 : Middle Row : answerToggle-authorLink-userInputs --> */}
          <div className="flex flex-col-reverse sm:flex-row justify-between gap-2 my-2 w-full text-[16px]">
            <div
              className="flex items-center w-full sm:w-85 h-16 border-2 rounded-full overflow-hidden transition-[border-radius] duration-400"
              style={{ borderRadius: isAnswerVisible ? "150px 150px 25px 150px" : "150px" }}
            >
              <ShowAnswerBtn onClick={toggleAnswer} isAnswerVisible={isAnswerVisible} />
              <Author author={author} />
            </div>

            <div
              className="grid items-center overflow-hidden sm:w-85 h-16 border-2 rounded-full transition-[border-radius] duration-400"
              style={{ borderRadius: isAnswerVisible ? "25px 150px 150px 150px" : "150px" }}
            >
              <div
                className="grid grid-cols-2 w-[200%] justify-center content-center h-12 transition-transform duration-400 ease-in-out"
                style={{ transform: isAnswerVisible ? "translateX(50%)" : "translateX(0%)" }}
              >
                <QuestionDetails source={source} date={date} score={score} />
                <FeedbackButtons btnsMeta={btnsMeta} onClick={updateFeedbackOnClick} />
              </div>
            </div>
          </div>

          {/* <!-- Row 6 : Answer Box --> */}
          <AnswerCollapsibleContainer isExpanded={isAnswerVisible}>
            <Answer answer={descriptiveAnswer} />
          </AnswerCollapsibleContainer>
        </div>
      )}
    </QuizContext.Provider>
  );
};

export default Quiz;
