import type { FehrestSection } from "../data/fehrestsData";
import { useBookContext } from "../components/BookProvider";

// sudo code
// [1, 2, 6, 12, 13, 25, 35, 36, 48, 56, 65, 66, 77, 86, 98, 99, 107, 116, 124, 132]
// 27
// => 25

export const collectSectionPages = (fehrest: FehrestSection[]): number[] => {
  return fehrest.flatMap((s) => {
    const subsectionPages = s.sections ? collectSectionPages(s.sections) : [];
    return [s.page, ...subsectionPages];
  });
};

export const findSectionPage = (targetPage: number, sectionPages: number[]): number => {
  const smallerNumbers = sectionPages.filter((p) => p <= targetPage);
  const largestNumber = Math.max(...smallerNumbers);
  return largestNumber;
};

export const checkActive = (currentSectionPage: number, section: FehrestSection): boolean => {
  if (currentSectionPage === section.page) return true;
  return !!section.sections?.some((subsection) => {
    return checkActive(currentSectionPage, subsection);
  });
};

export const useFehrestItem = (currentTitlePage: number, section: FehrestSection) => {
  const { setCurrentPage } = useBookContext();
  const handleClick = () => {
    setCurrentPage(section.page);
  };
  const isActive = checkActive(currentTitlePage, section);
  return { isActive, handleClick };
};
