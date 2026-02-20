import { useRef, useState, useEffect, useCallback } from "react";
import BookCard from "./BookCard";
import IconBtn from "./IconBtn";
import type { Book } from "../data/data";

type BookSliderProps = {
  books: Book[];
  scrollAmount?: number;
};

// vaghti rerender mishe bayad scrollesh biaad az sefr
const BookSlider = ({ books, scrollAmount = 400 }: BookSliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    // در RTL مقدار scrollLeft منفی یا برعکس است — Math.abs مشکل را حل می‌کند
    const scrolled = Math.abs(el.scrollLeft);
    const maxScroll = el.scrollWidth - el.clientWidth;

    setCanScrollRight(scrolled > 1);
    setCanScrollLeft(scrolled < maxScroll - 1);
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
    <div className="flex flex-col gap-2">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto p-4
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

      <div className="flex justify-end px-2">
        <IconBtn
          onClick={() => scroll("left")}
          isDisabled={!canScrollRight}
          icon={"arrow_circle_right"}
          aria-label="قبلی"
          className="rounded-full transition-colors cursor-pointer
                     disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-100"
        />
        <IconBtn
          onClick={() => scroll("right")}
          isDisabled={!canScrollLeft}
          icon={"arrow_circle_left"}
          aria-label="بعدی"
          className="rounded-full transition-colors cursor-pointer
                     disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-100"
        />
      </div>
    </div>
  );
};

export default BookSlider;
