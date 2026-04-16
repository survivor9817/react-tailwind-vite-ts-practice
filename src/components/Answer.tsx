import { useContext, useEffect, useRef } from "react";
import { BookContext } from "./BookProvider";

type Props = { answer: string | TrustedHTML };

const Answer = ({ answer }: Props) => {
  const answerContainerRef = useRef<HTMLDivElement>(null);
  const { setCurrentPage } = useContext(BookContext);

  useEffect(() => {
    const container = answerContainerRef.current;
    if (!container) return;

    const clickHandler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(".ref-page") as HTMLElement | null;
      if (target) {
        const page = target.dataset.refPage;
        if (page) setCurrentPage(+page);
      }
    };

    container.addEventListener("click", clickHandler);

    return () => container.removeEventListener("click", clickHandler);
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
