import QuizReviewTable from "./QuizReviewTable";

// type Props = {};

const QuizReview = () => {
  return (
    <div className="p-2">
      <div className="relative flex flex-col gap-8 py-8 px-6 border-2 rounded-4xl w-full max-w-115 m-auto ">
        <div className="absolute -top-5 right-8 text-2xl bg-white px-2">تمرین‌های قبلی</div>
        <div className="w-full mt-2 overflow-hidden rounded-xl border border-gray-300">
          <QuizReviewTable />
        </div>
      </div>
    </div>
  );
};

export default QuizReview;
