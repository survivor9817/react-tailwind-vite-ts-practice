import { useRef, useState, useEffect, useCallback } from "react";
import BookCard from "./BookCard";

type Book = {
  id: number;
  title: string;
  gradeId: number;
  fieldId: number | null;
  coverImage: string;
  isAvailable: boolean;
};

type BookCardListProps = {
  books: Book[];
  scrollAmount?: number;
};

// vaghti rerender mishe bayad scrollesh biaad az sefr
const BookCardList = ({ books, scrollAmount = 400 }: BookCardListProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    // در RTL مقدار scrollLeft منفی یا برعکس است — Math.abs مشکل را حل می‌کند
    const scrolled = Math.abs(el.scrollLeft);
    const maxScroll = el.scrollWidth - el.clientWidth;

    setCanScrollRight(scrolled < maxScroll - 1);
    setCanScrollLeft(scrolled > 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="p-2 rounded-xl transition-colors cursor-pointer
                     bg-gray-100 hover:bg-gray-200
                     disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-100"
          aria-label="بعدی"
        >
          <i className="msr text-5xl">arrow_circle_right</i>
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="p-2 rounded-xl transition-colors cursor-pointer
                     bg-gray-100 hover:bg-gray-200
                     disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-100"
          aria-label="قبلی"
        >
          <i className="msr text-5xl">arrow_circle_left</i>
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {books.map((book) => (
          <div key={book.id} className="shrink-0">
            <BookCard
              title={book.title}
              coverImage={book.coverImage}
              isAvailable={book.isAvailable}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCardList;
