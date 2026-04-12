import { createContext, useContext, useEffect, useState } from "react";
import { BookContext } from "../Darsyavar";
import type { ActionMeta, SingleValue } from "react-select";
import FilterSelector from "./FilterSelector";
import { useQuizFiltersProgressiveDisclosure } from "../hooks/useQuizFiltersProgressiveDisclosure";
import StartQuizBtn from "./StartQuizBtn";
import Modal from "./Modal";
import QuizEndConfirm from "./QuizEndConfirm";
import QuizResultsModalContent from "./QuizResultsModalContent";
import {
  getFlatFehrestSectionsById,
  getLevelOptions,
  getReferenceOptions,
  type FilterOption,
} from "../data/fehrestsData";

import { useQuizData } from "../hooks/useQuizData";
import useToggle from "../hooks/useToggle";
import QuizView from "./QuizView";

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
  const [isQuizOn, setIsQuizOn] = useState(false);
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

  // vaghti isquiz on off shod, qids va q bayad null beshan.
  const {
    questionIds, // in
    question,
    idsLoading,
    questionLoading,
    loading,
    idsError,
    questionError,
    error,
    loadIds,
    loadQuestion, // va in baas paas daade beshan be useQuizNav
  } = useQuizData(/** user quiz filters */);

  const startQuiz = async () => {
    try {
      const ids = await loadIds();
      if (!ids?.length) return;

      await loadQuestion(ids[0]);
      showQuizView();
    } catch (error) {
      console.log(error);
    }
  };

  const [endConfirm, , openEndConfirm, closeEndConfirm] = useToggle();
  const [resultsModal, , openResultsModal, closeResultsModal] = useToggle();

  const submitQuiz = () => {
    closeEndConfirm();
    openResultsModal();
  };

  const terminateQuiz = () => {
    closeResultsModal();
    showFilterView();
  };

  const lastQuestionIndex = (questionIds?.length || 0) - 1;

  return (
    <QuizContext.Provider value={quizContextValue}>
      {/* confirm modal */}
      {endConfirm && (
        <Modal onClose={closeEndConfirm} className="w-77.5">
          <QuizEndConfirm onAction={submitQuiz} onClose={closeEndConfirm} />
        </Modal>
      )}

      {/* results modal */}
      {resultsModal && (
        <Modal onClose={closeResultsModal} className="w-77.5">
          <QuizResultsModalContent
            onAction={terminateQuiz}
            onClose={closeResultsModal}
            questionIds={questionIds || []}
            totalQuestionsNumber={lastQuestionIndex + 1}
          />
        </Modal>
      )}

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
          <StartQuizBtn
            show={showBtn}
            loading={loading}
            type="button" // مهم: از type="submit" استفاده نکنید
            onClick={startQuiz} // مستقیماً فراخوانی هوک
          />
        </form>
      ) : (
        questionIds &&
        question && (
          <QuizView
            questionIds={questionIds}
            questionData={question}
            loadQuestion={loadQuestion}
            openEndConfirm={openEndConfirm}
          />
        )
      )}
    </QuizContext.Provider>
  );
};

export default Quiz;
