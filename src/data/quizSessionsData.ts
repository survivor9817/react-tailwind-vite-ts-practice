export type QuizSession = {
  quizId: string;
  userId: string;
  bookId: string;
  startedAt: string;
  endedAt: string;
  duration: number;

  // where tags?
  // level tags?
  // source tags?
  // question tags
  // ref tags?
  filterLabel: string;
  questionIds: string[];
  progress: number;
  correctsCount: number;
  incorrectsCount: number;
  nullsCount: number;

  // score?: number;
};

export const QUIZ_SESSIONS: QuizSession[] = [
  {
    quizId: "123456",
    userId: "123",
    bookId: "1102670",
    startedAt: "2024-09-11T08:15:00Z",
    endedAt: "2024-09-11T08:45:32Z", // dar harbaar zadan rooye dokme raftan be soale badi ya ghabli
    duration: 52,

    filterLabel: "10 سؤال – سطح متوسط – موضوع: جبر",
    questionIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    progress: 75,
    correctsCount: 8,
    incorrectsCount: 1,
    nullsCount: 1,
  },
];

export const QUIZ_IDS = [
  {
    quizId: "15495",
    userId: "123",
    questionIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  },
  {
    quizId: "15495",
    userId: "123",
    questionIds: ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
  },
  {
    quizId: "15495",
    userId: "123",
    questionIds: ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  },
];
