import { getFehrestById } from "../data/fehrestsData";

export const fetchFehrestListById = (bookId: number) => {
  return getFehrestById(bookId);
};
