import { useEffect, useRef, useState } from "react";
import { toFaNums as toFaDigits } from "../../utils/toFaNums";
import { convertToEnglishDigits as toEnDigits } from "../../utils/convertToEnglishDigits";
import { getLocalData } from "../../utils/getLocalData";
import useTimeoutFn from "./useTimeoutFn";
import { useLocalStorage } from "../useLocalStorage";
import type { Book } from "../../data/booksData";

export const useBook = () => {
  const [currentBook, setCurrentBook] = useLocalStorage<Book | null>("lastBookRead", null);
  const bookId = currentBook?.id;
  const bookPageKey = bookId ? `last-visited-page-${bookId}` : "last-visited-page-temp";
  const [currentPage, setCurrentPage] = useLocalStorage<number>(bookPageKey, 1);
  const [pageInput, setPageInput] = useState(toFaDigits(currentPage));
  const [pageInputError, setPageInputError] = useState(false);
  const onFocusPageNumber = useRef(currentPage);

  const { set: autoHideError } = useTimeoutFn(() => setPageInputError(false), 300);
  const showInputError = () => {
    setPageInputError(true);
    autoHideError();
  };

  const setPageInputValue = (page: number) => {
    setPageInput(toFaDigits(page));
  };

  const isPageInRange = (page: number, min: number, max: number) => {
    return Number.isInteger(page) && page >= min && page <= max;
  };

  const parseValidPage = (page: string | number): number | null => {
    const min = 1;
    const max = currentBook?.lastPage || 2;

    if (typeof page === "number") {
      return isPageInRange(page, min, max) ? page : null;
    }

    const num = Number(toEnDigits(page));
    return isPageInRange(num, min, max) ? num : null;
  };

  const goToPage = (page: string | number) => {
    const p = parseValidPage(page);
    if (p != null) {
      setPageInputValue(p);
      setCurrentPage(p);
    }
  };

  const goToPrevPage = () => {
    goToPage(currentPage - 1);
  };

  const goToNextPage = () => {
    goToPage(currentPage + 1);
  };

  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPage = Number(e.target.value);
    goToPage(newPage);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.trim();

    if (input === "") {
      setPageInput("");
      return;
    }

    const newPage = parseValidPage(input);
    if (newPage === null) {
      showInputError();
      return;
    }
    setPageInputValue(newPage);
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const newPage = parseValidPage(pageInput);
    if (newPage === null) {
      showInputError();
      return;
    }

    setPageInputValue(newPage);
    setCurrentPage(newPage);
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    onFocusPageNumber.current = currentPage;
    e.target.select();
  };

  const onBlur = () => {
    if (pageInput === "") {
      const pageBeforeFocus = onFocusPageNumber.current;
      setPageInputValue(pageBeforeFocus);
      setCurrentPage(pageBeforeFocus); // maybe extra
      return;
    }

    const newPage = parseValidPage(pageInput);
    if (newPage === null) {
      setPageInputValue(currentPage);
      return;
    }

    setPageInputValue(newPage);
    setCurrentPage(newPage);
  };

  // onBookChange // behtare bardaarimesh.
  // potential extra rerenders
  // useLocalState can cover it
  useEffect(() => {
    const bookId = currentBook?.id;
    const bookPageKey = bookId ? `last-visited-page-${bookId}` : "last-visited-page-temp";
    const lastPageRead = getLocalData(bookPageKey, 1);
    const page = parseValidPage(lastPageRead) ?? 1;
    setPageInputValue(page); // maybe extra
    setCurrentPage(page);
  }, [currentBook]);

  return {
    currentBook,
    setCurrentBook,
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
  };
};
