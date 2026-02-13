// import { BOOKS } from "../data/data";
import BookCard from "./BookCard";

type Book = {
  id: number;
  title: string;
  gradeId: number;
  fieldId: number | null;
  coverImage: string;
  isAvailable: boolean;
};

type BookCardListProps = {
  books: Book[];
};

const BookCardList = ({ books }: BookCardListProps) => {
  return (
    <>
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          coverImage={book.coverImage}
          isAvailable={book.isAvailable}
        />
      ))}
    </>
  );
};

export default BookCardList;
