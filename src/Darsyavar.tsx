import { createContext } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import StudyPage from "./components/StudyPage";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { getPurchasedBooks, type BookType } from "./data/data";

type BookContextType = {
  currentBook: BookType | null;
  setCurrentBook: (value: BookType | null) => void;
  currentPage: number;
  setCurrentPage: (value: number) => void;
};

export const BookContext = createContext<BookContextType>({
  currentBook: null,
  setCurrentBook: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
});

function Darsyavar() {
  const [currentBook, setCurrentBook] = useLocalStorage<BookType | null>(
    "lastBookRead",
    getPurchasedBooks()[0],
  );
  const [currentPage, setCurrentPage] = useLocalStorage<number>(JSON.stringify(currentBook?.id), 1);
  // in current page tooye context hastesh. baa tavajoh be taghiraatesh
  // mitoonim vaase lazy load shodane content haa barnaame berizim.

  const bookContextValue: BookContextType = {
    currentBook,
    setCurrentBook,
    currentPage,
    setCurrentPage,
  };

  return (
    <BookContext.Provider value={bookContextValue}>
      <LandingPage />
      <StudyPage />
    </BookContext.Provider>
  );
}

export default Darsyavar;
