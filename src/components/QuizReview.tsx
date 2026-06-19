import QuizReviewTable from "./QuizReviewTable";

type Props = {
  startQuizLoading: boolean;
  reviewQuiz: (quizId: string) => Promise<void>;
};

const QuizReview = ({ reviewQuiz, startQuizLoading }: Props) => {
  return (
    <div className="relative flex flex-col gap-8 border-2 rounded-4xl w-full max-w-115 m-auto py-8 px-6">
      <div className="absolute -top-5 right-8 text-2xl bg-white px-2">تمرین‌های قبلی</div>
      <QuizReviewTable reviewQuiz={reviewQuiz} startQuizLoading={startQuizLoading} />
    </div>
  );
};

export default QuizReview;
