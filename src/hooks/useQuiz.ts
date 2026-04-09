import { useContext, useEffect, useRef, useState } from "react";
import { BookContext } from "../Darsyavar";
import type { ActionMeta, SingleValue } from "react-select";
import type { FilterOption } from "../data/data";

export const useQuiz = () => {
  //   ---------- use quiz ----------
  const [isQuizOn, setIsQuizOn] = useState(false);
  const showQuizView = () => setIsQuizOn(true);
  const showFilterView = () => setIsQuizOn(false);

  const [startQuizLoading, setStartQuizLoading] = useState(false);

  const startQuiz = (formData: FormData) => {
    setStartQuizLoading(true);
    console.log(formData);
    setTimeout(() => {
      showQuizView();
      setStartQuizLoading(false);
    }, 1000);
  };

  // const endQuiz = () => {

  // }

  return { isQuizOn, startQuizLoading, startQuiz };
};
