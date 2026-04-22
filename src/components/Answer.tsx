import { useEffect, useRef } from "react";
import { useBookContext } from "./BookProvider";
import { useStudyPageLayoutContext } from "./StudyPageLayoutProvider";

type Props = { answer: string | TrustedHTML };

const Answer = ({ answer }: Props) => {
  // const { answerContainerRef } = useAnswer();
  const answerContainerRef = useRef<HTMLDivElement>(null);
  const { currentBook, setCurrentPage } = useBookContext();
  const { goToBook } = useStudyPageLayoutContext();

  useEffect(() => {
    const container = answerContainerRef.current;
    if (!container) return;

    const goToQuestionRef = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(".ref-page") as HTMLElement | null;
      if (target) {
        if (!currentBook?.lastPage) return;
        const refPageNumber = Number(target.dataset.refPage);
        if (!refPageNumber || isNaN(refPageNumber) || refPageNumber > currentBook?.lastPage) return;
        setCurrentPage(refPageNumber);
        goToBook();
      }
    };

    container.addEventListener("click", goToQuestionRef);

    return () => container.removeEventListener("click", goToQuestionRef);
  }, [answer]);

  return (
    <div
      ref={answerContainerRef}
      className="text-[16px] py-4 px-4 text-justify leading-7"
      dangerouslySetInnerHTML={{ __html: answer }}
    />
  );
};

export default Answer;
