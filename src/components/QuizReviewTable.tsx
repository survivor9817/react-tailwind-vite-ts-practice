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

// type Props = {};

const QuizReviewTable = () => {
  const tHeadCls = "border-gray-300 align-middle text-center text-sm font-bold text-gray-900 py-2";
  const tRowCls =
    "border-t border-gray-300 bg-gray-50 align-middle py-2 px-1 text-center text-base font-semibold text-gray-600";

  const { quizSessions, isLoading, error, loadQuizSessions } = useQuizSessionsData();

  if (isLoading) {
    return <p className="flex justify-center p-4">در حال بارگذاری ...</p>;
    // return (
    //   <table>
    //     <thead>
    //       <tr className="animate-pulse">
    //         <th scope="row" className={`${tRowCls} border-l`}>
    //           <div className="h-5 w-8 bg-gray-200 rounded mx-auto" />
    //         </th>
    //         <td className={tRowCls}>
    //           <div className="h-5 w-12 bg-gray-200 rounded mx-auto" />
    //         </td>
    //         <td className={tRowCls}>
    //           <div className="h-5 w-24 bg-gray-200 rounded mx-auto" />
    //         </td>
    //         <td className={tRowCls}>
    //           <div className="h-5 w-14 bg-gray-200 rounded mx-auto" />
    //         </td>
    //         <td className={tRowCls}>
    //           <div className="h-5 w-16 bg-gray-200 rounded mx-auto" />
    //         </td>
    //         <td className={`${tRowCls} grid place-content-center`}>
    //           <div className="h-8 w-8 bg-gray-200 rounded-full" />
    //         </td>
    //       </tr>
    //     </thead>
    //   </table>
    // );
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
        {quizSessions.map(({ startTime, endTime }, i) => (
          <tr key={startTime + endTime}>
            <th scope="row" className={`${tRowCls} border-l`}>
              {toFaNums(i + 1)}
            </th>
            <td className={`${tRowCls}`}>{getWeekday(startTime)}</td>
            <td className={`${tRowCls}`}>{toPersianDate(startTime)}</td>
            <td className={`${tRowCls}`}>{getTime(startTime)}</td>
            <td className={`${tRowCls}`}>{getDurationInMinutes(startTime, endTime)}</td>
            <td className={`${tRowCls} grid place-content-center`}>
              <IconBtn i="insert_chart" iconSize="32px" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuizReviewTable;
