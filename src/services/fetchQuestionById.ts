import { getQuestionFromDB } from "../data/questionsData";

export const fetchQuestionById = (questionId: string) => {
  return getQuestionFromDB(questionId);
};
