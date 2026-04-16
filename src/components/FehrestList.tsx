import { useContext } from "react";
import FehrestItem from "./FehrestItem";
import { collectTitlePages, findTitlePage } from "../hooks/useFehrestItem";
import { useFakeFetch } from "../hooks/useFakeFetch";
import { getFehrestById } from "../data/fehrestsData";
import { BookContext } from "./BookProvider";
import ErrorFallback from "./ErrorFallback";

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

  if (isError) return <ErrorFallback onRefetch={refetch} ErrorMsg="خطا در بارگذاری فهرست" />;

  if (isLoading) return <p className="text-center">در حال بارگذاری...</p>;

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
