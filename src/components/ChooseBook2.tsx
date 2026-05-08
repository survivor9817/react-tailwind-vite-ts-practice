import { useEffect, useState } from "react";
import Select, { type StylesConfig } from "react-select";
import BookSlider from "./BookSlider";
import BookCard from "./BookCard";
import { FIELDS, getBooks, GRADES, type Book, type Field, type Grade } from "../data/booksData";
import { useBookContext } from "./BookProvider";

const ChooseBook2 = () => {
  const { selectedGrade, setSelectedGrade } = useBookContext();
  // const [selectedGrade, setSelectedGrade] = useState<Grade>(GRADES[0]);
  const [selectedField, setSelectedField] = useState<Field>(FIELDS[0]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(getBooks({ gradeId: 7 }));

  const filters = {
    gradeId: selectedGrade.id,
    fieldId: selectedField.id,
    // isAvailable: true
  };

  useEffect(() => {
    const availables = getBooks({ ...filters, isAvailable: true });
    const unavailables = getBooks({ ...filters, isAvailable: false });
    const filteredBooks = [...availables, ...unavailables];

    setFilteredBooks(filteredBooks);
  }, [selectedGrade, selectedField]);

  const selectCustomStyles: StylesConfig = {
    control: (provider) => ({
      ...provider,
      direction: "ltr",
      flexDirection: "row-reverse",
      textAlign: "center",
      width: "115px",
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
      <div className="flex gap-2 mt-6 mx-4">
        <span className="text-xl py-1">کتابخانه پایه </span>
        <Select
          styles={selectCustomStyles}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={GRADES[0]}
          isSearchable={false}
          options={GRADES}
          onChange={(grade) => setSelectedGrade(grade as Grade)}
        />
        {selectedGrade.dore === "متوسطه دوم" ? (
          <Select
            styles={selectCustomStyles}
            className="basic-single "
            classNamePrefix="select"
            defaultValue={FIELDS[0]}
            isSearchable={false}
            options={FIELDS}
            onChange={(field) => setSelectedField(field as Field)}
          />
        ) : null}
      </div>

      {/* radife ketaabhaa */}
      <BookSlider>
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            title={book.label}
            coverImage={book.coverImage}
            isAvailable={book.isAvailable}
          />
        ))}
      </BookSlider>
    </>
  );
};

export default ChooseBook2;
