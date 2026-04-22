import { useEffect, useState } from "react";
import { fakeFetch } from "../utils/fakeFetch";
import { getBookPage } from "../data/fehrestsData";

export const useBookPageData = (bookId: number, pageNumber: number) => {
  const [pageContent, setPageContent] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setHasError] = useState(false);

  const loadPageContent = async () => {
    // abort signal yaadet nare besaazi
    setIsLoading(true);
    setHasError(false);

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
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPageContent();
    // ye fekri be haale abort signal bokon. alan nadare bayad dashte bashe.
  }, [bookId, pageNumber]);

  return { pageContent, isLoading, isError, loadPageContent };
};
