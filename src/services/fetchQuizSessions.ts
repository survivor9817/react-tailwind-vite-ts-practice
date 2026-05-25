import { getQuizSessions } from "../data/quizSessionsData";

export const fetchQuizSessions = (userId: string, bookId: string) => {
  return getQuizSessions(userId, bookId);
};
