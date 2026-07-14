import { useEffect, useRef, useState } from "react";
import { getLocalData } from "../utils/getLocalData";
import { toFaNums } from "../utils/toFaNums";
import { convertToEnglishDigits as toEnDigits } from "../utils/convertToEnglishDigits";
import { useLocalStorage } from "./useLocalStorage";
import type { Book } from "../data/booksData";

export const useBookPagination = () => {
  // const grades = GRADES;

  const [currentBook, setCurrentBook] = useLocalStorage<Book | null>("lastBookRead", null);

  const bookPageKey = currentBook?.id
    ? `last-visited-page-${currentBook.id}`
    : "last-visited-page-temp";

  const [currentPage, setCurrentPage] = useLocalStorage<number>(bookPageKey, 1);
  const [pageInput, setPageInput] = useState(toFaNums(currentPage));
  const [pageInputError, setPageInputError] = useState(false);

  useEffect(() => {
    setPageInput(toFaNums(currentPage));
  }, [currentPage]);

  const showError = () => {
    setPageInputError(true);
    setTimeout(() => setPageInputError(false), 300);
  };

  const isPageInRange = (page: number) => {
    return (
      currentBook?.lastPage != null &&
      Number.isInteger(page) &&
      page >= 1 &&
      page <= currentBook.lastPage
    );
  };

  const goToPage = (page: number) => {
    if (isPageInRange(page)) setCurrentPage(page);
  };

  const goToPrevPage = () => goToPage(currentPage - 1);
  const goToNextPage = () => goToPage(currentPage + 1);

  useEffect(() => {
    const lastPageRead = getLocalData(bookPageKey, 1);
    goToPage(lastPageRead);
  }, [currentBook]);

  const handleInputRange = (e: React.ChangeEvent<HTMLInputElement>) => goToPage(+e.target.value);

  const isNumericString = (page: string) => /^[0-9]+$/.test(toEnDigits(page)); // fa or en

  const handleInputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPageString = e.target.value.trim();

    if (inputPageString === "") return setPageInput("");

    if (!isNumericString(inputPageString)) return showError();

    const newPage = Number(toEnDigits(inputPageString));
    if (!isPageInRange(newPage)) return showError();

    setPageInput(toFaNums(newPage));
  };

  const onFocusPageNumber = useRef(currentPage);
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    onFocusPageNumber.current = currentPage;
    e.target.select();
  };

  const handleBlur = () => {
    if (pageInput === "") return setPageInput(toFaNums(onFocusPageNumber.current));

    const num = Number(toEnDigits(pageInput));
    goToPage(num);

    // اگر نامعتبر بود، useEffect بالا دوباره مقدار صحیح را نمایش می‌دهد
    setPageInput(toFaNums(currentPage));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const newPageNumber = Number(toEnDigits(pageInput));
    goToPage(newPageNumber);
  };

  return {
    currentBook,
    currentPage,
    pageInput,
    pageInputError,

    goToPrevPage,
    goToNextPage,

    handleInputRange,
    handleInputNumber,
    handleFocus,
    handleBlur,
    handleKeyDown,
  };
};
