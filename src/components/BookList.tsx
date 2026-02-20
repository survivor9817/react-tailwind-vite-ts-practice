import { useRef } from "react";
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// تایپ کتاب
interface Book {
  id: string | number;
  title: string;
  author: string;
  cover?: string;
  price?: number;
}

interface HorizontalBookScrollerProps {
  books: Book[];
  title?: string;
  scrollAmount?: number; // میزان اسکرول در هر کلیک (پیش‌فرض 300px)
}

// کامپوننت کارت کتاب (جداگانه برای خوانایی بهتر)
const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="flex-shrink-0 w-48 group cursor-pointer">
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-200 shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
        {book.cover ? (
          <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 text-gray-400">
            <span className="text-4xl">📚</span>
          </div>
        )}

        {/* اورلی هاور */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      <div className="mt-3 space-y-1">
        <h3 className="font-semibold text-gray-900 line-clamp-1 text-sm">{book.title}</h3>
        <p className="text-xs text-gray-500 line-clamp-1">{book.author}</p>
        {book.price && (
          <p className="text-sm font-bold text-blue-600">
            {book.price.toLocaleString("fa-IR")} تومان
          </p>
        )}
      </div>
    </div>
  );
};

// کامپوننت اصلی اسکرولر
export const HorizontalBookScroller = ({
  books,
  title,
  scrollAmount = 320,
}: HorizontalBookScrollerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollValue = direction === "left" ? -scrollAmount : scrollAmount;
      scrollRef.current.scrollBy({
        left: scrollValue,
        behavior: "smooth",
      });
    }
  };

  // چک کردن اینکه آیا دکمه‌ها باید فعال باشن یا نه
  const canScrollLeft = scrollRef.current ? scrollRef.current.scrollLeft > 0 : false;
  const canScrollRight = scrollRef.current
    ? scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth
    : true;

  if (books.length === 0) {
    return <div className="w-full p-8 text-center text-gray-400">کتابی برای نمایش وجود ندارد</div>;
  }

  return (
    <div className="relative w-full group/scroller">
      {/* هدر با عنوان و دکمه‌ها */}
      {(title || books.length > 4) && (
        <div className="flex items-center justify-between mb-4 px-4">
          {title && <h2 className="text-xl font-bold text-gray-900">{title}</h2>}

          {/* دکمه‌های ناوبری */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-white shadow-md border border-gray-200 
                         hover:bg-gray-50 hover:shadow-lg hover:scale-105
                         active:scale-95 transition-all duration-200
                         disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="اسکرول به چپ"
            >
              {/* <ChevronRight className="w-5 h-5 text-gray-700" /> */}
              👉
            </button>

            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-white shadow-md border border-gray-200 
                         hover:bg-gray-50 hover:shadow-lg hover:scale-105
                         active:scale-95 transition-all duration-200
                         disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="اسکرول به راست"
            >
              {/* <ChevronLeft className="w-5 h-5 text-gray-700" /> */}
              👈
            </button>
          </div>
        </div>
      )}

      {/* کانتینر اسکرول */}
      <div className="relative">
        {/* گرادیانت سمت چپ (نشان‌دهنده ادامه محتوا) */}
        <div
          className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent 
                        pointer-events-none z-10 opacity-0 group-hover/scroller:opacity-100 transition-opacity"
        />

        {/* گرادیانت سمت راست */}
        <div
          className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent 
                        pointer-events-none z-10 opacity-0 group-hover/scroller:opacity-100 transition-opacity"
        />

        <div
          ref={scrollRef}
          className="flex gap-4 p-4 overflow-x-auto scroll-smooth
                     scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none", // فایرفاکس
            msOverflowStyle: "none", // IE/Edge
          }}
        >
          {books.map((book) => (
            <div key={book.id} className="snap-start">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>

      {/* استایل مخفی کردن اسکرولبار برای کروم/سافاری */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

// کامپوننت لیست کتاب‌ها (اگر BookCardList جداگانه داری)
interface BookCardListProps {
  books: Book[];
}

export const BookCardList = ({ books }: BookCardListProps) => {
  return (
    <>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </>
  );
};

// ==================== مثال استفاده ====================

const SAMPLE_BOOKS: Book[] = [
  { id: 1, title: "بیگانه", author: "آلبر کامو", price: 85000 },
  { id: 2, title: "1984", author: "جورج اورول", price: 92000 },
  { id: 3, title: "جنایت و مکافات", author: "داستایوفسکی", price: 120000 },
  { id: 4, title: "بوف کور", author: "صادق هدایت", price: 45000 },
  { id: 5, title: "شازده کوچولو", author: "سنت اگزوپری", price: 38000 },
  { id: 6, title: "کیمیاگر", author: "پائولو کوئیلو", price: 55000 },
  { id: 7, title: "هری پاتر", author: "جی.کی. رولینگ", price: 150000 },
  { id: 8, title: "ارباب حلقه‌ها", author: "تالکین", price: 180000 },
];

// کامپوننت تست
export default function BookList() {
  return (
    <div className="min-h-screen bg-gray-50 p-8" dir="rtl">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* نسخه کامل با عنوان و دکمه */}
        <HorizontalBookScroller books={SAMPLE_BOOKS} title="پرفروش‌ترین کتاب‌ها" />

        {/* نسخه ساده (فقط اسکرول، بدون دکمه اضافی) */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">تازه‌های نشر</h3>
          <HorizontalBookScroller books={SAMPLE_BOOKS.slice(0, 6)} />
        </div>
      </div>
    </div>
  );
}
