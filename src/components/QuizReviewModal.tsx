import Modal from "./Modal";
import QuizResultsTable from "./QuizResultsTable";
import Spinner from "./Spinner";

type Props = {
  onClose: () => void;
  quizId: string;
  startQuizLoading: boolean;
  reviewQuiz: (quizId: string) => Promise<void>;
};

const QuizReviewModal = ({ onClose, quizId, reviewQuiz, startQuizLoading }: Props) => {
  return (
    <Modal onClose={onClose}>
      {/* Message */}
      <p className="text-center text-lg leading-6 p-1">نتیجه تمرین قبلی</p>

      <QuizResultsTable quizId={quizId} />

      <div className="flex items-center justify-center gap-4">
        <button
          className="rounded-full bg-black text-white px-3 py-2 transition-colors hover:bg-neutral-700 active:bg-neutral-800 w-lg h-10 cursor-pointer"
          onClick={() => reviewQuiz(quizId)}
        >
          {startQuizLoading ? (
            <div className="flex justify-center">
              <Spinner className="w-6 h-6" />
            </div>
          ) : (
            "مرور دوباره"
          )}
        </button>

        <button
          className="rounded-full bg-gray-200 text-black px-3 py-2 transition-colors hover:bg-gray-300 active:bg-gray-400 w-lg h-10 cursor-pointer"
          onClick={onClose}
        >
          اشتراک گذاری
        </button>
      </div>
    </Modal>
  );
};

export default QuizReviewModal;
