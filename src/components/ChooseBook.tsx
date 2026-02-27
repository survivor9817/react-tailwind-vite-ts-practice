import { useEffect, useState } from "react";
import { FIELDS, filterBooks, GRADES } from "../data/data";
import type { Book, FieldType, GradeType } from "../data/data";
import Select, { type SingleValue, type StylesConfig } from "react-select";
import BookSlider from "./BookSlider";
import BookCard from "./BookCard";
import Button from "./Button";

const ChooseBook = () => {
  const [selectedGrade, setSelectedGrade] = useState(GRADES[0]);
  const [selectedField, setSelectedField] = useState<FieldType | null>(FIELDS[0]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(filterBooks(7, null));

  const handleGradeClick = (grade: GradeType) => {
    setSelectedGrade(grade);
    if (grade.dore === "متوسطه دوم") return;
    setSelectedField(null);
  };

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
    <>
      <div className="flex flex-col items-center justify-center mt-8">
        <p className="text-lg">کتابت رو بردار و خواندن رو شروع کن</p>

        <div className="grid grid-cols-3 flex-wrap justify-center gap-2 w-75 sm:w-90 md:w-110 my-4 ">
          {GRADES.map((grade) => (
            <Button
              key={grade.id}
              isActive={selectedGrade.label === grade.label}
              onClick={() => handleGradeClick(grade)}
            >
              {grade.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-6 mx-4">
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

      {/* radife ketaabhaa */}
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
    </>
  );
};

export default ChooseBook;
