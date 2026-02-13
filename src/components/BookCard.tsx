type BookInfo = {
  title: string;
  coverImage: string;
  isAvailable: boolean;
};

const BookCard = ({ coverImage, isAvailable, title }: BookInfo) => {
  return (
    <div className="border-2 w-50">
      {isAvailable ? <p>موجود</p> : <p>ناموجود</p>}
      <img src={coverImage} alt={title} className="" width={"150px"} height={"200px"} />
      <p>نام کتاب</p>
    </div>
  );
};

export default BookCard;
