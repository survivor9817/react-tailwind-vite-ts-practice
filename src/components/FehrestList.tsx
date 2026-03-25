import { useContext } from "react";
import { getFehrestById } from "../data/data";
import FehrestItem from "./FehrestItem";
import { BookContext } from "../Darsyavar";
import { findSectionStartPage } from "../hooks/useFehrestItem";

const FehrestList = () => {
  const { currentPage, currentBook } = useContext(BookContext);

  const currentFehrest = getFehrestById(currentBook?.id as number);

  const currentSectionStartPage = findSectionStartPage(currentPage, currentFehrest);

  return (
    <ol id="fehrestList" className="fehrest-list mt-4">
      {currentFehrest.map((section) => {
        return (
          <FehrestItem
            key={section.page}
            section={section}
            currentSectionStartPage={currentSectionStartPage}
          />
        );
      })}
    </ol>
  );
};

export default FehrestList;
