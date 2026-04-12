import { useContext } from "react";
import { BookContext } from "../Darsyavar.tsx";
import Select, { type ActionMeta, type SingleValue, type StylesConfig } from "react-select";
import { getBookById, getOptionsOfBookSelector, type BookOption } from "../data/booksData.ts";

// type Props = {};

const BookSelect = () => {
  const { selectedBookOption, setCurrentBook, setSelectedBookOption } = useContext(BookContext);

  const handleBookChange = (selected: SingleValue<BookOption>, _action: ActionMeta<BookOption>) => {
    if (selected) {
      setSelectedBookOption(selected);
      setCurrentBook(getBookById(selected.value));
    }
  };

  // fetch data
  const options = getOptionsOfBookSelector();

  const styles: StylesConfig<BookOption, false> = {
    control: (provider) => ({
      ...provider,
      border: "2px solid rgb(200, 200, 200)",
      textAlign: "center",
      width: "100%",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "900",
      height: "46px",
      backgroundColor: "#ebebeb",
      cursor: "pointer",
    }),
  };

  return (
    <>
      <div className="relative mt-10 w-73">
        <label className="absolute text-sm z-10 mx-4 -translate-y-3 bg-[#ebebeb] px-2">
          فهرست کتاب
        </label>
        <Select<BookOption, false>
          styles={styles}
          options={options}
          value={selectedBookOption}
          placeholder={"یک کتاب انتخاب کنید"}
          className="basic-single"
          classNamePrefix="select"
          isRtl={true}
          isSearchable={true}
          onChange={handleBookChange}
        />
      </div>
    </>
  );
};

export default BookSelect;
