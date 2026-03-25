import IconBtn from "./IconBtn.tsx";
import BookPage from "./BookPage.tsx";
import { useBook } from "../hooks/useBook.tsx";

const Book = () => {
  const {
    currentBook,
    currentPage,
    // goToPage,
    goToPrevPage,
    goToNextPage,
    inputPageNumberRefEl,
    // getInputRangeValue,
    handleInputRange,
    handleInputNumber,
    handleFocus,
    handleBlur,
    handleKeyDown,
  } = useBook();

  return (
    <>
      <div className="shrink-0 overflow-auto w-1/3 h-full relative">
        <div className="flex justify-center items-center py-2 absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
          <div
            className="flex justify-center items-center p-1 max-w-[86vw] sm:max-w-90 border-2
           border-black rounded-[48px] bg-white"
          >
            <IconBtn iconName="arrow_circle_right" iconSize="48px" onClick={goToPrevPage} />
            <IconBtn iconName="arrow_circle_left" iconSize="48px" onClick={goToNextPage} />

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
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              ref={inputPageNumberRefEl}
            />
          </div>
        </div>

        <div className="h-full overflow-auto">
          <BookPage bookId={currentBook?.id as number} pageNumber={currentPage as number} />
        </div>
      </div>
    </>
  );
};

export default Book;
