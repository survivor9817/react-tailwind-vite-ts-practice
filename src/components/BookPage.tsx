import { useEffect, useRef } from "react";
import { createFakeBookPagesContent } from "../data/data";
import { toFaNums } from "../utils/toFaNums";

type Props = {
  bookId: number;
  pageNumber: number;
};

const BookPage = ({ bookId, pageNumber }: Props) => {
  const bookData = createFakeBookPagesContent(bookId);

  const pageNum = toFaNums(pageNumber);

  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView({
        // behavior: "smooth",
        block: "start",
      });

      // pageRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [bookId, pageNumber]);

  return (
    <section ref={pageRef} key={pageNumber} id={`page${pageNumber}`} className="page">
      <div>{`صفحه ${pageNum}`}</div>
      <div>
        <p>{bookData[pageNumber - 1].content}</p>
        <img src="./s.img" alt="" width={"700px"} height={"600px"} />
      </div>
    </section>
  );
};

export default BookPage;
