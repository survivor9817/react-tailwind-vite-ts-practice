import { toFaNums } from "../utils/toFaNums";
// import { useFehrestItem } from "../hooks/useFehrestItem";
import type { FehrestSectionType } from "../data/data";
import { useContext } from "react";
import { BookContext } from "../Darsyavar";

type Props = {
  section: FehrestSectionType;
  // currentSectionStartPage: number;
  nextSectionPage: number;
  isActive: boolean;
};

const FehrestItem = ({ section, isActive, subsectionPages }: Props) => {
  const { currentPage, setCurrentPage } = useContext(BookContext);

  const renderedSubsections = section.sections?.map((subsection, index) => {
    if (!section.sections) return false;
    const subsectionPages = {
      parent: parentNextSectionPage,
      next: section.sections[index + 1]?.page,
    };
    const nextSubsectionPage = section.sections[index + 1]?.page;

    const activeConditionOne = currentPage >= subsection.page && currentPage < nextSubsectionPage;
    const activeConditionTwo =
      nextSubsectionPage === undefined &&
      currentPage >= subsection.page &&
      currentPage < nextSectionPage;

    // is active and should expand
    const isActive = activeConditionOne || activeConditionTwo;

    return (
      <FehrestItem
        key={subsection.title}
        section={subsection}
        isActive={isActive}
        subsectionPages={subsectionPages}
      />
    );
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const refPageNumber = event.currentTarget.dataset.refPage;
    if (!refPageNumber) return;
    setCurrentPage(+refPageNumber); // deghat kon in mitone dar hozoore observer nabaashe
    // const relatedPage = document.querySelector(`#page${refPageNumber}`);
    // relatedPage?.scrollIntoView();
  };

  return (
    <>
      <li>
        <div
          className={`text-black font-semibold truncate text-base py-1.25 px-2 my-1 no-underline rounded
            cursor-pointer transition-colors duration-500 
            ${
              isActive
                ? "bg-[rgba(225,163,193)] hover:bg-[rgb(225,163,193)]"
                : "hover:bg-[rgb(225,163,193,0.6)]"
            }`}
          data-ref-page={section.page}
          onClick={handleClick}
        >
          {section.title} {toFaNums(section.page)}
        </div>

        {section.sections && section.sections.length > 0 && (
          <ol
            className={`border-r-2 border-r-black pr-1 mb-2 mr-3 overflow-hidden 
          transition-[max-height] duration-300 ease-in-out max-h-0 ${isActive ? "max-h-screen" : ""}`}
          >
            {renderedSubsections}
          </ol>
        )}
      </li>
    </>
  );
};

export default FehrestItem;
