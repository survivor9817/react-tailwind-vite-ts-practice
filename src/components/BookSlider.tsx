import { useEffect } from "react";
import IconBtn from "./IconBtn";
import { useShelfBtns } from "../hooks/useShelfBtns";

type BookSliderProps = {
  children: React.ReactNode;
};

const BookSlider = ({ children }: BookSliderProps) => {
  const { scrollRef, canScrollLeft, canScrollRight, scroll } = useShelfBtns();

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ left: 0 });
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
          i={"arrow_circle_right"}
          // iconSize={"48px"}
          // className="text-[48px]"
        />
        <IconBtn
          onClick={() => scroll("left")}
          isDisabled={!canScrollLeft}
          i={"arrow_circle_left"}
          // iconSize={"48px"}
          // className="text-[48px]"
        />
      </div>
    </div>
  );
};

export default BookSlider;
