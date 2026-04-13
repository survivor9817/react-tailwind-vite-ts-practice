import type { ActionMeta, SingleValue } from "react-select";
import { useQuizFiltersProgressiveDisclosure } from "../hooks/useQuizFiltersProgressiveDisclosure";
import FilterSelector from "./FilterSelector";
import StartQuizBtn from "./StartQuizBtn";
import {
  getFlatFehrestSectionsById,
  getLevelOptions,
  getReferenceOptions,
  type FilterOption,
} from "../data/fehrestsData";
import { useContext } from "react";
import { BookContext } from "../Darsyavar";
import type { QuizFiltersType } from "../hooks/useQuizFilters";

type Props = {
  quizFilters: QuizFiltersType;
  onFilterChange: (selected: SingleValue<FilterOption>, action: ActionMeta<FilterOption>) => void;
  loading: boolean;
  startQuiz: () => Promise<void>;
};

const FilterView = ({ quizFilters, onFilterChange, loading, startQuiz }: Props) => {
  const { quizFilterBoxRef, quizFilterBoxHeight, showLevel, showSource, showBtn } =
    useQuizFiltersProgressiveDisclosure(quizFilters);

  const { currentBook } = useContext(BookContext);
  if (!currentBook?.id) return;
  // age toye load kardane option haye filter haye quiz error daad ke
  // ketaab maloom nist, benevise ke lotfan ketaab raa az menoye samte
  // raast entekhaab konid.
  const whereOptions = getFlatFehrestSectionsById(currentBook?.id);
  const levelOptions = getLevelOptions();
  const referenceOptions = getReferenceOptions();

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

      <StartQuizBtn show={showBtn} loading={loading} type="button" onClick={startQuiz} />
    </form>
  );
};

export default FilterView;
