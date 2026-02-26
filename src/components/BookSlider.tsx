import { useRef, useState, useEffect, useCallback } from "react";
import IconBtn from "./IconBtn";

type BookSliderProps = {
  children: React.ReactNode;
  scrollAmount?: number;
};

const BookSlider = ({ children, scrollAmount = 400 }: BookSliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(true);

  const updateScrollBtnsState = useCallback(() => {
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
    updateScrollBtnsState();
    el.addEventListener("scroll", updateScrollBtnsState);
    return () => el.removeEventListener("scroll", updateScrollBtnsState);
  }, [updateScrollBtnsState]);

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
    <div className="flex flex-col  h-90 sm:h-100 md:h-108 ">
      {/* horizontally scrollable div */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto p-4
                  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* cards must be rendered here */}
        {children}
      </div>

      {/* left and right btns container */}
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
