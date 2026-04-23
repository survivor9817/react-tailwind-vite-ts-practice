import { useState } from "react";
import { fakeFetch } from "../utils/fakeFetch";
import { type FehrestSection, getFehrestById } from "../data/fehrestsData";

export const useFehrestListData = () => {
  const [currentFehrest, setCurrentFehrest] = useState<FehrestSection[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setHasError] = useState(false);

  //   const { showToast } = useToast();

  const loadFehrest = async (bookId: number) => {
    // abort signal yaadet nare besaazi
    setIsLoading(true);
    setHasError(false);

    try {
      const data = await fakeFetch(
        () => getFehrestById(bookId),
        // { errorChance: 0.5 },
        // { delay: 1000 },
      );
      if (data) setCurrentFehrest(data);
    } catch (error) {
      console.error(`Error loading fehrest:`, error);
      //   showToast("خطا در بارگذاری گزینه های غربال", { type: "error" });
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  //   useEffect(() => {
  //     loadOptions();
  //     // ye fekri be haale abort signal bokon. alan nadare bayad dashte bashe.
  //   }, [quizFilters.BookId]);

  return { currentFehrest, isLoading, isError, loadFehrest };
};
