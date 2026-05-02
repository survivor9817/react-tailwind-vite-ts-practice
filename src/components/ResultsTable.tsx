import { useResultsTableData } from "../hooks/useResultsTableData";
import { toFaNums } from "../utils/toFaNums";
import ErrorFallback from "./ErrorFallback";
import ResultsTableSkeleton from "./ResultsTableSkeleton";

type Props = {
  questionIds: string[];
};

const ResultsTable = ({ questionIds }: Props) => {
  const { results, error, isLoading, loadQuizResults } = useResultsTableData("123", questionIds);
  console.log("5. isLoading status:", isLoading); // این لاگ را حتما چک کنید

  if (isLoading) return <ResultsTableSkeleton />;
  if (error) return <ErrorFallback onRefetch={loadQuizResults} />;
  if (!results) return <p>نتیجه ای پیدا نشد.</p>;
  const { correctsCount, incorrectsCount, nullsCount } = results;
  const totalQuestionsNumber = questionIds.length;
  if (totalQuestionsNumber === 0) return <p>سوالی برای نمایش وجود ندارد.</p>;

  const cutTwoDecimals = (num: number) => parseFloat(num.toFixed(1));

  const truePercent = toFaNums(cutTwoDecimals((correctsCount / totalQuestionsNumber) * 100));
  const falsePercent = toFaNums(cutTwoDecimals((incorrectsCount / totalQuestionsNumber) * 100));
  const nullPercent = toFaNums(cutTwoDecimals((nullsCount / totalQuestionsNumber) * 100));
  const percentWithNegativeInfluence = toFaNums(
    cutTwoDecimals(((correctsCount - incorrectsCount / 3) / totalQuestionsNumber) * 100),
  );

  // <ResultsTableSkeleton />
  return (
    <>
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
    </>
  );
};

export default ResultsTable;
