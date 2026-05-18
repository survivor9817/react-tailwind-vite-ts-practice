import IconBtn from "./IconBtn";
import {
  getWeekday,
  toPersianDate,
  getTime,
  getDurationInMinutes,
} from "../utils/convertToJalaliDate";

type Props = {};

const QuizReview = (props: Props) => {
  return (
    <div className="p-2">
      <div className="relative flex flex-col gap-8 py-8 px-6 border-2 rounded-4xl w-full max-w-115 m-auto ">
        <div className="absolute -top-5 right-8 text-2xl bg-white px-2">تمرین‌های قبلی</div>
        <div className="w-full mt-2 overflow-hidden rounded-xl border border-gray-300">
          <table className="w-full border-separate border-spacing-0 text-base">
            <thead className="bg-gray-200">
              <tr>
                <th className="border-gray-300 border-l align-middle py-2 px-1 text-center text-sm font-bold text-gray-900">
                  #
                </th>
                <th className="border-gray-300 align-middle py-2 px-1 text-center text-sm font-bold text-gray-900">
                  روز
                </th>
                <th className="border-gray-300 w-24 align-middle py-2 text-center text-sm font-bold text-gray-900">
                  تاریخ
                </th>
                <th className="border-gray-300 align-middle py-2 text-center text-sm font-bold text-gray-900">
                  شروع
                </th>
                <th className="border-gray-300 align-middle py-2 text-center text-sm font-bold text-gray-900">
                  مدت
                </th>
                <th className="border-gray-300 w-14 align-middle py-2 text-center text-sm font-bold text-gray-900">
                  آمار
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="border-t border-l border-gray-300 bg-gray-50 align-middle py-2 text-center font-medium text-gray-800"
                >
                  ۱
                </th>
                <td className="border-t border-gray-300 bg-gray-50 align-middle py-2 text-center font-semibold text-gray-600">
                  {getWeekday(new Date(2024, 5, 5).toISOString())}
                </td>
                <td className="border-t border-gray-300 bg-gray-50 align-middle py-2 text-center font-semibold text-gray-600">
                  {toPersianDate(new Date(2026, 2, 20, 1).toISOString())}
                </td>
                <td className="border-t border-gray-300 bg-gray-50 align-middle py-2 text-center font-semibold text-gray-600">
                  {getTime(new Date().toISOString())}
                </td>
                <td className="border-t border-gray-300 bg-gray-50 align-middle py-2 text-center font-semibold text-gray-600">
                  {getDurationInMinutes(
                    new Date(2026, 4, 15, 1).toISOString(),
                    new Date(2026, 4, 15, 2).toISOString(),
                  )}
                </td>
                <td className="grid place-content-center border-t border-gray-300 bg-gray-50 align-middle py-2 text-center font-semibold text-gray-600">
                  {/* <IconBtn i="bar_chart" iconSize="24px" /> */}
                  <IconBtn i="insert_chart" iconSize="32px" />
                  {/* <InsertChart /> */}
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="border-t border-l border-gray-300 bg-gray-50 align-middle py-2 text-center font-medium text-gray-800"
                >
                  ۱
                </th>
                <td className="border-t border-gray-300 bg-gray-50 align-middle py-2 text-center font-semibold text-gray-600">
                  {getWeekday(new Date(2024, 5, 5).toISOString())}
                </td>
                <td className="border-t border-gray-300 bg-gray-50 align-middle py-2 text-center font-semibold text-gray-600">
                  {toPersianDate(new Date(2026, 2, 20, 1).toISOString())}
                </td>
                <td className="border-t border-gray-300 bg-gray-50 align-middle py-2 text-center font-semibold text-gray-600">
                  {getTime(new Date().toISOString())}
                </td>
                <td className="border-t border-gray-300 bg-gray-50 align-middle py-2 text-center font-semibold text-gray-600">
                  {getDurationInMinutes(
                    new Date(2026, 4, 15, 1).toISOString(),
                    new Date(2026, 4, 15, 2).toISOString(),
                  )}
                </td>
                <td className="grid place-content-center border-t border-gray-300 bg-gray-50 align-middle py-2 text-center font-semibold text-gray-600">
                  {/* <IconBtn i="bar_chart" iconSize="24px" /> */}
                  <IconBtn i="insert_chart" iconSize="32px" />
                  {/* <InsertChart /> */}
                </td>
              </tr>
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
