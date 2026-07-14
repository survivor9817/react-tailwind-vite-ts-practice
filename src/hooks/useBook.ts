import { useEffect, useRef, useState } from "react";
import { getLocalData } from "../utils/getLocalData";
import { toFaNums } from "../utils/toFaNums";
import { convertToEnglishDigits } from "../utils/convertToEnglishDigits";
import { useLocalStorage } from "./useLocalStorage";
import type { Book } from "../data/booksData";

export const useBookPagination = () => {
  //   const { currentBook, currentPage, setCurrentPage } = useBookContext();

  const grades = GRADES;
  // const [selectedGrade, setSelectedGrade] = useLocalStorage<Grade>("lastSelectedGrade", grades[0]);
  const [currentBook, setCurrentBook] = useLocalStorage<Book | null>("lastBookRead", null);
  // const [currentPage, setCurrentPage] = useLocalStorage<number | null>(
  //   JSON.stringify(currentBook?.id),
  //   null,
  // );
  const bookPageKey = currentBook?.id
    ? `last-visited-page-${currentBook.id}`
    : "last-visited-page-temp";
  const [currentPage, setCurrentPage] = useLocalStorage<number>(bookPageKey, 1);
  const [pageInput, setPageInput] = useState(toFaNums(currentPage));

  const goToPage = (page: number) => {
    if (currentBook?.lastPage == null) return;
    if (!Number.isInteger(page) || page < 1 || page > currentBook?.lastPage) return;
    setCurrentPage(page);
  };

  const goToPrevPage = () => goToPage(+currentPage - 1);

  const goToNextPage = () => goToPage(+currentPage + 1);

  useEffect(() => {
    goToPage(getLocalData(bookPageKey, 1));
  }, [currentBook]);

  const handleInputRange = (e: React.ChangeEvent<HTMLInputElement>) => goToPage(+e.target.value);

  const inputPageNumberRefEl = useRef<HTMLInputElement>(null);
  const getCurrentPageFa = () => (currentPage ? toFaNums(currentPage) : "");
  const lastValidFa = useRef<string>(getCurrentPageFa());
  useEffect(() => {
    const fa = getCurrentPageFa();
    lastValidFa.current = fa;
    if (inputPageNumberRefEl.current) {
      inputPageNumberRefEl.current.value = fa;
    }
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
      const currentPageFa = toFaNums(num);
      lastValidFa.current = currentPageFa;
      if (inputPageNumberRefEl.current) {
        inputPageNumberRefEl.current.value = currentPageFa;
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
    if (!currentPage) return;
    if (!onFocusPageNumber.current) return;

    const value = convertToEnglishDigits(e.target.value.trim());
    value === "" ? goToPage(+onFocusPageNumber.current) : goToPage(+value);
    if (inputPageNumberRefEl.current) {
      inputPageNumberRefEl.current.value = toFaNums(currentPage);
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
    // goToPage,
    goToPrevPage,
    goToNextPage,
    inputPageNumberRefEl,
    handleInputRange,
    handleInputNumber,
    onFocusPageNumber,
    handleFocus,
    handleBlur,
    handleKeyDown,
  };
};
