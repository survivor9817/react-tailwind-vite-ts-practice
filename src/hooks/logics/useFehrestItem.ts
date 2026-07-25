import type { FehrestSection } from "../data/fehrestsData";
import { useBookContext } from "../components/BookProvider";

// sudo code
// [1, 2, 6, 12, 13, 25, 35, 36, 48, 56, 65, 66, 77, 86, 98, 99, 107, 116, 124, 132]
// 27
// => 25

export const collectTitlePages = (fehrest: FehrestSection[]): number[] => {
  return fehrest.flatMap((s) => [s.page, ...(s.sections ? collectTitlePages(s.sections) : [])]);
};

export const findTitlePage = (target: number, titles: number[]): number => {
  return titles.includes(target) ? target : Math.max(...titles.filter((p) => p < target));
};

export const checkActive = (currentTitlePage: number, section: FehrestSection): boolean => {
  if (currentTitlePage === section.page) return true;
  return !!section.sections?.some((subsection) => checkActive(currentTitlePage, subsection));
};

export const useFehrestItem = (currentTitlePage: number, section: FehrestSection) => {
  const { setCurrentPage } = useBookContext();
  const handleClick = () => setCurrentPage(section.page);
  const isActive = checkActive(currentTitlePage, section);
  return { isActive, handleClick };
};
