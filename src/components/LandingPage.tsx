import { useEffect, useState } from "react";
import { FIELDS, filterBooks, GRADES } from "../data/data";
import type { Book, FieldType, GradeType } from "../data/data";
import Select, { type SingleValue, type StylesConfig } from "react-select";
import BookSlider from "./BookSlider";
import BookCard from "./BookCard";
import HeroTypeWriter from "./HeroTypeWriter";

import ArrowGif from "../../public/imgs/Arrow down icon animation.gif";

const LandingPage = () => {
  const [selectedGrade, setSelectedGrade] = useState(GRADES[0]);
  const [selectedField, setSelectedField] = useState<FieldType | null>(FIELDS[0]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(filterBooks(7, null));

  // console.log(selectedGrade, selectedField);

  function handleGradeClick(grade: GradeType) {
    setSelectedGrade(grade);
    if (grade.dore === "متوسطه دوم") return;
    setSelectedField(null);
  }

  useEffect(() => {
    setFilteredBooks(filterBooks(selectedGrade.id, selectedField?.id));
  }, [selectedGrade, selectedField]);

  const selectCustomStyles: StylesConfig = {
    control: (provider) => ({
      ...provider,
      direction: "ltr",
      flexDirection: "row-reverse",
      textAlign: "center",
      width: "110px",
      borderRadius: "12px",
      height: "40px",
    }),
    indicatorsContainer: (provider) => ({
      ...provider,
      direction: "rtl",
    }),
  };

  return (
    <div className="flex justify-center">
      <div className="min-w-75 max-w-4xl w-200">
        <nav
          className="flex mx-2 justify-between gap-4 border-2 border-t-0 
                        rounded-b-3xl bg-[#eee] border-[#bcbcbc] h-14"
        >
          <div className="flex justify-center gap-4 mx-1">
            <a href="#" className="flex items-center mr-2 ">
              <i className="msr text-[32px]">school</i>

              <div className="text-2xl my-1 px-2 rounded-3xl border-[#bcbcbc] ">درس‌یاور</div>
            </a>
          </div>
          <div className="flex gap-4 mx-1">
            <button
              className="border-2 my-1 px-4 rounded-3xl border-[#bcbcbc] hover:bg-[#ddd] 
              transition-colors duration-100 ease-in-out active:scale-[0.95] cursor-pointer text-sm"
            >
              ورود / ثبت‌نام
            </button>
          </div>
        </nav>

        <div className="pt-14 pb-8">
          <span className="text-3xl">
            <HeroTypeWriter />
          </span>
        </div>

        <div className="flex justify-center">
          <img src={ArrowGif} alt="" className="size-20 sm:size-26" />
          <img src={ArrowGif} alt="" className="size-20 sm:size-26" />
          <img src={ArrowGif} alt="" className="size-20 sm:size-26" />
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
          <p className="text-lg">کتابت رو بردار و خواندن رو شروع کن</p>

          <div className="grid grid-cols-3 flex-wrap justify-center gap-2 w-75 sm:w-90 md:w-110 my-4 ">
            {GRADES.map((grade) => (
              <button
                key={grade.id}
                onClick={() => handleGradeClick(grade)}
                className={`
                  rounded-full px-4 py-2 transition-transform duration-200
                  h-10 cursor-pointer font-medium text-sm
                  ${
                    selectedGrade.label === grade.label
                      ? "bg-gray-950 text-white shadow-lg transform scale-105"
                      : "bg-gray-200 text-black hover:bg-gray-300"
                  }
                  hover:shadow-md active:scale-95
                `}
              >
                {grade.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex  w-75 gap-2 mt-6 mx-4">
          <span className="text-xl py-1">کتابخانه پایه {selectedGrade.label}</span>
          {selectedGrade.dore === "متوسطه دوم" ? (
            <Select
              styles={selectCustomStyles}
              className="basic-single "
              classNamePrefix="select"
              defaultValue={FIELDS[0]}
              isSearchable={false}
              options={FIELDS}
              onChange={(field) => setSelectedField(field as SingleValue<FieldType>)}
            />
          ) : null}
        </div>

        <BookSlider>
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              coverImage={book.coverImage}
              isAvailable={book.isAvailable}
            />
          ))}
        </BookSlider>
      </div>
    </div>
  );
};

export default LandingPage;
