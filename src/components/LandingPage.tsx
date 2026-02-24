import { useEffect, useState } from "react";
import { FIELDS, filterBooks, GRADES } from "../data/data";
import type { Book, FieldType, GradeType } from "../data/data";
import Select, { type SingleValue, type StylesConfig } from "react-select";
import BookSlider from "./BookSlider";
import BookCard from "./BookCard";

const LandingPage = () => {
  const [selectedGrade, setSelectedGrade] = useState(GRADES[0]);
  const [selectedField, setSelectedField] = useState<FieldType | null>(null);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(filterBooks(7, null));

  function handleGradeClick(grade: GradeType) {
    setSelectedGrade(grade);
    if (grade.dore === "متوسطه دوم") return;
    setSelectedField(null);
  }

  useEffect(() => {
    const allBooks = filterBooks(selectedGrade.id, selectedField?.id);
    const availableBooks = allBooks.filter((book) => book.isAvailable);
    const unavailableBooks = allBooks.filter((book) => !book.isAvailable);
    setFilteredBooks([...availableBooks, ...unavailableBooks]);
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
    <div className="flex justify-center border-2">
      <div className="min-w-75 max-w-4xl w-200">
        <nav className="flex w-full justify-between gap-4 border-2">
          <div className="flex gap-4">
            <div className="">لوگو</div>
            <div className="">نام برند</div>
          </div>
          <div className="flex gap-4">
            <div className="">ورود</div>
            <div className="">ثبت‌نام</div>
          </div>
        </nav>

        <div>.با درس‌یاور، همین الان درس‌خواندن را شروع کن</div>
        <div>کتابخانه مدرسه</div>

        <div className="grid grid-cols-3 flex-wrap justify-center gap-2 w-75 my-4 ">
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
        <div className="flex justify-between w-75 gap-2 pt-4">
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
