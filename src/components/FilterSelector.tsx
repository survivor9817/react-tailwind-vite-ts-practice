import { useEffect, useRef } from "react";
import { useFilterSelectData } from "../hooks/useFilterSelectData";
import type { QuizFiltersType } from "../hooks/useQuizFilters";
import type { FilterOption } from "../data/quizFilterOptionsData";
import type { ActionMeta, SelectInstance, SingleValue, StylesConfig } from "react-select";
import ErrorFallback from "./ErrorFallback";
import Select from "react-select";

type Props = {
  filterId: "Where" | "Level" | "Source";
  label: string;
  initialOptions?: FilterOption[];
  onChange: (selected: SingleValue<FilterOption>, _action: ActionMeta<FilterOption>) => void;
  loadingMessage?: string;
  quizFilters: QuizFiltersType;
};

const FilterSelector = ({
  filterId,
  label,
  quizFilters,
  initialOptions,
  onChange,
  loadingMessage = "در حال بارگذاری گزینه‌ها...",
}: Props) => {
  const { options, isLoading, isError, loadOptions } = useFilterSelectData(
    initialOptions,
    filterId,
    quizFilters,
  );

  // activeTab roo age daashte baashim mitoonim age begim age user rooye tamrin
  // hastesh filtere wheresh ham focus beshe
  const selectRef = useRef<SelectInstance<FilterOption, false>>(null);
  useEffect(() => {
    if (filterId !== "Where") {
      setTimeout(() => selectRef.current?.focus(), 300);
    }
  }, [filterId, isLoading]);

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
      cursor: /** isLoading ? "wait" : */ "pointer",
      backgroundColor: isLoading ? "#f5f5f5" : "white",
    }),
    menuPortal: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
  };

  const renderNoOptionsMessage = ({ inputValue }: { inputValue: string }) => {
    if (isError)
      return <ErrorFallback onRefetch={loadOptions} ErrorMsg="خطا در بارگذاری گزینه‌ها" />;
    return inputValue ? `هیچ نتیجه‌ای برای "${inputValue}" پیدا نشد` : "گزینه‌ای موجود نیست";
  };

  return (
    <div className="relative">
      <label
        className={`absolute top-0 right-0 z-1 text-right pointer-events-none font-bold text-[#1a73e8] mx-3 my-3 px-1
        transform transition-all bg-white duration-300 ease-in-out 
        ${quizFilters[filterId].value ? "text-[16px] -translate-y-full " : "text-[18px] translate-y-[0%]"}
        ${isLoading ? "opacity-50" : ""}`}
      >
        {label}
      </label>

      <Select
        ref={selectRef}
        name={filterId}
        placeholder={isLoading ? loadingMessage : ""}
        value={quizFilters[filterId]}
        options={options}
        menuPortalTarget={document.body}
        onChange={onChange}
        isRtl={true}
        isSearchable={false}
        isLoading={isLoading}
        loadingMessage={() => loadingMessage}
        noOptionsMessage={renderNoOptionsMessage}
        styles={styles}
      />
    </div>
  );
};

export default FilterSelector;
