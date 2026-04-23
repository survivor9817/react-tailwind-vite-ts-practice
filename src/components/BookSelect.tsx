import { useBookContext } from "./BookProvider";
import Select, { type SingleValue, type StylesConfig } from "react-select";
import { getBookById, type BookOption } from "../data/booksData.ts";
import { useBookSelectData } from "../hooks/useBookSelectData.ts";
import ErrorFallback from "./ErrorFallback.tsx";
import { useEffect } from "react";

const BookSelect = () => {
  // useBookSelect
  const { currentBook, setCurrentBook } = useBookContext();

  const { options, isLoading, isError, loadOptions } = useBookSelectData();
  useEffect(() => {
    loadOptions(/** user id? */);
  }, []);

  const handleBookChange = (selected: SingleValue<BookOption>) => {
    if (selected) setCurrentBook(getBookById(selected.value));
  };

  const renderNoOptionsMessage = ({ inputValue }: { inputValue: string }) => {
    if (isError) return <ErrorFallback onRefetch={() => loadOptions(/** user id? */)} />;
    return inputValue ? `هیچ کتابی با "${inputValue}" پیدا نشد` : "کتابی موجود نیست";
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

  return (
    <div className="relative mt-10 w-73">
      <label className="absolute top-0 right-0 text-sm z-10 mx-4 -translate-y-3 bg-[#ebebeb] px-2">
        فهرست کتاب
      </label>

      <Select<BookOption, false>
        options={options}
        value={currentBook}
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
