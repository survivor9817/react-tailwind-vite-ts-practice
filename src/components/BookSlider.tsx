import { useRef, useState, useEffect, useCallback } from "react";
import IconBtn from "./IconBtn";

type BookSliderProps = {
  children: React.ReactNode;
  scrollAmount?: number;
};

// vaghti rerender mishe bayad scrollesh biaad az sefr
const BookSlider = ({ children, scrollAmount = 400 }: BookSliderProps) => {
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
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollTo({
      left: 0,
      behavior: "auto",
    });
  }, [children]);

  return (
    <div className="flex flex-col">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto p-4 
                  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* cards must be rendered here */}
        {children}
      </div>

      <div className="flex justify-end px-2">
        <IconBtn
          onClick={() => scroll("right")}
          isDisabled={!canScrollRight}
          icon={"arrow_circle_right"}
          className="rounded-full transition-colors cursor-pointer
                     disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-100"
        />
        <IconBtn
          onClick={() => scroll("left")}
          isDisabled={!canScrollLeft}
          icon={"arrow_circle_left"}
          className="rounded-full transition-colors cursor-pointer
                     disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-100"
        />
      </div>
    </div>
  );
};

export default BookSlider;
