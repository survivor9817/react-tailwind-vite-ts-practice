import { getBookPage } from "../data/fehrestsData";

export const fetchBookPage = (bookId: number, pageNumber: number) => {
  return getBookPage(bookId, pageNumber);
};
