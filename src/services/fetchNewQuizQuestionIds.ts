import { startNewQuiz } from "../data/quizSessionsData";

export const fetchNewQuizQuestionIds = (userId: string, bookId: string, filters: string) => {
  const newQuestionIds = startNewQuiz(userId, bookId, filters);
  return newQuestionIds;
};
