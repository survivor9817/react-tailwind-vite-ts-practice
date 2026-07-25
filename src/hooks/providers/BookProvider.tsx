// src/context/BookContext.tsx
import { createContext, useContext, type ReactNode } from "react";
import { useBook } from "../logics/useBook";

type BookContextType = ReturnType<typeof useBook>;

const BookContext = createContext<BookContextType | undefined>(undefined);

export const useBookContext = (): BookContextType => {
  const ctx = useContext(BookContext);
  if (!ctx) throw new Error("useBookContext must be used within BookProvider");
  return ctx;
};

type Props = {
  children: ReactNode;
};

export const BookProvider = ({ children }: Props) => {
  const value: BookContextType = useBook();

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
