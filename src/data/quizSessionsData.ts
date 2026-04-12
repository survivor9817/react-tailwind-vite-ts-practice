export type QuizSession = {
  sessionId: string;
  userId: string;
  filterLabel: string;
  questionCount: number;
  status: string;
  startedAt: string;
  endedAt: string;
  duration: number;
  score: number;
  progress: number;
};

export const QUIZ_SESSIONS: QuizSession[] = [
  {
    sessionId: "123456",
    userId: "123",
    filterLabel: "10 سؤال – سطح متوسط – موضوع: جبر",
    questionCount: 10,
    startedAt: "2024-09-11T08:15:00Z",
    endedAt: "2024-09-11T08:45:32Z",
    duration: 52,
    progress: 100,
    status: "completed",
    corrects: 8,
    incorrects: 8,
    score: 8,
  },
];

// aval az bank soal filter mizane tasadofi dah ta id az bakhshe
// morede filter barmidare, badesh baayek order tasaadofi mizaare
// toye jadvali mesle jadvale paeen
export const TAGS = [
  {
    tagId: "tag1",
    tagName: "درست نادرست",
    tagType: "",
  },
  {
    tagId: "tag2",
    tagName: "جای خالی",
    tagType: "",
  },
  {
    tagId: "tag3",
    tagName: "دو گزینه‌ای",
    tagType: "",
  },
  {
    tagId: "tag4",
    tagName: "چهار گزینه‌ای",
    tagType: "",
  },
  {
    tagId: "tag5",
    tagName: "تشریحی",
    tagType: "",
  },
  {
    tagId: "tag6",
    tagName: "ارتباط منطقی",
    tagType: "",
  },
  {
    tagId: "tag7",
    tagName: "وصل کردنی",
    tagType: "",
  },
  {
    tagId: "tag8",
    tagName: "مفهومی",
    tagType: "",
  },
  {
    tagId: "tag9",
    tagName: "صورت مبهم",
    tagType: "",
  },
  {
    tagId: "tag10",
    tagName: "خط به خط",
    tagType: "",
  },
  {
    tagId: "tag11",
    tagName: "مقایسه‌ای",
    tagType: "",
  },
  {
    tagId: "tag12",
    tagName: "تحلیلی",
    tagType: "",
  },
];

export const QUESTION_TAGS = [
  {
    questionId: "",
    tagId: "",
  },
];

export const SESSIONS_QUESTIONS_ORDER = [
  {
    sessionId: "123456",
    questionId: "1",
    order: 1,
    isViewed: false,
  },
  {
    sessionId: "123456",
    questionId: "2",
    order: 2,
    isViewed: false,
  },
  {
    sessionId: "123456",
    questionId: "3",
    order: 3,
    isViewed: false,
  },
  {
    sessionId: "123456",
    questionId: "4",
    order: 4,
    isViewed: false,
  },
  {
    sessionId: "123456",
    questionId: "5",
    order: 5,
    isViewed: false,
  },
  {
    sessionId: "123456",
    questionId: "6",
    order: 6,
    isViewed: false,
  },
  {
    sessionId: "123456",
    questionId: "7",
    order: 7,
    isViewed: false,
  },
  {
    sessionId: "123456",
    questionId: "8",
    order: 8,
    isViewed: false,
  },
  {
    sessionId: "123456",
    questionId: "9",
    order: 9,
    isViewed: false,
  },
  {
    sessionId: "123456",
    questionId: "10",
    order: 10,
    isViewed: false,
  },
];
