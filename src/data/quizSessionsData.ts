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

  correctsCount: number;
  incorrectsCount: number;
  nullsCount: number;
};

export const QUIZ_SESSIONS: QuizSession[] = [
  {
    sessionId: "123456",
    userId: "123",
    filterLabel: "10 سؤال – سطح متوسط – موضوع: جبر",
    questionCount: 10,
    startedAt: "2024-09-11T08:15:00Z",
    endedAt: "2024-09-11T08:45:32Z", // dar harbaar zadan rooye dokme raftan be soale badi ya ghabli
    duration: 52,
    progress: 100,
    status: "completed",
    // tooye yek modal natije yek tamrin ro betoone neshoon bede
    correctsCount: 8,
    incorrectsCount: 8,
    nullsCount: 8,

    score: 1,
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
