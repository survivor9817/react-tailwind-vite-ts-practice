import { toFaNums } from "../utils/toFaNums";
import { useBookContext } from "./BookProvider";
import { useBookPageScroll } from "../hooks/useBookPageScroll";
import ErrorFallback from "./ErrorFallback";
import UnavailableBookError from "./UnavailableBookError";
import BookPageSkeleton from "./BookPageSkeleton";
import { useBookPageData } from "../hooks/useBookPageData";
import { useEffect } from "react";

const BookPage = () => {
  const { pageRef } = useBookPageScroll();
  const { currentBook, currentPage } = useBookContext();
  const { pageContent, isLoading, isError, loadPageContent } = useBookPageData();
  useEffect(() => {
    if (!currentBook || !currentPage) return;
    loadPageContent(currentBook.id, currentPage);
    // ye fekri be haale abort signal bokon. alan nadare bayad dashte bashe.
  }, [currentBook, currentPage]);

  if (!currentBook || !currentPage) return <UnavailableBookError />;
  if (isLoading) return <BookPageSkeleton />;
  if (isError)
    return <ErrorFallback onRefetch={() => loadPageContent(currentBook.id, currentPage)} />;

  const pageNum = toFaNums(currentPage);
  return (
    <section
      ref={pageRef}
      // key={currentPage}
      id={`page${currentPage}`}
      className="page relative"
    >
      <div className="absolute top-0 left-0 bg-pink-400 m-1 p-2 rounded">{`${pageNum}`}</div>
      <div className="p-2 pt-8">
        <p>{pageContent}</p>
        <img src="./s.img" alt="" width={"700px"} height={"600px"} />
      </div>
    </section>
  );
};

export default BookPage;
