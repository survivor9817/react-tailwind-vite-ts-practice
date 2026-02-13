import { useState } from "react";

const LandingPage = () => {
  const [activeGrade, setActiveGrade] = useState(null);

  const grades = [
    { id: 7, name: "هفتم" },
    { id: 8, name: "هشتم" },
    { id: 9, name: "نهم" },
    { id: 10, name: "دهم" },
    { id: 11, name: "یازدهم" },
    { id: 12, name: "دوازدهم" },
  ];

  const handleGradeClick = (gradeId) => {
    setActiveGrade(gradeId);
  };

  return (
    <div className="flex justify-center border-2 min-h-screen">
      <div className="max-w-3xl">
        <nav className="flex w-full justify-between gap-4 border-2 p-4">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
            <div className="text-xl font-bold">درس‌یاور</div>
          </div>
          <div className="flex gap-4 items-center">
            <button className="px-4 py-2 hover:text-blue-600 transition-colors">ورود</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              ثبت‌نام
            </button>
          </div>
        </nav>

        <div className="text-center text-2xl font-bold my-8">
          .با درس‌یاور، همین الان درس‌خواندن را شروع کن
        </div>

        <div className="flex justify-center my-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-md">
            {grades.map((grade) => (
              <button
                key={grade.id}
                onClick={() => handleGradeClick(grade.id)}
                className={`
                  rounded-full px-4 py-2 transition-all duration-200
                  h-12 cursor-pointer font-medium text-lg
                  ${
                    activeGrade === grade.id
                      ? "bg-blue-500 text-white shadow-lg transform scale-105"
                      : "bg-gray-200 text-black hover:bg-gray-300"
                  }
                  hover:shadow-md active:scale-95
                `}
              >
                {grade.name}
              </button>
            ))}
          </div>
        </div>

        {/* نمایش پایه انتخاب شده */}
        {activeGrade && (
          <div className="text-center mt-8 p-4 bg-blue-50 rounded-lg mx-4">
            <p className="text-blue-700">
              پایه {grades.find((g) => g.id === activeGrade)?.name} انتخاب شد
            </p>
            <button
              onClick={() => setActiveGrade(null)}
              className="mt-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
            >
              لغو انتخاب
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
