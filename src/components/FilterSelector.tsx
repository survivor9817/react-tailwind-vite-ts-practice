import Select, {
  type ActionMeta,
  type SelectInstance,
  type SingleValue,
  type StylesConfig,
} from "react-select";
import type { FilterOption } from "../data/data";
import { useEffect, useRef } from "react";

type Props = {
  id: string;
  label: string;
  selectedOption: FilterOption;
  options: FilterOption[];
  onChange: (selected: SingleValue<FilterOption>, _action: ActionMeta<FilterOption>) => void;
  // ref: Ref<Select<unknown, boolean, GroupBase<unknown>>> | undefined;
};

const FilterSelector = ({ id, label, selectedOption, options, onChange }: Props) => {
  const selectRef = useRef<SelectInstance<FilterOption, false>>(null);

  useEffect(() => {
    if (id !== "Where") {
      setTimeout(() => selectRef.current?.focus(), 300);
    }
  }, []);

  // const { selectedBookOption, setCurrentBook, setSelectedBookOption } = useContext(BookContext);

  // fetch data
  // const options = getOptionsOfBookSelector();

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
      // backgroundColor: "#ebebeb",
      cursor: "pointer",
    }),
    // menu: (provided) => ({
    //   ...provided,
    //   zIndex: 99999999, // مقدار بزرگتر از هر z‑index دیگر
    // }),
    // /** اگر از portal استفاده می‌کنید (در ادامه) **/
    menuPortal: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
  };
  return (
    <div className="relative">
      <label
        // htmlFor={id}
        className={`absolute top-0 right-0 z-1 text-right pointer-events-none font-bold text-[#1a73e8] 
          mx-3 my-3 px-1
          transform transition-all bg-white duration-300 ease-in-out 
          ${selectedOption.value ? "text-[16px] -translate-y-full " : "text-[18px] translate-y-[0%]"}`}
      >
        {label}
      </label>

      <Select
        ref={selectRef}
        // id={id}
        menuPortalTarget={document.body} // منو به body می‌رود
        name={id}
        value={selectedOption}
        tabIndex={0}
        styles={styles}
        defaultValue={undefined}
        options={options}
        placeholder={""}
        className="basic-single"
        classNamePrefix="select"
        isRtl={true}
        isSearchable={false}
        onChange={onChange}
      />
      {/* {renderedOptions} */}
    </div>
  );
};

export default FilterSelector;
