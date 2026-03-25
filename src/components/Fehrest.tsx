import { useContext } from "react";
import { BookContext } from "../Darsyavar.tsx";
import { getBookById, getOptionsOfBookSelector } from "../data/data.ts";
import { useMediaQuery } from "../hooks/useMediaQuery.ts";
import IconBtn from "./IconBtn.tsx";
import Select, { type ActionMeta, type SingleValue, type StylesConfig } from "react-select";
import FehrestList from "./FehrestList.tsx";

type Props = {
  onClose: () => void;
  isFehrestOpen: boolean;
};

type BookOption = {
  value: number; // آی‌دی کتاب
  label: string; // نمایش در منو
};

const Fehrest = ({ onClose, isFehrestOpen }: Props) => {
  const bookSelectorStyles: StylesConfig<BookOption, false> = {
    control: (provider) => ({
      ...provider,
      border: "2px solid rgb(200, 200, 200)",
      textAlign: "center",
      width: "100%",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "900",
      height: "46px",
      backgroundColor: "#ebebeb",
      cursor: "pointer",
    }),
    indicatorsContainer: (provider) => ({
      ...provider,
    }),
  };

  // async state react query tor bayad anjam beshe
  const bookSelectorOptions = getOptionsOfBookSelector();

  const { setCurrentBook } = useContext(BookContext);
  const handleBookChange = (selected: SingleValue<BookOption>, _action: ActionMeta<BookOption>) => {
    if (selected) setCurrentBook(getBookById(selected.value));
  };

  const isSmallScreen = useMediaQuery("(max-width: 1440px)");

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
        onClick={onClose}
        style={{ display: isFehrestOpen && isSmallScreen ? "block" : "none" }}
      ></div>
      <div
        className="fixed top-0 right-0 w-80 h-screen p-3 rounded-tl-3xl rounded-bl-3xl bg-[#ebebeb] 
          transition-transform duration-300 ease-in-out translate-x-0  shadow-[-2px_0px_5px_0px_rgba(0,0,0,0.5)]
          z-70 overflow-x-hidden overflow-y-auto"
        style={{ transform: `translateX(${isFehrestOpen ? 0 : 105}%)` }}
      >
        <IconBtn
          className="absolute top-0 left-0 m-2 z-50"
          iconName="cancel"
          iconSize="36px"
          onClick={onClose}
        />

        <div className="h-full overflow-auto [scrollbar-width:none] [-ms-overflow-style:none]">
          <header className="flex justify-center">
            <div className="relative mt-10 w-73">
              <label
                // htmlFor="BookSelector"
                className="absolute text-sm z-10 mx-4 -translate-y-3 bg-[#ebebeb] px-2"
              >
                فهرست کتاب
              </label>
              <Select<BookOption, false>
                // id="BookSelector"
                styles={bookSelectorStyles}
                defaultValue={bookSelectorOptions[0]}
                options={bookSelectorOptions}
                className="basic-single"
                classNamePrefix="select"
                isRtl={true}
                isSearchable={true}
                onChange={handleBookChange}
              />
            </div>
          </header>

          <FehrestList />
        </div>
      </div>
    </>
  );
};

export default Fehrest;
