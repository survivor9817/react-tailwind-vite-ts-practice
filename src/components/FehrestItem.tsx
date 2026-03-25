import { toFaNums } from "../utils/toFaNums";
import type { FehrestSectionType } from "../data/data";
import { useFehrestItem } from "../hooks/useFehrestItem";

type Props = {
  section: FehrestSectionType;
  currentSectionStartPage: number;
};

const FehrestItem = ({ section, currentSectionStartPage }: Props) => {
  const { isActive, handleClick } = useFehrestItem(currentSectionStartPage, section);

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
            {section.sections.map((section) => {
              return (
                <FehrestItem
                  key={section.title}
                  section={section}
                  currentSectionStartPage={currentSectionStartPage}
                />
              );
            })}
          </ol>
        )}
      </li>
    </>
  );
};

export default FehrestItem;
