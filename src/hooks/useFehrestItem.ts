import { useContext, useEffect, useState } from "react";
import { BookContext } from "../Darsyavar";
import { type FehrestSectionType } from "../data/data";

const allRefPagesInOrder = (fehrestData: FehrestSectionType[]): number[] => {
  return fehrestData.flatMap((s) => [
    s.page,
    ...(s.sections ? allRefPagesInOrder(s.sections) : []),
  ]);
};

// [1, 2, 6, 12, 13, 25, 35, 36, 48, 56, 65, 66, 77, 86, 98, 99, 107, 116, 124, 132]
// 27
// => 25

export const findSectionStartPage = (page: number, fehrestData: FehrestSectionType[]): number => {
  const fehrestArr = allRefPagesInOrder(fehrestData);
  if (fehrestArr.includes(page)) return page;
  return Math.max(...fehrestArr.filter((page) => page < page));
};

const checkActive = (currentSectionStartPage: number, section: FehrestSectionType): boolean => {
  if (currentSectionStartPage === section.page) return true;
  return !!section.sections?.some((subsection) => checkActive(currentSectionStartPage, subsection));
};

// THE HOOK
export const useFehrestItem = (currentSectionStartPage: number, section: FehrestSectionType) => {
  const { setCurrentPage } = useContext(BookContext);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { refPage } = event.currentTarget.dataset;
    refPage && setCurrentPage(+refPage);
  };

  const [isActive, setActive] = useState(false);
  useEffect(() => {
    setActive(checkActive(currentSectionStartPage, section));
  }, [section, currentSectionStartPage]);

  return { isActive, handleClick };
};
