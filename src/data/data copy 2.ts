export const BRAND_NAME = "درس‌یاور";
export const BRAND_LOGO = "🎓";

type GradeIdType = 7 | 8 | 9 | 10 | 11 | 12;
type FieldIdType = 1 | 2 | 3 | 4 | 5 | null;

export type GradeType = {
  id: GradeIdType;
  value: GradeIdType;
  dore: string;
  label: string;
};

export const GRADES: GradeType[] = [
  { id: 7, value: 7, dore: "متوسطه اول", label: "هفتم" },
  { id: 8, value: 8, dore: "متوسطه اول", label: "هشتم" },
  { id: 9, value: 9, dore: "متوسطه اول", label: "نهم" },
  { id: 10, value: 10, dore: "متوسطه دوم", label: "دهم" },
  { id: 11, value: 11, dore: "متوسطه دوم", label: "یازدهم" },
  { id: 12, value: 12, dore: "متوسطه دوم", label: "دوازدهم" },
];

export type FieldType = {
  id: FieldIdType;
  value: FieldIdType;
  label: string;
};

export const FIELDS: FieldType[] = [
  { id: 1, value: 1, label: "تجربی" },
  { id: 2, value: 2, label: "انسانی" },
  { id: 3, value: 3, label: "ریاضی" },
  { id: 4, value: 4, label: "معارف" },
  { id: 5, value: 5, label: "هنر" },
];

export type Book = {
  id: number;
  title: string;
  gradeId: GradeIdType;
  fieldId: FieldIdType;
  coverImage: string;
  isAvailable: boolean;
  lastPage: number;
  publishedYear: 1404;
};

