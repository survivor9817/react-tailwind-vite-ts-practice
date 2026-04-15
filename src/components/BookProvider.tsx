// src/context/BookContext.tsx
import { createContext } from "react";
import type { ReactNode } from "react";
import type { Book, BookOption } from "../data/booksData";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type BookContextType = {
  selectedBookOption: BookOption | null;
  setSelectedBookOption: (value: BookOption | null) => void;
  currentBook: Book | null; // behtare faghat current book ro negahdaarim.
  setCurrentBook: (value: Book | null) => void;
  currentPage: number | null;
  setCurrentPage: (value: number | null) => void;
};

export const BookContext = createContext<BookContextType>({
  selectedBookOption: null,
  setSelectedBookOption: () => {},
  currentBook: null,
  setCurrentBook: () => {},
  currentPage: null,
  setCurrentPage: () => {},
});

type Props = {
  children: ReactNode;
};

export const BookProvider = ({ children }: Props) => {
  const [selectedBookOption, setSelectedBookOption] = useLocalStorage<BookOption | null>(
    "lastBookSelectOption",
    null,
  );
  const [currentBook, setCurrentBook] = useLocalStorage<Book | null>("lastBookRead", null);
  const [currentPage, setCurrentPage] = useLocalStorage<number | null>(
    JSON.stringify(currentBook?.id),
    null,
  );

  const value: BookContextType = {
    selectedBookOption,
    setSelectedBookOption,
    currentBook,
    setCurrentBook,
    currentPage,
    setCurrentPage,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
