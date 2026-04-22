import { useCallback, useEffect, useRef, useState } from "react";

// controller btns for a horizontally scrollable dom element
export const useShelfBtns = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(true);

  const updateScrollBtnsState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

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

  const scroll = (direction: "left" | "right", scrollAmount: number = 400) => {
    scrollRef.current?.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return { scrollRef, canScrollLeft, canScrollRight, scroll };
};
