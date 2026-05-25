export type QuizSession = {
  quizId: string;
  userId: string;
  bookId: string;
  startTime: string;
  endTime: string;
  duration: number;
  progress: number;
  lastVisitedQuestion: string;
  filterTags: string;
  questionIds: string[];
};

export const QUIZ_SESSIONS: QuizSession[] = [
  {
    quizId: "1",
    userId: "123",
    bookId: "706",
    startTime: new Date(2026, 2, 20, 1, 12).toISOString(),
    endTime: new Date(2026, 2, 20, 2, 26).toISOString(),
    duration: 74,
    progress: 75,
    lastVisitedQuestion: "3",
    filterTags: "10 سؤال – سطح متوسط – موضوع: جبر",
    questionIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  },
  {
    quizId: "2",
    userId: "123",
    bookId: "706",
    startTime: new Date(2026, 2, 20, 2, 12).toISOString(),
    endTime: new Date(2026, 2, 20, 2, 26).toISOString(),
    duration: 14,
    progress: 75,
    lastVisitedQuestion: "3",
    filterTags: "10 سؤال – سطح متوسط – موضوع: جبر",
    questionIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  },
];

const getAllQuizSessions = () => QUIZ_SESSIONS;

export const getQuizSessions = (userId: string, bookId?: string) => {
  const userPreviousQuizes = getAllQuizSessions().filter(
    (s) => s.bookId === bookId && s.userId === userId,
  );
  return userPreviousQuizes;
};

export const getQuizSessionByQuizId = (quizId: string) => {
  const quizSession = getAllQuizSessions().find((s) => s.quizId === quizId);
  return quizSession;
};

export const getQuestionIdsByQuizId = (quizId: string) => {
  const questionIds = getQuizSessionByQuizId(quizId)?.questionIds;
  return questionIds;
};

export const getNewQuiz = (userId: string, bookId: string, filters: string) => {
  const newQuizSession = {
    quizId: "1",
    userId,
    bookId,
    startTime: new Date().toISOString(),
    endTime: null,
    duration: null,
    progress: 75,
    lastVisitedQuestion: "4",

    filterIds: filters,
    questionIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], // getRandomQuestionIdsByFilter()

    // check the random questions and bring back their results getResultsFromDB()
    // are result ro har baar ke bekhaaym baa daadane araye id soaalaa bedast miarim.
    // correctsCount: 8,
    // incorrectsCount: 1,
    // nullsCount: 1,
  };
  // create, then getQuizSessions() and then getQuestionIdsByQuizId() and return it.
};

// maybe
export const quiz_filters = [
  { quizId: "1", filterId: "fasle2" },
  { quizId: "1", filterId: "nahaaee" },
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
