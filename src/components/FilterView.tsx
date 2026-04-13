import { useQuizFiltersProgressiveDisclosure } from "../hooks/useQuizFiltersProgressiveDisclosure";
import FilterSelector from "./FilterSelector";
import StartQuizBtn from "./StartQuizBtn";
import type { QuizFiltersType } from "../hooks/useQuizFilters";
import type { ActionMeta, SingleValue } from "react-select";
import type { FilterOption } from "../data/quizFilterOptionsData";

type Props = {
  quizFilters: QuizFiltersType;
  onFilterChange: (selected: SingleValue<FilterOption>, action: ActionMeta<FilterOption>) => void;
  loading: boolean;
  startQuiz: () => Promise<void>;
};

const FilterView = ({ quizFilters, onFilterChange, loading, startQuiz }: Props) => {
  const { quizFilterBoxRef, quizFilterBoxHeight, showLevel, showSource, showBtn } =
    useQuizFiltersProgressiveDisclosure(quizFilters);

  return (
    <form className="flex flex-col justify-center items-center w-full h-125 p-2">
      <div
        ref={quizFilterBoxRef}
        style={{ height: quizFilterBoxHeight }}
        className="flex flex-col gap-8 py-8 px-6 border-2 rounded-4xl overflow-hidden w-full max-w-115 max-h-76
               transition-[height] ease-in-out duration-300"
      >
        <FilterSelector
          id="Where"
          label="از کجای کتاب تمرین می‌خوای؟"
          quizFilters={quizFilters}
          onChange={onFilterChange}
          loadingMessage="در حال بارگذاری بخش‌های کتاب..."
        />

        {showLevel && (
          <FilterSelector
            id="Level"
            label="در چه سطحی باشند؟"
            quizFilters={quizFilters}
            onChange={onFilterChange}
            loadingMessage="در حال بارگذاری سطوح..."
          />
        )}

        {showSource && (
          <FilterSelector
            id="Source"
            label="از چه منبعی باشند؟"
            quizFilters={quizFilters}
            onChange={onFilterChange}
            // avalin gozine haa: soalate ghalat, soalate nazade.
            loadingMessage="در حال بارگذاری منابع..."
          />
        )}
      </div>

      <StartQuizBtn show={showBtn} loading={loading} type="button" onClick={startQuiz} />
    </form>
  );
};

export default FilterView;
