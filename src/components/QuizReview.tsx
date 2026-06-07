import QuizReviewTable from "./QuizReviewTable";

// type Props = {};

const QuizReview = () => {
  return (
    <div className="relative flex flex-col gap-8 border-2 rounded-4xl w-full max-w-115 m-auto py-8 px-6">
      <div className="absolute -top-5 right-8 text-2xl bg-white px-2">تمرین‌های قبلی</div>
      <QuizReviewTable />
    </div>
  );
};

export default QuizReview;
