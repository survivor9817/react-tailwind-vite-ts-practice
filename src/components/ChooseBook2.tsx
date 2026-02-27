import { useEffect, useState } from "react";
import { FIELDS, filterBooks, GRADES } from "../data/data";
import type { Book, FieldType, GradeType } from "../data/data";
import Select, { type SingleValue, type StylesConfig } from "react-select";
import BookSlider from "./BookSlider";
import BookCard from "./BookCard";

const ChooseBook2 = () => {
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
      width: "120px",
      borderRadius: "12px",
      height: "40px",
      // cursor: "pointer",
    }),
    indicatorsContainer: (provider) => ({
      ...provider,
      direction: "rtl",
    }),
  };
  return (
    <>
      <div className="flex gap-2 mt-6 mx-4">
        <span className="text-xl py-1">کتابخانه پایه </span>
        <Select
          styles={selectCustomStyles}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={GRADES[0]}
          isSearchable={false}
          options={GRADES}
          onChange={(grade) => handleGradeClick(grade as GradeType)}
        />
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

export default ChooseBook2;
