import { createContext } from "react";
import "./App.css";
// import LandingPage from "./components/LandingPage";
import StudyPage from "./components/StudyPage";
import { useLocalStorage } from "./hooks/useLocalStorage";
import type { Book, BookOption } from "./data/booksData";

type BookContextType = {
  selectedBookOption: BookOption | null;
  setSelectedBookOption: (value: BookOption | null) => void;
  currentBook: Book | null;
  setCurrentBook: (value: Book | null) => void;
  currentPage: number | null;
  setCurrentPage: (value: number) => void;
};

export const BookContext = createContext<BookContextType>({
  selectedBookOption: null,
  setSelectedBookOption: () => {},
  currentBook: null,
  setCurrentBook: () => {},
  currentPage: null,
  setCurrentPage: () => {},
});

function Darsyavar() {
  const [selectedBookOption, setSelectedBookOption] = useLocalStorage<BookOption | null>(
    "lastBookSelectOption",
    null,
  );
  const [currentBook, setCurrentBook] = useLocalStorage<Book | null>("lastBookRead", null);
  const [currentPage, setCurrentPage] = useLocalStorage<number | null>(
    JSON.stringify(currentBook?.id),
    null,
  );
  // in current page tooye context hastesh. baa tavajoh be taghiraatesh
  // mitoonim vaase lazy load shodane content haa barnaame berizim.

  const bookContextValue: BookContextType = {
    selectedBookOption,
    setSelectedBookOption,
    currentBook,
    setCurrentBook,
    currentPage,
    setCurrentPage,
  };

  return (
    <BookContext.Provider value={bookContextValue}>
      {/* <LandingPage /> */}
      <StudyPage />
    </BookContext.Provider>
  );
}

export default Darsyavar;
