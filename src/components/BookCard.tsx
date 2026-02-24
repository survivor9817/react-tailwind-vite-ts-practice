type BookInfo = {
  title: string;
  coverImage: string;
  isAvailable: boolean;
};

// 140 * 234
const BookCard = ({ coverImage, isAvailable, title }: BookInfo) => {
  return (
    <div
      className={`flex flex-col justify-center align-middle border-2 border-gray-200 shadow-sm
      w-30 sm:w-40 md:w-50 overflow-hidden
      shrink-0 rounded-2xl rounded-b-3xl transition-transform hover:scale-105 active:scale-95 cursor-pointer`}
    >
      <img src={coverImage} alt={title} className="aspect-auto" />
      {/* {isAvailable ? <p>موجود</p> : <p>ناموجود</p>} */}
      <p className="mx-auto p-4 whitespace-nowrap overflow-hidden text-ellipsis max-w-full text-[14px] sm:text-[16px]">
        {title}
      </p>
    </div>
  );
};

export default BookCard;
