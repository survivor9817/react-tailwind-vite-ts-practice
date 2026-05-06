import FehrestItem from "./FehrestItem";
import { collectTitlePages, findTitlePage } from "../hooks/useFehrestItem";
import { useBookContext } from "./BookProvider";
import ErrorFallback from "./ErrorFallback";
import { useFehrestListData } from "../hooks/useFehrestListData";

// type Props = {};

const FehrestList = () => {
  const { currentPage, currentBook } = useBookContext();
  const { currentFehrest, isLoading, error, loadFehrest } = useFehrestListData();

  if (isLoading) return <p className="text-center">در حال بارگذاری...</p>; // maybe skeleton

  if (error) {
    if (!currentBook) return <p className="text-center">کتابی را انتخاب کنید.</p>;
    return (
      <ErrorFallback
        onRefetch={() => loadFehrest(currentBook?.id)}
        ErrorMsg="خطا در بارگذاری فهرست"
      />
    );
  }

  if (!currentPage) return <p className="text-center">هنوز صفحه ای انتخاب نشده است.</p>;
  if (!currentFehrest) return <p className="text-center">فهرست موجود نیست.</p>;
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
