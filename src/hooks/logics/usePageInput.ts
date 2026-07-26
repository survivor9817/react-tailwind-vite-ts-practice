import { useEffect, useRef, useState } from "react";
import { toFaNums as toFaDigits } from "../../utils/toFaNums";
import { convertToEnglishDigits as toEnDigits } from "../../utils/convertToEnglishDigits";
import useTimeoutFn from "./useTimeoutFn";

export const usePageInput = (
  currentPage: number,
  setCurrentPage: (page: number) => void,
  maxPage: number, // behtare faghat current book ro negahdaarim.
) => {
  const [pageInput, setPageInput] = useState(toFaDigits(currentPage));
  const [pageInputError, setPageInputError] = useState(false);
  const onFocusPageNumber = useRef(currentPage);

  const { set: autoHideError } = useTimeoutFn(() => {
    setPageInputError(false);
  }, 300);

  const showInputError = () => {
    setPageInputError(true);
    autoHideError();
  };

  const setPageInputValue = (page: number) => {
    setPageInput(toFaDigits(page));
  };

  // #1
  useEffect(() => {
    setPageInputValue(currentPage);
  }, [currentPage]);

  // #2
  // const [prevPage, setPrevPage] = useState(currentPage);
  // if (currentPage !== prevPage) {
  //   setPrevPage(currentPage);
  //   setPageInput(toFaDigits(currentPage));
  // }

  const isPageInRange = (page: number, min: number, max: number) => {
    return Number.isInteger(page) && page >= min && page <= max;
  };

  const parseValidPage = (page: string | number): number | null => {
    const min = 1;
    const max = maxPage || 2;

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
  return {
    pageInput,
    pageInputError,
    onSliderChange,
    onInputChange,
    onFocus,
    onBlur,
    onInputKeyDown,
    goToPage,
  };
};
