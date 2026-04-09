import BookPage from "./BookPage.tsx";
import BookPagination from "./BookPagination.tsx";

const Book = () => {
  return (
    <>
      <div className="h-full overflow-auto">
        <BookPage />
      </div>

      <div className="flex justify-center items-center py-2 absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
        <BookPagination />
      </div>
    </>
  );
};

export default Book;
