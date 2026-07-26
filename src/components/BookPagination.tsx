import { useBookPagination } from "../hooks/useBookPagination";
import IconBtn from "./IconBtn";

// type Props = {};

const BookPagination = () => {
  const {
    currentBook,
    currentPage,
    pageInput,
    pageInputError,

    goToPrevPage,
    goToNextPage,

    onSliderChange,
    onInputChange,
    onFocus,
    onBlur,
    onInputKeyDown,
  } = useBookPagination();

  const inputError = pageInputError ? "bg-[rgb(255,124,124)]" : "bg-auto";
  return (
    <>
      {currentPage && (
        <div
          className="flex justify-center items-center p-1 max-w-[86vw] sm:max-w-90 border-2
           border-black rounded-[48px] bg-white"
        >
          <IconBtn
            i="arrow_circle_right"
            iconSize="48px"
            onClick={goToPrevPage}
            isDisabled={!currentBook}
          />
          <IconBtn
            i="arrow_circle_left"
            iconSize="48px"
            onClick={goToNextPage}
            isDisabled={!currentBook}
          />

          <input
            className="w-50 min-w-25 max-w-50 text-[rgba(225,163,193,1)] mx-1"
            type="range"
            min="1"
            max={currentBook?.lastPage}
            step="1"
            value={currentPage}
            onChange={onSliderChange}
            disabled={!currentBook}
          />

          <input
            className={`border-[3px] border-black rounded-3xl text-center p-0 h-11 w-11 text-[18px] appearance-none ${inputError}`}
            type="text"
            inputMode="numeric"
            onChange={onInputChange}
            value={pageInput}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onInputKeyDown}
            disabled={!currentBook}
          />
        </div>
      )}
    </>
  );
};

export default BookPagination;
