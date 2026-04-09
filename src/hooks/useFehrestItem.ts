import { useContext } from "react";
import { type FehrestSection } from "../data/data";
import { BookContext } from "../Darsyavar";

// [1, 2, 6, 12, 13, 25, 35, 36, 48, 56, 65, 66, 77, 86, 98, 99, 107, 116, 124, 132]
// 27
// => 25

export const collectTitlePages = (fehrest: FehrestSection[]): number[] => {
  return fehrest.flatMap((s) => [s.page, ...(s.sections ? collectTitlePages(s.sections) : [])]);
};

export const findTitlePage = (targetPage: number, titlePages: number[]): number => {
  if (titlePages.includes(targetPage)) return targetPage;
  return Math.max(...titlePages.filter((p) => p < targetPage));
};

export const checkActive = (currentTitlePage: number, section: FehrestSection): boolean => {
  if (currentTitlePage === section.page) return true;
  return !!section.sections?.some((subsection) => checkActive(currentTitlePage, subsection));
};

// THE HOOK
export const useFehrestItem = (currentTitlePage: number, section: FehrestSection) => {
  const { setCurrentPage } = useContext(BookContext);

  const handleClick = () => setCurrentPage(section.page);

  const isActive = checkActive(currentTitlePage, section);

  return { isActive, handleClick };
};
