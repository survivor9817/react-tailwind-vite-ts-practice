import { useState } from "react";
import { BOOKS, FIELDS, GRADES } from "../data/data";
import Select from "react-select";
import BookCardList from "./BookCardList";

const LandingPage = () => {
  const [activeGrade, setActiveGrade] = useState("هفتم");
  const [selectedField, setSelectedField] = useState(null);

  console.log(selectedField);

  function handleGradeClick(gradeId: string) {
    setActiveGrade(gradeId);
    // setSelectedField(selectedField);
  }

  const selectCustomStyles = {
    control: (provider) => ({
      ...provider,
      width: "150px",
      borderRadius: "12px",
      textAlign: "center",
      // borderRadius: "120px",
      // fontSize: "16px",
      // textAlign: "right",
      // paddingRight: "12px",
    }),
    options: (provider) => ({ ...provider }),
  };

  return (
    <div className="flex justify-center border-2">
      <div className="min-w-75 max-w-4xl w-200">
        <nav className="flex w-full justify-between gap-4 border-2">
          <div className="flex gap-4">
            <div className="">logo</div>
            <div className="">brand name</div>
          </div>
          <div className="flex gap-4">
            <div className="">login</div>
            <div className="">signup</div>
          </div>
        </nav>

        <div>.با درس‌یاور، همین الان درس‌خواندن را شروع کن</div>

        <div className="grid grid-cols-3 flex-wrap justify-center gap-2 w-fit my-4 ">
          {GRADES.map((grade) => (
            <button
              key={grade.id}
              onClick={() => handleGradeClick(grade.label)}
              className={`
                  rounded-full px-4 py-2 transition-transform duration-200
                  w-24 h-10 cursor-pointer font-medium text-sm
                  ${
                    activeGrade === grade.label
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
        <div className="flex gap-2 py-4">
          <span className="text-xl">کتاب‌های پایه {activeGrade}</span>
          {activeGrade === "دهم" || activeGrade === "یازدهم" || activeGrade === "دوازدهم" ? (
            <Select
              styles={selectCustomStyles}
              className="basic-single "
              classNamePrefix="select"
              defaultValue={FIELDS[0]}
              isRtl={true}
              // isDisabled={false}
              // isLoading={false}
              // isClearable={true}
              isSearchable={true}
              name="color"
              options={FIELDS}
              onChange={(field) => setSelectedField(field)}
            />
          ) : null}
        </div>

        {/* render books */}
        <div className="flex gap-4 p-4 border-2 w-full overflow-hidden overflow-x-scroll">
          <BookCardList books={BOOKS} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
