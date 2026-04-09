import { useBookPagination } from "../hooks/useBookPagination";
import IconBtn from "./IconBtn";

// type Props = {};

const BookPagination = () => {
  const {
    currentBook,
    currentPage,
    // goToPage,
    goToPrevPage,
    goToNextPage,
    inputPageNumberRefEl,
    handleInputRange,
    handleInputNumber,
    handleFocus,
    handleBlur,
    handleKeyDown,
  } = useBookPagination();

  return (
    <>
      {currentPage && (
        <div
          className="flex justify-center items-center p-1 max-w-[86vw] sm:max-w-90 border-2
           border-black rounded-[48px] bg-white"
        >
          <IconBtn i="arrow_circle_right" iconSize="48px" onClick={goToPrevPage} />
          <IconBtn i="arrow_circle_left" iconSize="48px" onClick={goToNextPage} />

          <input
            className="w-50 min-w-25 max-w-50 text-[rgba(225,163,193,1)] mx-1"
            type="range"
            min="1"
            max={currentBook?.lastPage}
            step="1"
            value={currentPage}
            onChange={handleInputRange}
          />

          <input
            className="border-[3px] border-black rounded-3xl text-center p-0 h-11 w-11 text-[18px] appearance-none"
            type="text"
            inputMode="numeric"
            onChange={handleInputNumber}
            // value={getCurrentPageFa()}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            ref={inputPageNumberRefEl}
          />
        </div>
      )}
    </>
  );
};

export default BookPagination;
