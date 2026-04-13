import { getResultsFromDB } from "../data/questionsData";
import { toFaNums } from "../utils/toFaNums";

type Props = {
  questionIds: string[];
};

const ResultsTable = ({ questionIds }: Props) => {
  const { correctsCount, incorrectsCount, nullsCount } = getResultsFromDB("123", questionIds);
  const totalQuestionsNumber = questionIds.length;

  const cutTwoDecimals = (num: number) => parseFloat(num.toFixed(1));

  const truePercent = toFaNums(cutTwoDecimals((correctsCount / totalQuestionsNumber) * 100));
  const falsePercent = toFaNums(cutTwoDecimals((incorrectsCount / totalQuestionsNumber) * 100));
  const nullPercent = toFaNums(cutTwoDecimals((nullsCount / totalQuestionsNumber) * 100));
  const percentWithNegativeInfluence = toFaNums(
    cutTwoDecimals(((correctsCount - incorrectsCount / 3) / totalQuestionsNumber) * 100),
  );

  return (
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
  );
};

export default ResultsTable;
