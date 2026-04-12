import { useContext } from "react";
import FehrestItem from "./FehrestItem";
import { collectTitlePages, findTitlePage } from "../hooks/useFehrestItem";
import { BookContext } from "../Darsyavar";
import { useFakeFetch } from "../hooks/useFakeFetch";
import { getFehrestById } from "../data/fehrestsData";

// type Props = {};

const FehrestList = () => {
  const { currentPage, currentBook } = useContext(BookContext);
  if (!currentBook) return <p className="text-center">کتابی را انتخاب کنید.</p>;
  if (!currentPage) return <p className="text-center">هنوز صفحه ای انتخاب نشده است.</p>;

  const {
    data: currentFehrest,
    error,
    loading,
    // refetch,
  } = useFakeFetch(getFehrestById(currentBook?.id));

  if (loading) return <p className="text-center">در حال بارگذاری...</p>;
  if (error) return <p className="text-center">درخواست خطا شد.</p>;

  if (!currentFehrest) return <p>درخواست خطا شد.</p>;
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
