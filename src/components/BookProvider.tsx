// src/context/BookContext.tsx
import { createContext, useContext, type ReactNode } from "react";
import type { Book } from "../data/booksData";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type BookContextType = {
  currentBook: Book | null; // behtare faghat current book ro negahdaarim.
  setCurrentBook: (value: Book | null) => void;
  currentPage: number | null;
  setCurrentPage: (value: number | null) => void;
};

export const BookContext = createContext<BookContextType>({
  currentBook: null,
  setCurrentBook: () => {},
  currentPage: null,
  setCurrentPage: () => {},
});

export const useBookContext = (): BookContextType => {
  const ctx = useContext(BookContext);
  if (!ctx) throw new Error("useStudyPageLayout must be used within StudyPageLayoutProvider");
  return ctx;
};

type Props = {
  children: ReactNode;
};

export const BookProvider = ({ children }: Props) => {
  const [currentBook, setCurrentBook] = useLocalStorage<Book | null>("lastBookRead", null);
  const [currentPage, setCurrentPage] = useLocalStorage<number | null>(
    JSON.stringify(currentBook?.id),
    null,
  );

  const value: BookContextType = {
    currentBook,
    setCurrentBook,
    currentPage,
    setCurrentPage,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
