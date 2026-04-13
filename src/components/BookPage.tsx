import { useContext, useEffect, useRef } from "react";
import { toFaNums } from "../utils/toFaNums";
import { BookContext } from "../Darsyavar";
import { createFakeBookPagesContent } from "../data/fehrestsData";
import IconBtn from "./IconBtn";

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

  if (!currentBook || !currentPage) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-125 p-2">
        <div className="text-red-500 text-center">
          لطفاً کتاب را از فهرست سمت راست
          <IconBtn i={"list"} className="text-5xl scale-x-[-1] inline-flex translate-y-4 m-2" />
          انتخاب کنید.
        </div>
      </div>
    );
  }

  const pageContent = createFakeBookPagesContent(currentBook?.id)[currentPage - 1].content;
  const pageNum = toFaNums(currentPage);

  return (
    <>
      {currentBook && currentPage && (
        <section ref={pageRef} key={currentPage} id={`page${currentPage}`} className="page">
          <div>{`صفحه ${pageNum}`}</div>
          <div>
            <p>{pageContent}</p>
            <img src="./s.img" alt="" width={"700px"} height={"600px"} />
          </div>
        </section>
      )}
    </>
  );
};

export default BookPage;
