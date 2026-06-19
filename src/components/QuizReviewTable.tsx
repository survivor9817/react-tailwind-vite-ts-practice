import IconBtn from "./IconBtn";
import {
  getWeekday,
  toPersianDate,
  getTime,
  getDurationInMinutes,
} from "../utils/convertToJalaliDate";
import { toFaNums } from "../utils/toFaNums";
import { useQuizSessionsData } from "../hooks/useQuizSessionsData";
import ErrorFallback from "./ErrorFallback";
import useToggle from "../hooks/useToggle";
import QuizReviewModal from "./QuizReviewModal";
import { useState } from "react";

type Props = {
  startQuizLoading: boolean;
  reviewQuiz: (quizId: string) => Promise<void>;
};

const QuizReviewTable = ({ reviewQuiz, startQuizLoading }: Props) => {
  const tHeadCls = "border-gray-300 align-middle text-center text-sm font-bold text-gray-900 py-2";
  const tRowCls =
    "border-t border-gray-300 bg-gray-50 align-middle py-2 px-1 text-center text-base font-semibold text-gray-600";

  const { quizSessions, isLoading, error, loadQuizSessions } = useQuizSessionsData();

  // injaa ro mitooni bebari toye useQuiz
  // useQuizReviewModal
  const [quizReviewModal, , openQuizReviewModal, closeQuizReviewModal] = useToggle();
  const [quizIdForReview, setQuizIdForReview] = useState<string>();
  console.log(quizIdForReview);

  const onClickOnResultBtn = (quizId: string) => {
    setQuizIdForReview(quizId);
    openQuizReviewModal();
  };

  if (isLoading) {
    return (
      <div className="w-full mt-2 overflow-hidden rounded-xl border border-gray-300">
        <p className="flex justify-center p-4">در حال بارگذاری ...</p>
      </div>
    );
  }

  if (!quizSessions || !quizSessions?.length) {
    return <p className="flex justify-center p-4">تمرینی موجود نیست.</p>;
  }

  if (error) {
    return (
      <div className="p-4">
        <ErrorFallback onRefetch={loadQuizSessions} ErrorMsg="خطا در بارگذاری" />
      </div>
    );
  }

  return (
    <div className="w-full mt-2 overflow-hidden rounded-xl border border-gray-300">
      <table className="w-full border-separate border-spacing-0 text-base">
        <thead className="bg-gray-200">
          <tr>
            <th className={`${tHeadCls} px-1 border-l`}>#</th>
            <th className={`${tHeadCls} w-20 px-1`}>روز</th>
            <th className={`${tHeadCls} w-24`}>تاریخ</th>
            <th className={`${tHeadCls}`}>شروع</th>
            <th className={`${tHeadCls}`}>مدت</th>
            <th className={`${tHeadCls} w-14`}>نتایج</th>
          </tr>
        </thead>
        <tbody>
          {quizSessions.map(({ quizId, startTime, endTime }, i) => (
            <tr key={startTime + endTime}>
              <th scope="row" className={`${tRowCls} border-l`}>
                {toFaNums(i + 1)}
              </th>
              <td className={`${tRowCls}`}>{getWeekday(startTime)}</td>
              <td className={`${tRowCls}`}>{toPersianDate(startTime)}</td>
              <td className={`${tRowCls}`}>{getTime(startTime)}</td>
              <td className={`${tRowCls}`}>{getDurationInMinutes(startTime, endTime || "")}</td>
              <td className={`${tRowCls} grid place-content-center`}>
                <IconBtn
                  i="insert_chart"
                  iconSize="32px"
                  onClick={() => onClickOnResultBtn(quizId)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {quizReviewModal && quizIdForReview && (
        <QuizReviewModal
          onClose={closeQuizReviewModal}
          quizId={quizIdForReview} // quizIdForReview
          reviewQuiz={reviewQuiz}
          startQuizLoading={startQuizLoading}
        />
      )}
    </div>
  );
};

export default QuizReviewTable;
