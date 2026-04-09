import { createContext, useContext, useEffect, useState } from "react";
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
  // use quiz
  const [isQuizOn, setIsQuizOn] = useState(false);
  const showQuizView = () => setIsQuizOn(true);
  const showFilterView = () => setIsQuizOn(false);

  // use filters
  const { currentBook } = useContext(BookContext);

  const [quizFilters, setQuizFilters] = useState<QuizFiltersType>({
    Book: currentBook?.id,
    Where: { value: "", label: "" },
    Level: { value: "", label: "" },
    Source: { value: "", label: "" },
  });

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

  useEffect(() => resetFilters(), [currentBook, isQuizOn]);

  const [loadingQuiz, setLoadingQuiz] = useState(false);
  const startQuiz = (formData: FormData) => {
    setLoadingQuiz(true);
    console.log(formData);
    // fetch data by filters

    setTimeout(() => {
      showQuizView();
      setLoadingQuiz(false);
      // resetFilters();
    }, 1000);
    setTimeout(() => {
      showFilterView();
    }, 3000);
  };

  if (!currentBook?.id) return <p>درخواست خطا شد.</p>;
  const whereOptions = getFlatFehrestSectionsById(currentBook.id);
  const levelOptions = getLevelOptions();
  const referenceOptions = getReferenceOptions();

  // ----------  progressive disclosure ----------
  const { quizFilterBoxRef, quizFilterBoxHeight, showLevel, showSource, showBtn } =
    useQuizFiltersProgressiveDisclosure(quizFilters);

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

  return (
    <QuizContext.Provider value={quizContextValue}>
      <>
        {!isQuizOn ? (
          <form
            className="flex flex-col justify-center items-center w-full h-125 p-2"
            action={startQuiz}
          >
            {/* ----------  Wrapper با انیمیشن ارتفاع ---------- */}
            <div
              ref={quizFilterBoxRef}
              style={{ height: quizFilterBoxHeight }}
              className="flex flex-col gap-8 py-8 px-6 border-2 rounded-4xl overflow-hidden
               transition-all ease-in-out duration-300 w-full max-w-115 max-h-76"
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
          "" /* <QuizView />} */
        )}
        {/* {isQuizOn && <QuizView />} */}
      </>
    </QuizContext.Provider>
  );
};

export default Quiz;
