import IconBtn from "./IconBtn";
import {
  getWeekday,
  toPersianDate,
  getTime,
  getDurationInMinutes,
} from "../utils/convertToJalaliDate";

type Props = {};

const QuizReview = (props: Props) => {
  const reviewTableData = [
    {
      weekDay: getWeekday(new Date(2024, 5, 5).toISOString()),
      date: toPersianDate(new Date(2026, 2, 20, 1).toISOString()),
      startTime: getTime(new Date().toISOString()),
      duration: getDurationInMinutes(
        new Date(2026, 2, 20, 1, 12).toISOString(),
        new Date(2026, 2, 20, 2, 26).toISOString(),
      ),
    },
    {
      weekDay: getWeekday(new Date(2024, 5, 5).toISOString()),
      date: toPersianDate(new Date(2026, 3, 20, 2).toISOString()),
      startTime: getTime(new Date().toISOString()),
      duration: getDurationInMinutes(
        new Date(2026, 2, 20, 1, 13).toISOString(),
        new Date(2026, 2, 20, 2, 27).toISOString(),
      ),
    },
  ];
  // console.log(new Date("2026-03-19T22:56:00.000Z").toISOString());

  const tHeadCls = "border-gray-300 align-middle text-center text-sm font-bold text-gray-900 py-2";
  const tRowCls =
    "border-t border-gray-300 bg-gray-50 align-middle py-2 text-center text-base font-semibold text-gray-600";
  return (
    <div className="p-2">
      <div className="relative flex flex-col gap-8 py-8 px-6 border-2 rounded-4xl w-full max-w-115 m-auto ">
        <div className="absolute -top-5 right-8 text-2xl bg-white px-2">تمرین‌های قبلی</div>
        <div className="w-full mt-2 overflow-hidden rounded-xl border border-gray-300">
          <table className="w-full border-separate border-spacing-0 text-base">
            <thead className="bg-gray-200">
              <tr>
                <th className={`${tHeadCls} px-1 border-l`}>#</th>
                <th className={`${tHeadCls} w-20 px-1`}>روز</th>
                <th className={`${tHeadCls} w-24`}>تاریخ</th>
                <th className={`${tHeadCls}`}>شروع</th>
                <th className={`${tHeadCls}`}>مدت</th>
                <th className={`${tHeadCls} w-14`}>آمار</th>
              </tr>
            </thead>
            <tbody>
              {reviewTableData.map(({ weekDay, date, startTime, duration }) => (
                <tr key={date}>
                  <th scope="row" className={`${tRowCls} border-l`}>
                    ۱
                  </th>
                  <td className={`${tRowCls} px-1`}>{weekDay}</td>
                  <td className={`${tRowCls} px-1`}>{date}</td>
                  <td className={`${tRowCls} px-1`}>{startTime}</td>
                  <td className={`${tRowCls} px-1`}>{duration}</td>
                  <td className={`${tRowCls} px-1 grid place-content-center`}>
                    <IconBtn i="insert_chart" iconSize="32px" />
                  </td>
                </tr>
              ))}
            </tbody>
            {/* <tfoot className="bg-gray-200">
              <tr>
                <th className="border-gray-400 align-middle py-2 text-center text-sm font-bold text-gray-900">
                  داده
                </th>
                <th className="border-gray-400 align-middle py-2 text-center text-sm font-bold text-gray-900">
                  داده
                </th>
                <th className="border-gray-400 align-middle py-2 text-center text-sm font-bold text-gray-900">
                  داده
                </th>
                <th className="border-gray-400 align-middle py-2 text-center text-sm font-bold text-gray-900">
                  داده
                </th>
                <th className="border-gray-400 align-middle py-2 text-center text-sm font-bold text-gray-900">
                  داده
                </th>
                <th className="border-gray-400 align-middle py-2 text-center text-sm font-bold text-gray-900">
                  داده
                </th>
              </tr>
            </tfoot> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuizReview;
