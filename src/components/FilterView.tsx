import { useQuizFiltersProgressiveDisclosure } from "../hooks/useQuizFiltersProgressiveDisclosure";
import QuizFilterSelect from "./QuizFilterSelect";
import StartQuizBtn from "./StartQuizBtn";
import type { QuizFiltersType } from "../hooks/useQuizFilters";
import type { ActionMeta, SingleValue } from "react-select";
import type { FilterOption } from "../data/quizFilterOptionsData";

type Props = {
  quizFilters: QuizFiltersType;
  onChangeFilterSelect: (
    selected: SingleValue<FilterOption>,
    action: ActionMeta<FilterOption>,
  ) => void;
  startQuizLoading: boolean;
  startQuiz: () => Promise<void>;
};

const FilterView = ({ quizFilters, onChangeFilterSelect, startQuizLoading, startQuiz }: Props) => {
  const { quizFilterBoxRef, quizFilterBoxHeight, showLevel, showSource, showBtn } =
    useQuizFiltersProgressiveDisclosure(quizFilters);

  return (
    // min-h-90
    <form className="flex flex-col justify-center items-center w-full p-2">
      <div
        style={{ height: quizFilterBoxHeight }}
        className="relative flex flex-col gap-8 mt-18 border-2 rounded-4xl w-full max-w-115 max-h-80
                 transition-[height] ease-in-out duration-300"
      >
        <div className="absolute -top-5 right-8 text-2xl bg-white px-2">تمرین جدید</div>

        <div
          ref={quizFilterBoxRef}
          className={`flex flex-col gap-7 overflow-hidden w-full h-full px-6 pb-8 ${showLevel ? "pt-10" : "pt-8"}`}
        >
          {/* mishe begim baad az avalin baste shodane menu yek filter badi render beshe */}
          <QuizFilterSelect
            filterId="Where"
            label="از کجای کتاب باشند؟"
            quizFilters={quizFilters}
            onChange={onChangeFilterSelect}
            loadingMessage="در حال بارگذاری بخش‌های کتاب..."
          />
          {showLevel && (
            <QuizFilterSelect
              filterId="Level"
              label="در چه سطحی باشند؟"
              quizFilters={quizFilters}
              onChange={onChangeFilterSelect}
              loadingMessage="در حال بارگذاری سطوح..."
            />
          )}
          {showSource && (
            <QuizFilterSelect
              filterId="Source"
              label="از چه منبعی باشند؟"
              quizFilters={quizFilters}
              onChange={onChangeFilterSelect}
              // avalin gozine haa: soalate ghalat, soalate nazade.
              loadingMessage="در حال بارگذاری منابع..."
            />
          )}
        </div>

        <StartQuizBtn show={showBtn} loading={startQuizLoading} type="button" onClick={startQuiz} />
      </div>
    </form>
  );
};

export default FilterView;