export const BOOKS: Book[] = [
  // ================= پایه هفتم =================
  {
    id: 701,
    title: "آموزش قرآن",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C701.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 702,
    title: "پیام های آسمان",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C702.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 703,
    title: "فارسی",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C703.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 704,
    title: "نگارش",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C704.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 705,
    title: "ریاضی",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C705.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 706,
    title: "علوم تجربی",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C706.jpg",
    isAvailable: true,
    lastPage: 138,
    publishedYear: 1404,
  },
  {
    id: 707,
    title: "مطالعات اجتماعی",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C707.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 708,
    title: "فرهنگ و هنر",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C708.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 709,
    title: "عربی",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C709.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 710,
    title: "انگلیسی ۱",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C710.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 711,
    title: "کتاب کار انگلیسی ۱",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C711.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 712,
    title: "تفکر و سبک زندگی (پسران)",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C712.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 713,
    title: "تفکر و سبک زندگی (دختران)",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C713.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 717,
    title: "کار و فناوری",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C717.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 7171,
    title: "کار و فناوری (اجرای آزمایشی)",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C7171.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 719,
    title: "ضمیمه پیام های آسمان (اهل سنت)",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C719.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 720,
    title: "تعلیمات ادیان الهی و اخلاق (اقلیت ها)",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C720.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 722,
    title: "فارسی و نگارش (استعدادهای درخشان)",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C722.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 723,
    title: "ریاضیات (استعدادهای درخشان)",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C723.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 724,
    title: "علوم تجربی (استعدادهای درخشان)",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C724.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 741,
    title: "تربیت دینی (از من تا خدا)",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C741.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 742,
    title: "تربیت دینی (اهل سنت)",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C742.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 765,
    title: "از ایرانمان دفاع می کنیم",
    gradeId: 7,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C765.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },

  // ================= پایه هشتم =================
  {
    id: 801,
    title: "آموزش قرآن",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C801.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 802,
    title: "پیام های آسمان",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C802.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 803,
    title: "فارسی",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C803.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 804,
    title: "نگارش",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C804.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 805,
    title: "ریاضی",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C805.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 806,
    title: "علوم تجربی",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C806.jpg",
    isAvailable: true,
    lastPage: 146,
    publishedYear: 1404,
  },
  {
    id: 807,
    title: "مطالعات اجتماعی",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C807.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 808,
    title: "فرهنگ و هنر",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C808.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 809,
    title: "عربی",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C809.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 810,
    title: "انگلیسی ۲",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C810.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 811,
    title: "کتاب کار انگلیسی ۲",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C811.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 812,
    title: "تفکر و سبک زندگی",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C812.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 814,
    title: "تفکر و سبک زندگی (پسران)",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C814.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 817,
    title: "کار و فناوری",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C817.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 8171,
    title: "کار و فناوری (اجرای آزمایشی)",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C8171.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 819,
    title: "ضمیمه پیام های آسمان (اهل سنت)",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C819.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 820,
    title: "تعلیمات ادیان الهی و اخلاق (اقلیت ها)",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C820.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 822,
    title: "فارسی و نگارش (استعدادهای درخشان)",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C822.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 823,
    title: "ریاضیات (استعدادهای درخشان)",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C823.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 824,
    title: "علوم تجربی (استعدادهای درخشان)",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C824.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 841,
    title: "تربیت دینی (از من تا خدا)",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C841.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 842,
    title: "تربیت دینی (اهل سنت)",
    gradeId: 8,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C842.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },

  // ================= پایه نهم =================
  {
    id: 901,
    title: "آموزش قرآن",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C901.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 902,
    title: "پیام های آسمان",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C902.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 903,
    title: "فارسی",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C903.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 904,
    title: "نگارش",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C904.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 905,
    title: "ریاضی",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C905.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 906,
    title: "علوم تجربی",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C906.jpg",
    isAvailable: true,
    lastPage: 176,
    publishedYear: 1404,
  },
  {
    id: 907,
    title: "مطالعات اجتماعی",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C907.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 908,
    title: "فرهنگ و هنر",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C908.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 909,
    title: "عربی",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C909.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 910,
    title: "انگلیسی ۳",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C910.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 911,
    title: "کتاب کار انگلیسی ۳",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C911.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 915,
    title: "آمادگی دفاعی",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C915.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 917,
    title: "کار و فناوری",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C917.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 9171,
    title: "کار و فناوری (اجرای آزمایشی)",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C9171.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 919,
    title: "ضمیمه پیام های آسمان (اهل سنت)",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C919.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 920,
    title: "تعلیمات ادیان الهی و اخلاق (اقلیت ها)",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C920.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 922,
    title: "فارسی و نگارش (استعدادهای درخشان)",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C922.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 923,
    title: "ریاضیات (استعدادهای درخشان)",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C923.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 924,
    title: "علوم تجربی (استعدادهای درخشان)",
    gradeId: 9,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C924.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },

  // ================= پایه دهم =================
  // مشترک (fieldId: null)
  {
    id: 110201,
    title: "فارسی ۱",
    gradeId: 10,
    fieldId: 1,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110201.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110201,
    title: "فارسی ۱",
    gradeId: 10,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110201.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110201,
    title: "فارسی ۱",
    gradeId: 10,
    fieldId: 3,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110201.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110201,
    title: "فارسی ۱",
    gradeId: 10,
    fieldId: 4,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110201.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110202,
    title: "نگارش ۱",
    gradeId: 10,
    fieldId: 1,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110202.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110202,
    title: "نگارش ۱",
    gradeId: 10,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110202.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110202,
    title: "نگارش ۱",
    gradeId: 10,
    fieldId: 3,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110202.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110202,
    title: "نگارش ۱",
    gradeId: 10,
    fieldId: 4,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110202.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110204,
    title: "دین و زندگی ۱",
    gradeId: 10,
    fieldId: 1,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110204.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110204,
    title: "دین و زندگی ۱",
    gradeId: 10,
    fieldId: 3,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110204.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110206,
    title: "عربی، زبان قرآن ۱",
    gradeId: 10,
    fieldId: 1,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110206.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110206,
    title: "عربی، زبان قرآن ۱",
    gradeId: 10,
    fieldId: 3,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110206.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110210,
    title: "شیمی ۱",
    gradeId: 10,
    fieldId: 1,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110210.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110210,
    title: "شیمی ۱",
    gradeId: 10,
    fieldId: 3,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110210.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110211,
    title: "ریاضی ۱",
    gradeId: 10,
    fieldId: 1,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110211.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110211,
    title: "ریاضی ۱",
    gradeId: 10,
    fieldId: 3,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110211.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110215,
    title: "آمادگی دفاعی",
    gradeId: 10,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110215.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110217,
    title: "آزمایشگاه علوم تجربی ۱",
    gradeId: 10,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110217.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110218,
    title: "جغرافیای ایران",
    gradeId: 10,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110218.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110222,
    title: "هنر",
    gradeId: 10,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110222.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110224,
    title: "کارگاه کارآفرینی و تولید",
    gradeId: 10,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110224.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110225,
    title: "تفکر و سواد رسانه ای",
    gradeId: 10,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110225.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110228,
    title: "تعلیمات ادیان الهی و اخلاق ۱",
    gradeId: 10,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110228.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110230,
    title: "انگلیسی ۱",
    gradeId: 10,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110230.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110231,
    title: "کتاب کار انگلیسی ۱",
    gradeId: 10,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110231.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  // اختصاصی تجربی
  {
    id: 110214,
    title: "فیزیک ۱ (تجربی)",
    gradeId: 10,
    fieldId: 1,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110214.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110216,
    title: "زیست شناسی ۱",
    gradeId: 10,
    fieldId: 1,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110216.jpg",
    isAvailable: true,
    lastPage: 112,
    publishedYear: 1404,
  },
  // اختصاصی انسانی
  {
    id: 110203,
    title: "علوم و فنون ادبی ۱",
    gradeId: 10,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110203.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110205,
    title: "دین و زندگی ۱ (انسانی)",
    gradeId: 10,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110205.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110207,
    title: "عربی، زبان قرآن ۱ (انسانی)",
    gradeId: 10,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110207.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110212,
    title: "ریاضی و آمار ۱",
    gradeId: 10,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110212.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110219,
    title: "تاریخ ۱ (ایران و جهان باستان)",
    gradeId: 10,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110219.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110220,
    title: "جامعه شناسی ۱",
    gradeId: 10,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110220.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110221,
    title: "اقتصاد",
    gradeId: 10,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110221.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110223,
    title: "منطق",
    gradeId: 10,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110223.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  // اختصاصی ریاضی
  {
    id: 110209,
    title: "فیزیک ۱ (ریاضی)",
    gradeId: 10,
    fieldId: 3,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110209.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 110213,
    title: "هندسه ۱",
    gradeId: 10,
    fieldId: 3,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C110213.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },

  // ================= پایه یازدهم =================
  // مشترک (fieldId: null)
  {
    id: 111201,
    title: "فارسی ۲",
    gradeId: 11,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111201.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111202,
    title: "نگارش ۲",
    gradeId: 11,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111202.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111204,
    title: "دین و زندگی ۲",
    gradeId: 11,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111204.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111206,
    title: "عربی، زبان قرآن ۲",
    gradeId: 11,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111206.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111210,
    title: "شیمی ۲",
    gradeId: 11,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111210.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111217,
    title: "آزمایشگاه علوم تجربی ۲",
    gradeId: 11,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111217.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111220,
    title: "تاریخ معاصر ایران",
    gradeId: 11,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111220.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111228,
    title: "تعلیمات ادیان الهی و اخلاق ۲",
    gradeId: 11,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111228.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111230,
    title: "انگلیسی ۲",
    gradeId: 11,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111230.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111231,
    title: "کتاب کار انگلیسی ۲",
    gradeId: 11,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111231.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111237,
    title: "زمین شناسی",
    gradeId: 11,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111237.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111238,
    title: "ضمیمه دین و زندگی ۲ (اهل سنت)",
    gradeId: 11,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111238.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111268,
    title: "انسان و محیط زیست",
    gradeId: 11,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111268.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  // اختصاصی تجربی
  {
    id: 111211,
    title: "ریاضی ۲ (تجربی)",
    gradeId: 11,
    fieldId: 1,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111211.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111216,
    title: "زیست شناسی ۲",
    gradeId: 11,
    fieldId: 1,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111216.jpg",
    isAvailable: true,
    lastPage: 154,
    publishedYear: 1404,
  },
  {
    id: 111244,
    title: "فیزیک ۲ (تجربی)",
    gradeId: 11,
    fieldId: 1,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111244.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  // اختصاصی انسانی
  {
    id: 111203,
    title: "علوم و فنون ادبی ۲",
    gradeId: 11,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111203.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111205,
    title: "دین و زندگی ۲ (انسانی)",
    gradeId: 11,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111205.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111207,
    title: "عربی، زبان قرآن ۲ (انسانی)",
    gradeId: 11,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111207.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111212,
    title: "ریاضی و آمار ۲",
    gradeId: 11,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111212.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111218,
    title: "جغرافیای ۲ (ناحیه ای)",
    gradeId: 11,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111218.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111219,
    title: "تاریخ ۲",
    gradeId: 11,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111219.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111222,
    title: "جامعه شناسی ۲",
    gradeId: 11,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111222.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111224,
    title: "روان شناسی",
    gradeId: 11,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111224.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111226,
    title: "فلسفه ۱",
    gradeId: 11,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111226.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  // اختصاصی ریاضی
  {
    id: 111209,
    title: "فیزیک ۲ (ریاضی)",
    gradeId: 11,
    fieldId: 3,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111209.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111213,
    title: "هندسه ۲",
    gradeId: 11,
    fieldId: 3,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111213.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111214,
    title: "حسابان ۱",
    gradeId: 11,
    fieldId: 3,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111214.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 111215,
    title: "آمار و احتمال",
    gradeId: 11,
    fieldId: 3,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C111215.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },

  // ================= پایه دوازدهم =================
  // مشترک (fieldId: null)
  {
    id: 112201,
    title: "فارسی ۳",
    gradeId: 12,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112201.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112202,
    title: "نگارش ۳",
    gradeId: 12,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112202.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112204,
    title: "دین و زندگی ۳",
    gradeId: 12,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112204.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112206,
    title: "عربی، زبان قرآن ۳",
    gradeId: 12,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112206.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112210,
    title: "شیمی ۳",
    gradeId: 12,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112210.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112220,
    title: "هویت اجتماعی",
    gradeId: 12,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112220.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112228,
    title: "تعلیمات ادیان الهی و اخلاق ۳",
    gradeId: 12,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112228.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112230,
    title: "انگلیسی ۳",
    gradeId: 12,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112230.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112231,
    title: "کتاب کار انگلیسی ۳",
    gradeId: 12,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112231.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112240,
    title: "مدیریت خانواده و سبک زندگی (دختران)",
    gradeId: 12,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112240.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112245,
    title: "مدیریت خانواده و سبک زندگی (پسران)",
    gradeId: 12,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112245.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112268,
    title: "سلامت و بهداشت",
    gradeId: 12,
    fieldId: null,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112268.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  // اختصاصی تجربی
  {
    id: 112211,
    title: "ریاضی ۳ (تجربی)",
    gradeId: 12,
    fieldId: 1,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112211.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112216,
    title: "زیست شناسی ۳",
    gradeId: 12,
    fieldId: 1,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112216.jpg",
    isAvailable: true,
    lastPage: 125,
    publishedYear: 1404,
  },
  {
    id: 112244,
    title: "فیزیک ۳ (تجربی)",
    gradeId: 12,
    fieldId: 1,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112244.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  // اختصاصی انسانی
  {
    id: 112205,
    title: "دین و زندگی ۳ (انسانی)",
    gradeId: 12,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112205.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112207,
    title: "عربی، زبان قرآن ۳ (انسانی)",
    gradeId: 12,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112207.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112212,
    title: "ریاضی و آمار ۳",
    gradeId: 12,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112212.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112218,
    title: "جغرافیا ۳ (کاربردی)",
    gradeId: 12,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112218.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112219,
    title: "تاریخ ۳ ایران و جهان معاصر",
    gradeId: 12,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112219.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112222,
    title: "جامعه شناسی ۳",
    gradeId: 12,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112222.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112223,
    title: "تحلیل فرهنگی",
    gradeId: 12,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112223.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112226,
    title: "فلسفه ۲",
    gradeId: 12,
    fieldId: 2,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112226.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  // اختصاصی ریاضی
  {
    id: 112209,
    title: "فیزیک ۳ (ریاضی)",
    gradeId: 12,
    fieldId: 3,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112209.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112213,
    title: "هندسه ۳",
    gradeId: 12,
    fieldId: 3,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112213.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112214,
    title: "حسابان ۲",
    gradeId: 12,
    fieldId: 3,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112214.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
  {
    id: 112215,
    title: "ریاضیات گسسته",
    gradeId: 12,
    fieldId: 3,
    coverImage:
      "http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1404-1405/C112215.jpg",
    isAvailable: true,
    lastPage: 100,
    publishedYear: 1404,
  },
];

export const BOOKS_TOC = [
  {
    bookId: 706,
    title: "علوم تجربی ۷",
    sections: [
      {
        id: 1,
        page: 1,
        title: "بخش ۱: علوم و ابزارهای آن",
        sections: [
          { id: 1, page: 2, title: "تفکر و تجربه" },
          { id: 2, page: 6, title: "اندازه‌گیری در علوم و ابزارهای آن" },
        ],
      },
      {
        id: 2,
        page: 12,
        title: "بخش ۲: مواد در زندگی ما",
        sections: [
          { id: 1, page: 13, title: "اتم‌ها؛ الفبای مواد" },
          { id: 2, page: 25, title: "مواد پیرامون ما" },
        ],
      },
      {
        id: 3,
        page: 35,
        title: "بخش ۳: منابع خدادادی در خدمت ما",
        sections: [
          { id: 1, page: 36, title: "از معدن تا خانه" },
          { id: 2, page: 48, title: "سفر آب روی زمین" },
          { id: 3, page: 56, title: "سفر آب درون زمین" },
        ],
      },
      {
        id: 4,
        page: 65,
        title: "بخش ۴: انرژی؛ نیاز همیشگی",
        sections: [
          { id: 1, page: 66, title: "انرژی و تبدیل‌های آن" },
          { id: 2, page: 77, title: "منابع انرژی" },
          { id: 3, page: 86, title: "گرما و بهینه‌سازی مصرف انرژی" },
        ],
      },
      {
        id: 5,
        page: 98,
        title: "بخش ۵: دنیای درون من",
        sections: [
          { id: 1, page: 99, title: "یاخته و سازمان‌بندی آن" },
          { id: 2, page: 107, title: "سفره سلامت" },
          { id: 3, page: 116, title: "سفر غذا" },
          { id: 4, page: 124, title: "گردش مواد" },
          { id: 5, page: 132, title: "تبادل با محیط" },
        ],
      },
    ],
  },
  {
    bookId: 806,
    title: "علوم تجربی ۸",
    sections: [
      { id: 1, page: 1, title: "مخلوط و جداسازی مواد" },
      { id: 2, page: 9, title: "تغییرهای شیمیایی در خدمت زندگی" },
      { id: 3, page: 21, title: "از درون اتم چه‌خبر" },
      { id: 4, page: 28, title: "تنظیم عصبی" },
      { id: 5, page: 35, title: "حس و حرکت" },
      { id: 6, page: 47, title: "تنطیم هورمونی" },
      { id: 7, page: 55, title: "الفبای زیست‌فناوری" },
      { id: 8, page: 65, title: "تولیدمثل در جانداران" },
      { id: 9, page: 76, title: "الکتریسیته" },
      { id: 10, page: 89, title: "مغناطیس" },
      { id: 11, page: 97, title: "کانی‌ها" },
      { id: 12, page: 104, title: "سنگ‌ها" },
      { id: 13, page: 114, title: "هوازدگی" },
      { id: 14, page: 122, title: "نور و ویژگی‌های آن" },
      { id: 15, page: 136, title: "شکست نور" },
    ],
  },
  {
    bookId: 906,
    title: "علوم تجربی ۹",
    sections: [
      {
        id: 1,
        page: 1,
        title: "مواد و نقش آنها در زندگی",
      },
      {
        id: 2,
        page: 13,
        title: "رفتار اتمها با یکدیگر",
      },
      {
        id: 3,
        page: 25,
        title: "به‌دنبال محیطی بهتر برای زندگی",
      },
      {
        id: 4,
        page: 39,
        title: "حركت چيست",
      },
      {
        id: 5,
        page: 51,
        title: "نيرو",
      },
      {
        id: 6,
        page: 63,
        title: "زمین‌ساخت ورقه‌ای",
      },
      {
        id: 7,
        page: 73,
        title: "آثاری از گذشته زمین",
      },
      {
        id: 8,
        page: 83,
        title: "فشار وآثار آن",
      },
      {
        id: 9,
        page: 95,
        title: "ماشین‌ها",
      },
      {
        id: 10,
        page: 107,
        title: "نگاهی به فضا",
      },
      {
        id: 11,
        page: 121,
        title: "گوناگونی جانداران",
      },
      {
        id: 12,
        page: 131,
        title: "دنیای گیاهان",
      },
      {
        id: 13,
        page: 141,
        title: "جانوران بى مهره",
      },
      {
        id: 14,
        page: 151,
        title: "جانوران مهرەدار",
      },
      {
        id: 15,
        page: 163,
        title: "باهم زيستن",
      },
    ],
  },
  {
    bookId: 110216,
    title: "زیست شناسی ۱",
    sections: [
      {
        id: 1,
        page: 1,
        title: "فصل ۱. دنیای زنده",
        sections: [
          { id: 1, page: 2, title: "گفتار ۱. زیست شناسی چیست؟" },
          { id: 2, page: 7, title: "گفتار ۲. گستره حیات" },
          { id: 3, page: 11, title: "گفتار ۳. یاخته و بافت در بدن انسان" },
        ],
      },
      {
        id: 2,
        page: 17,
        title: "فصل ۲. گوارش و جذب مواد",
        sections: [
          { id: 1, page: 18, title: "گفتار ۱. ساختار و عملکرد لوله گوارش" },
          { id: 2, page: 25, title: "گفتار ۲. جذب مواد و تنظیم فعالیت دستگاه گوارش" },
          { id: 3, page: 30, title: "گفتار ۳. تنوع گوارش در جانداران" },
        ],
      },
      {
        id: 3,
        page: 33,
        title: "فصل ۳. تبادلات گازی",
        sections: [
          { id: 1, page: 34, title: "گفتار ۱. ساز و کار دستگاه تنفس در انسان" },
          { id: 2, page: 40, title: "گفتار ۲. تهویه ششی" },
          { id: 3, page: 45, title: "گفتار ۳. تنوع در تبادلات گازی" },
        ],
      },
      {
        id: 4,
        page: 47,
        title: "فصل ۴. گردش مواد در بدن",
        sections: [
          { id: 1, page: 48, title: "گفتار ۱. قلب" },
          { id: 2, page: 55, title: "گفتار ۲. رگ ها" },
          { id: 3, page: 61, title: "گفتار ۳. خون" },
          { id: 4, page: 65, title: "گفتار ۴. تنوع گردش مواد در جانداران" },
        ],
      },
      {
        id: 5,
        page: 69,
        title: "فصل ۵. تنظیم اسمزی و دفع مواد زائد",
        sections: [
          { id: 1, page: 70, title: "گفتار ۱. هم ایستایی و کلیه ها" },
          { id: 2, page: 73, title: "گفتار ۲. تشکیل ادرار و تخلیه آن" },
          { id: 3, page: 76, title: "گفتار ۳. تنوع دفع و تنظیم اسمزی در جانداران" },
        ],
      },
      {
        id: 6,
        page: 79,
        title: "فصل ۶. از یاخته تا گیاه",
        sections: [
          { id: 1, page: 80, title: "گفتار ۱. ویژگی های یاخته های گیاهی" },
          { id: 2, page: 86, title: "گفتار ۲. سامانه بافتی" },
          { id: 3, page: 90, title: "گفتار ۳. ساختار گیاهان" },
        ],
      },
      {
        id: 7,
        page: 97,
        title: "فصل ۷. جذب و انتقال مواد در گیاهان",
        sections: [
          { id: 1, page: 98, title: "گفتار ۱. تغذیه گیاهی" },
          { id: 2, page: 102, title: "گفتار ۲. جانداران موثر در تغذیه گیاهی" },
          { id: 3, page: 105, title: "گفتار ۳. انتقال مواد در گیاهان" },
        ],
      },
    ],
  },
  {
    bookId: 111216,
    title: "زیست شناسی ۲",
    sections: [
      {
        id: 1,
        page: 1,
        title: "فصل ۱. تنظیم عصبی",
        sections: [
          { id: 1, page: 2, title: "گفتار ۱ - یافته‌های بافت عصبی" },
          { id: 2, page: 9, title: "گفتار ۲ - ساختار دستگاه عصبی" },
        ],
      },
      {
        id: 2,
        page: 19,
        title: "فصل ۲. حواس",
        sections: [
          { id: 1, page: 20, title: "گفتار ۱ - گیرنده‌های حسی" },
          { id: 2, page: 23, title: "گفتار ۲ - حواس ویژه" },
          { id: 3, page: 33, title: "گفتار ۳ - گیرنده‌های حسی جانوران" },
        ],
      },
      {
        id: 3,
        page: 37,
        title: "فصل ۳. دستگاه حرکتی",
        sections: [
          { id: 1, page: 38, title: "گفتار ۱ - استخوان‌ها و اسکلت" },
          { id: 2, page: 45, title: "گفتار ۲ - ماهیچه و حرکت" },
        ],
      },
      {
        id: 4,
        page: 53,
        title: "فصل ۴. تنظیم شیمیایی",
        sections: [
          { id: 1, page: 54, title: "گفتار ۱ - ارتباط شیمیایی" },
          { id: 2, page: 56, title: "گفتار ۲ - غده‌های درون‌ریز" },
        ],
      },
      {
        id: 5,
        page: 63,
        title: "فصل ۵. ایمنی",
        sections: [
          { id: 1, page: 64, title: "گفتار ۱ - نخستین خط دفاعی: ورود ممنوع" },
          { id: 2, page: 66, title: "گفتار ۲ - دومین خط دفاعی: واکنش‌های عمومی اما سریع" },
          { id: 3, page: 72, title: "گفتار ۳ - سومین خط دفاعی: دفاع اختصاصی" },
        ],
      },
      {
        id: 6,
        page: 79,
        title: "فصل ۶. تقسیم یافته",
        sections: [
          { id: 1, page: 80, title: "گفتار ۱ - قافتن (کروموزوم)" },
          { id: 2, page: 84, title: "گفتار ۲ - رشتمان (میتوز)" },
          { id: 3, page: 92, title: "گفتار ۳ - گامتمان (میوز) و تولیدمثل جنسی" },
        ],
      },
      {
        id: 7,
        page: 97,
        title: "فصل ۷. تولیدمثل",
        sections: [
          { id: 1, page: 98, title: "گفتار ۱ - دستگاه تولیدمثل در مرد" },
          { id: 2, page: 102, title: "گفتار ۲ - دستگاه تولیدمثل در زن" },
          { id: 3, page: 108, title: "گفتار ۳ - رشد و نمو جنین" },
          { id: 4, page: 115, title: "گفتار ۴ - تولیدمثل در جانوران" },
        ],
      },
      {
        id: 8,
        page: 119,
        title: "فصل ۸. تولیدمثل نهان‌دانگان",
        sections: [
          { id: 1, page: 120, title: "گفتار ۱ - تولیدمثل غیر جنسی" },
          { id: 2, page: 124, title: "گفتار ۲ - تولیدمثل جنسی" },
          { id: 3, page: 130, title: "گفتار ۳ - از یاخته تخم تا گیاه" },
        ],
      },
      {
        id: 9,
        page: 137,
        title: "فصل ۹. پاسخ گیاهان به محرک‌ها",
        sections: [
          { id: 1, page: 138, title: "گفتار ۱ - تنظیم کننده‌های رشد در گیاهان" },
          { id: 2, page: 146, title: "گفتار ۲ - پاسخ به محیط" },
        ],
      },
    ],
  },
  {
    bookId: 112216,
    title: "زیست شناسی ۳",
    sections: [
      {
        id: 1,
        page: 1,
        title: "فصل ۱. مولکول‌های اطلاعاتی",
        sections: [
          { id: 1, page: 2, title: "نوکلئیک اسیدها" },
          { id: 2, page: 10, title: "همانندسازی DNA" },
          { id: 3, page: 17, title: "پروتئین‌ها" },
        ],
      },
      {
        id: 2,
        page: 21,
        title: "فصل ۲. جریان اطلاعات در یاخته",
        sections: [
          { id: 1, page: 23, title: "رونویسی" },
          { id: 2, page: 29, title: "به سوی پروتئین" },
          { id: 3, page: 30, title: "تنظیم بیان ژن" },
        ],
      },
      {
        id: 3,
        page: 37,
        title: "فصل ۳. انتقال اطلاعات در نسل‌ها",
        sections: [
          { id: 1, page: 35, title: "مفاهیم پایه" },
          { id: 2, page: 41, title: "انواع صفات" },
        ],
      },
      {
        id: 4,
        page: 47,
        title: "فصل ۴. تغییر در اطلاعات وراثتی",
        sections: [
          { id: 1, page: 45, title: "تغییر در ماده وراثتی جانداران" },
          { id: 2, page: 46, title: "تغییر در جمعیت‌ها" },
          { id: 3, page: 50, title: "تغییر در گونه‌ها" },
        ],
      },
      {
        id: 5,
        page: 63,
        title: "فصل ۵. آماده به آزوی",
        sections: [
          { id: 1, page: 55, title: "تأمین انرژی" },
          { id: 2, page: 56, title: "آکسایش بیشتر" },
          { id: 3, page: 61, title: "زمین مستقل از اکسیژن" },
        ],
      },
      {
        id: 6,
        page: 77,
        title: "فصل ۶. از انرژی به ماده",
        sections: [
          { id: 1, page: 65, title: "فتوسنتز: تبدیل انرژی نوری به انرژی شیمیایی" },
          { id: 2, page: 71, title: "واکنش‌های فتوسنتزی" },
          { id: 3, page: 72, title: "فتوسنتز در شرایط دشوار" },
        ],
      },
      {
        id: 7,
        page: 91,
        title: "فصل ۷. فناوری‌های نوین زیستی",
        sections: [
          { id: 1, page: 77, title: "زیست فناوری و مهندسی ژنتیک" },
          { id: 2, page: 81, title: "فناوری مهندسی پروتئین و بافت" },
          { id: 3, page: 85, title: "کاربردهای زیست فناوری" },
        ],
      },
      {
        id: 8,
        page: 107,
        title: "فصل ۸. رفتارهای جانوران",
        sections: [
          { id: 1, page: 86, title: "اساس رفتار" },
          { id: 2, page: 90, title: "انتخاب طبیعی و رفتار" },
          { id: 3, page: 94, title: "ارتباط و زندگی گروهی" },
        ],
      },
    ],
  },
];

export const filterBooksByProperty = <K extends keyof Book>(
  propertyName: K,
  value: Book[K],
): Book[] => {
  return BOOKS.filter((book) => book[propertyName] === value);
};

export const allBooks = BOOKS;

// api call function
// type BooksFilter = {
//   gradeId?: 7 | 8 | 9 | 10 | 11 | 12;
//   fieldId?: 1 | 2 | 3;
//   isAvailable?: boolean;
// };

export type BooksFilter = {
  gradeId?: GradeIdType;
  fieldId?: FieldIdType;
  isAvailable?: boolean;
};

/** فیلتر عمومی براساس یک کلید */
function filterByProp<K extends keyof Book>(
  books: Book[],
  key: K,
  value: Book[K] | undefined,
): Book[] {
  if (value === undefined) return books; // آرگومان پاس نشده → بدون فیلتر
  return books.filter((book) => book[key] === value);
}

export function getBooks(filter: BooksFilter = {}): Book[] {
  const { gradeId, fieldId, isAvailable } = filter;

  if (!gradeId && !fieldId && isAvailable === undefined) {
    // fekr konam inja bayad data error ro neshoon bedim
    return allBooks;
  }

  let result = filterByProp(allBooks, "gradeId", gradeId);

  if (gradeId !== undefined && gradeId >= 10) {
    result = filterByProp(result, "fieldId", fieldId);
  }

  if (isAvailable !== undefined) {
    result = result.filter((b) => b.isAvailable === isAvailable);
  }

  return result;
}

// export const purchasedBooksId: number[] = [806, 706];
export const purchasedBooksId: number[] = allBooks.map((book) => book.id);

export const purchasedBooks = purchasedBooksId.map((id) => filterByProp(allBooks, "id", id)[0]);

export const optionsOfBookSelector = purchasedBooks.map((book) => {
  return { value: book.id, label: book.title };
});
