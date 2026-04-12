import { getResultsFromDB } from "../data/questionsData";
import { toFaNums } from "../utils/toFaNums";

type Props = {
  onClose: () => void;
  onAction: () => void;
  questionIds: string[];
  totalQuestionsNumber: number;
};

const QuizResultsModalContent = ({
  onClose,
  onAction,
  questionIds,
  totalQuestionsNumber,
}: Props) => {
  const { correctsCount, incorrectsCount, nullsCount } = getResultsFromDB("123", questionIds);

  const cutTwoDecimals = (num: number) => parseFloat(num.toFixed(1));

  const truePercent = toFaNums(cutTwoDecimals((correctsCount / totalQuestionsNumber) * 100));
  const falsePercent = toFaNums(cutTwoDecimals((incorrectsCount / totalQuestionsNumber) * 100));
  const nullPercent = toFaNums(cutTwoDecimals((nullsCount / totalQuestionsNumber) * 100));
  const percentWithNegativeInfluence = toFaNums(
    cutTwoDecimals(((correctsCount - incorrectsCount / 3) / totalQuestionsNumber) * 100),
  );

  return (
    <>
      {/* Message */}
      <p className="text-center text-lg leading-6 p-1">خسته نباشی رضا جان</p>

      <p className="text-center text-lg leading-6 p-1">
        حدود ۲۰ دقیقه‌ست که برای تمرین علومت وقت گذاشتی!
      </p>

      {/* result table */}
      <div className="mt-4 mb-6 overflow-hidden rounded-xl border border-gray-300">
        <table className="w-full border-separate border-spacing-0">
          <thead className="bg-gray-200">
            <tr>
              <th className="border-gray-400 px-4 py-2 text-right text-sm font-bold text-gray-900">
                پاسخ
              </th>
              <th className="border-gray-400 px-4 py-2 text-center text-sm font-bold text-gray-900">
                تعداد
              </th>
              <th className="border-gray-400 px-4 py-2 text-center text-sm font-bold text-gray-900">
                درصد
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th
                scope="row"
                className="border-t border-gray-300 bg-green-50 px-4 py-2 text-right font-medium text-green-800"
              >
                درست
              </th>
              <td className="border-t border-gray-300 bg-green-50 px-4 py-2 text-center font-semibold text-green-600">
                {toFaNums(correctsCount)}
              </td>
              <td className="border-t border-gray-300 bg-green-50 px-4 py-2 text-center font-semibold text-green-600">
                {truePercent}
              </td>
            </tr>

            <tr>
              <th
                scope="row"
                className="border-t border-gray-300 bg-red-50 px-4 py-2 text-right font-medium text-red-800"
              >
                نادرست
              </th>
              <td className="border-t border-gray-300 bg-red-50 px-4 py-2 text-center font-semibold text-red-600">
                {toFaNums(incorrectsCount)}
              </td>
              <td className="border-t border-gray-300 bg-red-50 px-4 py-2 text-center font-semibold text-red-600">
                {falsePercent}
              </td>
            </tr>

            <tr>
              <th
                scope="row"
                className="border-t border-gray-300 bg-gray-50 px-4 py-2 text-right font-medium text-gray-800"
              >
                نزده
              </th>
              <td className="border-t border-gray-300 bg-gray-50 px-4 py-2 text-center font-semibold text-gray-600">
                {toFaNums(nullsCount)}
              </td>
              <td className="border-t border-gray-300 bg-gray-50 px-4 py-2 text-center font-semibold text-gray-600">
                {nullPercent}
              </td>
            </tr>
          </tbody>
          <tfoot className="bg-gray-200">
            <tr>
              <th
                colSpan={2}
                className="border-gray-400 px-4 py-2 text-right text-sm font-bold text-gray-900"
              >
                درصدت با نمره منفی
              </th>

              <th className="border-gray-400 px-4 py-2 text-center text-sm font-bold text-gray-900">
                {percentWithNegativeInfluence}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-center gap-4">
        <button
          className="rounded-full bg-black text-white px-3 py-2 transition-colors hover:bg-neutral-700 active:bg-neutral-800 w-lg h-10 cursor-pointer"
          onClick={onClose}
        >
          مرور دوباره
        </button>

        <button
          className="rounded-full bg-gray-200 text-black px-3 py-2 transition-colors hover:bg-gray-300 active:bg-gray-400 w-lg h-10 cursor-pointer"
          onClick={onAction}
        >
          اتمام تمرین
        </button>
      </div>
    </>
  );
};

export default QuizResultsModalContent;
