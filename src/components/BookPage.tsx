import { toFaNums } from "../utils/toFaNums";
import { useBookContext } from "./BookProvider";
import { useBookPageScroll } from "../hooks/useBookPageScroll";
import ErrorFallback from "./ErrorFallback";
import UnavailableBookError from "./UnavailableBookError";
import BookPageSkeleton from "./BookPageSkeleton";
import { useBookPageData } from "../hooks/useBookPageData";

const BookPage = () => {
  const { pageRef } = useBookPageScroll();

  const { currentBook, currentPage } = useBookContext();

  if (!currentBook || !currentPage) return <UnavailableBookError />;

  const { pageContent, isLoading, isError, loadPageContent } = useBookPageData(
    currentBook?.id,
    currentPage,
  );

  if (isLoading) return <BookPageSkeleton />;

  if (isError) return <ErrorFallback onRefetch={loadPageContent} />;

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
