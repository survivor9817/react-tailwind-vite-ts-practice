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

// import { useState, useCallback, useRef } from "react";
// import { fakeFetch } from "../utils/fakeFetch";
// import { getBookPage } from "../data/fehrestsData";

// export const useBookPageData = () => {
//   const [pageContent, setPageContent] = useState<string | undefined>(undefined);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null); // تغییر به string | null

//   // Ref برای نگه داشتن AbortController فعلی
//   const abortControllerRef = useRef<AbortController | null>(null);

//   const loadPageContent = useCallback(async (bookId: number, pageNumber: number) => {
//     if (!bookId || !pageNumber) {
//       setError("پارامترهای کتاب یا شماره صفحه نامعتبر هستند.");
//       setIsLoading(false);
//       return;
//     }

//     if (abortControllerRef.current) {
//       abortControllerRef.current.abort();
//     }

//     const controller = new AbortController();
//     abortControllerRef.current = controller;

//     setIsLoading(true);
//     setError(null);

//     try {
//       const content = await fakeFetch(
//         () => getBookPage(bookId, pageNumber),
//         {
//           signal: controller.signal, // ارسال سیگنال ابورت
//           // { errorChance: 0.5 }, // برای تست خطا
//           // { delay: 1000 },      // برای تست تاخیر
//         }
//       );

//       if (!controller.signal.aborted) {
//         if (content !== undefined && content !== null) {
//           setPageContent(content);
//         } else {
//           setPageContent(undefined);
//         }
//         setError(null);
//       }
//     } catch (error) {
//       // 5. مدیریت خطای لغو (AbortError)
//       if (error instanceof DOMException && error.name === "AbortError") {
//         // خطای لغو را نادیده می‌گیریم زیرا این یک رفتار طبیعی است
//         return;
//       }

//       // بررسی مجدد برای اطمینان از لغو نشدن درخواست
//       if (!controller.signal.aborted) {
//         // استخراج پیام خطا
//         const errorMessage =
//           error instanceof Error ? error.message : "خطای ناخواسته در بارگذاری محتوا";

//         setError(errorMessage);
//         console.error("خطا در بارگذاری صفحه کتاب:", error);
//       }
//     } finally {
//       // 6. پاک‌سازی نهایی
//       if (!controller.signal.aborted) {
//         setIsLoading(false);
//       }

//       // اگر این کنترلر آخرین کنترلر فعال است، ریفرنس را خالی کن
//       if (abortControllerRef.current === controller) {
//         abortControllerRef.current = null;
//       }
//     }
//   }, []);

//   // پاکسازی هنگام آن‌مونت شدن کامپوننت والد
//   // (این بخش اختیاری است اگر از useCallback و مدیریت داخلی abort استفاده می‌کنید،
//   // اما برای اطمینان از لغو تمام درخواست‌ها هنگام حذف کامپوننت توصیه می‌شود)
//   const cleanup = useCallback(() => {
//     if (abortControllerRef.current) {
//       abortControllerRef.current.abort();
//       abortControllerRef.current = null;
//     }
//   }, []);

//   return {
//     pageContent,
//     isLoading,
//     error, // نام متغیر را از isError به error تغییر دادیم چون حالا رشته است
//     loadPageContent,
//     cleanup
//   };
// };
