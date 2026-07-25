import { useEffect, useRef, useState } from "react";
import { toFaNums as toFaDigits } from "../utils/toFaNums";
import { convertToEnglishDigits as toEnDigits } from "../utils/convertToEnglishDigits";
import { useLocalStorage } from "./useLocalStorage";
import type { Book } from "../data/booksData";
import { getLocalData } from "../utils/getLocalData";

export const useBook = () => {
  // current book baayad state i baashe ke az baalaa be hook paas daade mishe.
  const [currentBook, setCurrentBook] = useLocalStorage<Book | null>("lastBookRead", null); // grade ro az currentBook dar miaarim na inke selectedGrade ro paas bedim paeen

  const bookPageKey = currentBook?.id
    ? `last-visited-page-${currentBook.id}`
    : "last-visited-page-temp";

  const [currentPage, setCurrentPage] = useLocalStorage<number>(bookPageKey, 1);

  const [pageInput, setPageInput] = useState(toFaDigits(currentPage));
  const setPageInputValue = (page: number) => setPageInput(toFaDigits(page));
  useEffect(() => {
    setPageInputValue(currentPage);
  }, [currentPage]);

  const [pageInputError, setPageInputError] = useState(false);
  const showError = () => {
    setPageInputError(true);
    setTimeout(() => setPageInputError(false), 300);
  };

  const isPageInRange = (page: number) => {
    const max = currentBook?.lastPage;
    return max != null && Number.isInteger(page) && page >= 1 && page <= max;
  };

  const parseValidPage = (inputPage: string | number): number | null => {
    const isNumericString = /^[0-9۰-۹]+$/.test(inputPage.toString());
    if (!isNumericString) return null;
    const pageNumber = Number(toEnDigits(inputPage));
    return isPageInRange(pageNumber) ? pageNumber : null;
  };

  const goToPage = (page: number) => {
    if (isPageInRange(page)) setCurrentPage(page);
  };

  // commitPage

  // const goToPage = (page: string | number) => {
  //   const p = parseValidPage(page);
  //   if (p != null) return setCurrentPage(p);
  //   // if (isPageInRange(page)) setCurrentPage(page);
  // };

  const goToPrevPage = () => goToPage(currentPage - 1);

  const goToNextPage = () => goToPage(currentPage + 1);

  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    goToPage(Number(e.target.value));
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.trim();
    if (input === "") return setPageInput("");
    const newPage = parseValidPage(input);
    if (newPage === null) return showError();
    setPageInputValue(newPage);
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const newPage = parseValidPage(pageInput);
    if (newPage === null) return showError();
    setPageInputValue(newPage); // maybe extra
    setCurrentPage(newPage);
  };

  // focus and blur
  const onFocusPageNumber = useRef(currentPage);

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    onFocusPageNumber.current = currentPage;
    e.target.select();
  };

  const onBlur = () => {
    if (pageInput === "") {
      const previousValue = onFocusPageNumber.current;
      setPageInputValue(previousValue);
      setCurrentPage(previousValue); // maybe extra
      return;
    }

    const newPage = parseValidPage(pageInput);
    if (newPage === null) return setPageInputValue(currentPage);
    setPageInputValue(newPage);
    setCurrentPage(newPage);
  };

  // onBookChange
  // potential extra rerenders
  // useLocalState can cover it
  useEffect(() => {
    const lastPageRead = getLocalData(bookPageKey, 1);
    const page = parseValidPage(lastPageRead) ?? 1;
    setPageInputValue(page); // maybe extra
    setCurrentPage(page);
  }, [currentBook]);

  return {
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
  };
};
