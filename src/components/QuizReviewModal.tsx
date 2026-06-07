import Modal from "./Modal";
import QuizResultsTable from "./QuizResultsTable";

type Props = {
  onClose: () => void;
  quizId: string;
};

const QuizReviewModal = ({ onClose, quizId }: Props) => {
  return (
    <Modal onClose={onClose}>
      QuizReviewModal
      {/* <QuizResultsTable questionIds={quizId} /> */}
    </Modal>
  );
};

export default QuizReviewModal;
