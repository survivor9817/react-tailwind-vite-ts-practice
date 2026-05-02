const ResultsTableSkeleton = () => {
  return (
    <section className="animate-pulse" aria-hidden="true">
      <table className="w-full border-separate border-spacing-0">
        {/* Header Skeleton */}
        <thead className="bg-gray-200 dark:bg-gray-400 rounded-t-lg">
          <tr>
            <th className="border-gray-300 px-4 py-2 text-right">
              <div className="h-4 bg-gray-300 dark:bg-gray-500 rounded w-1/2 mx-auto" />
            </th>
            <th className="border-gray-300 px-4 py-2 text-center">
              <div className="h-4 bg-gray-300 dark:bg-gray-500 rounded w-1/2 mx-auto" />
            </th>
            <th className="border-gray-300 px-4 py-2 text-center">
              <div className="h-4 bg-gray-300 dark:bg-gray-500 rounded w-1/2 mx-auto" />
            </th>
          </tr>
        </thead>

        {/* Body Skeleton */}
        <tbody>
          {/* Correct Answer Row */}
          <tr className="bg-green-50 dark:bg-green-900/20">
            <th className="border-t border-gray-300 px-4 py-2 text-right">
              <div className="h-4 bg-green-200 dark:bg-green-800 rounded w-1/3 ml-auto" />
            </th>
            <td className="border-t border-gray-300 px-4 py-2 text-center">
              <div className="h-4 bg-green-200 dark:bg-green-800 rounded w-1/2 mx-auto" />
            </td>
            <td className="border-t border-gray-300 px-4 py-2 text-center">
              <div className="h-4 bg-green-200 dark:bg-green-800 rounded w-1/2 mx-auto" />
            </td>
          </tr>

          {/* Incorrect Answer Row */}
          <tr className="bg-red-50 dark:bg-red-900/20">
            <th className="border-t border-gray-300 px-4 py-2 text-right">
              <div className="h-4 bg-red-200 dark:bg-red-800 rounded w-1/3 ml-auto" />
            </th>
            <td className="border-t border-gray-300 px-4 py-2 text-center">
              <div className="h-4 bg-red-200 dark:bg-red-800 rounded w-1/2 mx-auto" />
            </td>
            <td className="border-t border-gray-300 px-4 py-2 text-center">
              <div className="h-4 bg-red-200 dark:bg-red-800 rounded w-1/2 mx-auto" />
            </td>
          </tr>

          {/* Null Answer Row */}
          <tr className="bg-gray-50 dark:bg-gray-800/40">
            <th className="border-t border-gray-300 px-4 py-2 text-right">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3 ml-auto" />
            </th>
            <td className="border-t border-gray-300 px-4 py-2 text-center">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mx-auto" />
            </td>
            <td className="border-t border-gray-300 px-4 py-2 text-center">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mx-auto" />
            </td>
          </tr>
        </tbody>

        {/* Footer Skeleton */}
        <tfoot className="bg-gray-200 dark:bg-gray-400 rounded-b-lg">
          <tr>
            <th colSpan={2} className="border-t border-gray-300 px-4 py-2 text-right">
              <div className="h-4 bg-gray-300 dark:bg-gray-500 rounded w-3/4 ml-auto" />
            </th>
            <th className="border-t border-gray-300 px-4 py-2 text-center">
              <div className="h-4 bg-gray-300 dark:bg-gray-500 rounded w-1/2 mx-auto" />
            </th>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export default ResultsTableSkeleton;
