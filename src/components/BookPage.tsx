import { useContext, useEffect, useRef } from "react";
import { toFaNums } from "../utils/toFaNums";
import { createFakeBookPagesContent } from "../data/fehrestsData";
import { BookContext } from "./BookProvider";
import { useFakeFetch } from "../hooks/useFakeFetch";
import ErrorFallback from "./ErrorFallback";
import UnavailableBook from "./UnavailableBook";

const BookPage = () => {
  const { currentBook, currentPage } = useContext(BookContext);

  const pageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView({
        // behavior: "smooth",
        block: "start",
      });

      // pageRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentBook, currentPage]);

  if (!currentBook || !currentPage) return <UnavailableBook />;

  // make it async with fakeFetch and render a skeleton when component is loading
  // const pageContent = createFakeBookPagesContent(currentBook?.id)[currentPage - 1].content;
  const {
    data: pageContent,
    isError,
    isLoading,
    refetch,
  } = useFakeFetch(createFakeBookPagesContent(currentBook?.id)[currentPage - 1].content, {
    delay: 3000,
  });

  const pageNum = toFaNums(currentPage);

  if (isLoading) {
    return (
      <div className="flex justify-center my-4 h-64">
        <span className="animate-pulse">در حال بارگذاری صفحه {pageNum} ...</span>
      </div>
    );
  }

  if (isError) return <ErrorFallback onRefetch={refetch} />;

  return (
    <>
      {currentBook && currentPage && (
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
      )}
    </>
  );
};

export default BookPage;
