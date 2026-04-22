import { useBookContext } from "./BookProvider";
import Select, { type ActionMeta, type SingleValue, type StylesConfig } from "react-select";
import { getBookById, type BookOption } from "../data/booksData.ts";
import { useBookSelectData } from "../hooks/useBookSelectData.ts";

const BookSelect = () => {
  const { selectedBookOption, setCurrentBook, setSelectedBookOption } = useBookContext();

  const { options, isLoading, isError, loadOptions } = useBookSelectData();

  const handleBookChange = (selected: SingleValue<BookOption>, _action: ActionMeta<BookOption>) => {
    if (selected) {
      setSelectedBookOption(selected);
      setCurrentBook(getBookById(selected.value));
    }
  };

  const styles: StylesConfig<BookOption, false> = {
    control: (provider) => ({
      ...provider,
      border: "2px solid rgb(200,200,200)",
      textAlign: "center",
      width: "100%",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "900",
      height: "46px",
      backgroundColor: "#ebebeb",
      cursor: isLoading ? "wait" : "pointer",
    }),
  };

  const renderNoOptionsMessage = ({ inputValue }: { inputValue: string }) => {
    if (isError) {
      return (
        <div className="flex justify-center items-center gap-2">
          <span className="text-red-500 text-xs">خطا در بارگذاری گزینه ها</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              loadOptions();
            }}
            className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-full transition-colors cursor-pointer"
          >
            تلاش مجدد ↻
          </button>
        </div>
      );
    }
    return inputValue ? `هیچ کتابی با "${inputValue}" پیدا نشد` : "کتابی موجود نیست";
  };

  return (
    <div className="relative mt-10 w-73">
      <label className="absolute top-0 right-0 text-sm z-10 mx-4 -translate-y-3 bg-[#ebebeb] px-2">
        فهرست کتاب
      </label>

      <Select<BookOption, false>
        options={options}
        value={selectedBookOption}
        placeholder={isLoading ? "در حال بارگذاری کتاب‌ها ..." : "یک کتاب انتخاب کنید"}
        styles={styles}
        isRtl={true}
        isSearchable={true}
        isLoading={isLoading}
        loadingMessage={() => "در حال بارگذاری کتاب‌ها..."}
        noOptionsMessage={renderNoOptionsMessage}
        onChange={handleBookChange}
      />
    </div>
  );
};

export default BookSelect;
