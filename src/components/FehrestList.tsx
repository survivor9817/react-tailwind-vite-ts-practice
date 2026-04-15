import { useContext } from "react";
import FehrestItem from "./FehrestItem";
import { collectTitlePages, findTitlePage } from "../hooks/useFehrestItem";
import { useFakeFetch } from "../hooks/useFakeFetch";
import { getFehrestById } from "../data/fehrestsData";
import { BookContext } from "./BookProvider";

// type Props = {};

const FehrestList = () => {
  const { currentPage, currentBook } = useContext(BookContext);
  if (!currentBook) return <p className="text-center">کتابی را انتخاب کنید.</p>;
  if (!currentPage) return <p className="text-center">هنوز صفحه ای انتخاب نشده است.</p>;

  const {
    data: currentFehrest,
    isError,
    isLoading,
    refetch,
  } = useFakeFetch(getFehrestById(currentBook?.id));

  if (isLoading) return <p className="text-center">در حال بارگذاری...</p>;

  if (isError)
    return (
      <div className="flex justify-center items-center gap-2 text-sm">
        <span className="text-red-500">خطا در بارگذاری گزینه ها</span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            refetch();
          }}
          className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors cursor-pointer"
        >
          تلاش مجدد ↻
        </button>
      </div>
    );

  if (!currentFehrest) return <p>فهرست موجود نیست.</p>;
  const titlePages = collectTitlePages(currentFehrest);
  const currentTitlePage = findTitlePage(currentPage, titlePages);

  return (
    <>
      {currentFehrest &&
        currentFehrest.map((section) => (
          <FehrestItem key={section.page} section={section} currentTitlePage={currentTitlePage} />
        ))}
    </>
  );
};

export default FehrestList;
