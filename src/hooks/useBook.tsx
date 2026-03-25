import { useContext, useEffect, useRef } from "react";
import { getLocalData } from "./getLocalData";
import { toFaNums } from "../utils/toFaNums";
import { convertToEnglishDigits } from "../utils/convertToEnglishDigits";
import { BookContext } from "../Darsyavar";

export const useBook = () => {
  const { currentBook, currentPage, setCurrentPage } = useContext(BookContext);

  const goToPage = (pageNumber: number) => {
    if (!currentBook?.lastPage) return;
    if (!pageNumber || isNaN(pageNumber) || pageNumber > currentBook?.lastPage) return;
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (!currentBook?.id) return;
    goToPage(getLocalData(currentBook?.id, 1));
  }, [currentBook]);

  const goToPrevPage = () => {
    const newPage = Math.max(1, +currentPage - 1);
    goToPage(newPage);
  };

  const goToNextPage = () => {
    if (!currentBook?.lastPage) return;
    const newPage = Math.min(+currentBook?.lastPage, +currentPage + 1);
    goToPage(newPage);
  };

  const handleInputRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPage = +e.target.value;
    goToPage(inputPage);
  };

  const getInputRangeValue = () => {
    if (currentPage === 0) {
      return onFocusPageNumber.current;
    } else {
      return currentPage;
    }
  };

  const inputPageNumberRefEl = useRef<HTMLInputElement>(null);
  const lastValidFa = useRef<string>(toFaNums(currentPage as number));
  useEffect(() => {
    const fa = toFaNums(currentPage as number);
    if (inputPageNumberRefEl.current) {
      inputPageNumberRefEl.current.value = fa;
    }
    lastValidFa.current = fa;
  }, [currentPage]);

  const handleInputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.target;
    const raw = el.value.trim();
    if (raw === "") return;
    const english = convertToEnglishDigits(raw);
    const isNumeric = /^[0-9]+$/.test(english);
    const num = Number(english);
    if (!currentBook?.lastPage) return;
    const outOfRange = num <= 0 || num > currentBook?.lastPage;

    if (isNumeric && !outOfRange) {
      const fa = toFaNums(num);
      lastValidFa.current = fa;
      if (inputPageNumberRefEl.current) {
        inputPageNumberRefEl.current.value = fa;
      }
    } else {
      // inja yekam ui daariaa kalak. state error besaaz vase input va
      // inja faghat statesh ro taghir.
      el.value = lastValidFa.current;
      el.style.backgroundColor = "rgb(255,124,124)";
      setTimeout(() => (el.style.backgroundColor = "white"), 300);
    }
  };

  const onFocusPageNumber = useRef(currentPage);
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    onFocusPageNumber.current = currentPage;
    e.target.select();
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = convertToEnglishDigits(e.target.value.trim());
    value === "" ? goToPage(+onFocusPageNumber.current) : goToPage(+value);
    if (inputPageNumberRefEl.current) {
      inputPageNumberRefEl.current.value = toFaNums(currentPage as number);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const inputPage = convertToEnglishDigits(e.currentTarget.value);
      onFocusPageNumber.current = +inputPage;
      goToPage(+inputPage);
    }
  };

  return {
    currentBook,
    currentPage,
    goToPage,
    goToPrevPage,
    goToNextPage,
    inputPageNumberRefEl,
    handleInputRange,
    handleInputNumber,
    onFocusPageNumber,
    handleFocus,
    handleBlur,
    handleKeyDown,
    getInputRangeValue,
  };
};
