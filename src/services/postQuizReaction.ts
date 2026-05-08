import { saveReactionToDB, type DbReaction, type DbReactionId } from "../data/questionsData";
import type { UiReactionId } from "../data/reactionData";

export const createDbReaction = (
  userId: string,
  currentQuestionID: string,
  reactionId: DbReactionId,
): DbReaction => {
  const isAnswer = reactionId === "isCorrect" || reactionId === "isIncorrect";

  return {
    userId: userId,
    questionId: currentQuestionID,
    reactionId: reactionId,
    reactionType: isAnswer ? "answer" : "feedback",
    createdAt: new Date().toISOString(),
  };
};

export const postQuizReaction = (
  userId: string,
  currentQuestionID: string,
  reactionId: UiReactionId,
) => {
  const submittedReaction = createDbReaction(userId, currentQuestionID, reactionId);
  // post it
  saveReactionToDB(submittedReaction);
};
