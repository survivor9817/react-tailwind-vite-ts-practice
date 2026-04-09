import { useContext, useEffect, useRef } from "react";
import { createFakeBookPagesContent } from "../data/data";
import { toFaNums } from "../utils/toFaNums";
import { BookContext } from "../Darsyavar";

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

  if (!currentBook || !currentPage) return <p>کتاب و یا صفحه نامعین است.</p>;

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
