import Select, {
  type ActionMeta,
  type SelectInstance,
  type SingleValue,
  type StylesConfig,
} from "react-select";
import { useEffect, useRef, useState } from "react";
import type { QuizFiltersType } from "../hooks/useQuizFilters";
import { fakeFetch } from "../hooks/fakeFetch";
import { getOptionsFromDB, type FilterOption } from "../data/quizFilterOptionsData";

type Props = {
  id: "Where" | "Level" | "Source";
  label: string;
  options?: FilterOption[];
  onChange: (selected: SingleValue<FilterOption>, _action: ActionMeta<FilterOption>) => void;
  loadingMessage?: string;
  quizFilters: QuizFiltersType;
};

const FilterSelector = ({
  id,
  label,
  quizFilters,
  options: initialOptions = [{ value: "", label: "ابتدا باید یک کتاب را انتخاب کنید." }],
  onChange,
  loadingMessage = "در حال بارگذاری...",
}: Props) => {
  const selectRef = useRef<SelectInstance<FilterOption, false>>(null);

  const [options, setOptions] = useState<FilterOption[]>(initialOptions);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fakeFetch(() => getOptionsFromDB(id, quizFilters));
        if (!data) return; // ye iteme pishfarz mizaari. ke dobare talash kone. ye hamchin chizi.
        setOptions(data);
      } catch (error) {
        console.error(`Error loading options for ${id}:`, error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [quizFilters.BookId]);

  useEffect(() => {
    if (id !== "Where" && !isLoading) {
      setTimeout(() => selectRef.current?.focus(), 300);
    }
  }, [id, isLoading]);

  const styles: StylesConfig<FilterOption, false> = {
    control: (provider) => ({
      ...provider,
      border: "2px solid rgb(200, 200, 200)",
      textAlign: "right",
      paddingRight: "8px",
      width: "100%",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "900",
      height: "52px",
      cursor: isLoading ? "wait" : "pointer",
      backgroundColor: isLoading ? "#f5f5f5" : "white",
    }),
    menuPortal: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
  };

  if (hasError) {
    return (
      <div className="relative">
        <div className="border-2 border-red-300 rounded-lg p-3 text-red-600 text-center">
          خطا در بارگذاری گزینه‌های {label}
          گزینه غربال قبلی را دوباره انتخاب کنید.
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <label
        className={`absolute top-0 right-0 z-1 text-right pointer-events-none font-bold text-[#1a73e8] 
          mx-3 my-3 px-1
          transform transition-all bg-white duration-300 ease-in-out 
          ${quizFilters[id].value ? "text-[16px] -translate-y-full " : "text-[18px] translate-y-[0%]"}
          ${isLoading ? "opacity-50" : ""}`}
      >
        {label}
      </label>

      <Select
        ref={selectRef}
        menuPortalTarget={document.body}
        name={id}
        value={quizFilters[id]}
        tabIndex={0}
        styles={styles}
        options={options}
        placeholder={isLoading ? loadingMessage : ""}
        className="basic-single"
        classNamePrefix="select"
        isRtl={true}
        isSearchable={false}
        onChange={onChange}
        isLoading={isLoading}
        isDisabled={isLoading} // nemikhaam disabled beshe. mikhaam dokme loading baashe va menu ham baaz beshe vali gozine aval dar haale baargozaari baashe va clickable ham nabashe.
      />
    </div>
  );
};

export default FilterSelector;
