import { useState } from "react";
import { fakeFetch } from "../utils/fakeFetch";
import { getBookPage } from "../data/fehrestsData";

export const useBookPageData = () => {
  const [pageContent, setPageContent] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const loadPageContent = async (bookId: number, pageNumber: number) => {
    if (!bookId || !pageNumber) return; // throw error maybe
    // abort signal yaadet nare besaazi

    setIsLoading(true);
    setIsError(false);

    try {
      const content = await fakeFetch(
        () => getBookPage(bookId, pageNumber),
        // { errorChance: 0.5 },
        // { delay: 1000 },
      );
      if (content) setPageContent(content);
    } catch (error) {
      console.log(error);
      //   showToast("خطا در بارگذاری محتوای صفحه", { type: "error" });
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   loadPageContent();
  //   // ye fekri be haale abort signal bokon. alan nadare bayad dashte bashe.
  // }, [bookId, pageNumber]);

  return { pageContent, isLoading, isError, loadPageContent };
};
