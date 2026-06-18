import Modal from "./Modal";
import QuizResultsTable from "./QuizResultsTable";

type Props = {
  onClose: () => void;
  onAction: () => void;
  quizId: string;
  questionIds: string[];
};

const QuizResultsModal = ({ onClose, onAction, quizId, questionIds }: Props) => {
  return (
    <>
      <Modal onClose={onClose} className="w-77.5">
        {/* Message */}
        <p className="text-center text-lg leading-6 p-1">خسته نباشی رضا جان</p>

        <p className="text-center text-lg leading-6 p-1">
          حدود ۲۰ دقیقه‌ست که برای تمرین علومت وقت گذاشتی!
        </p>

        {/* result table */}
        <QuizResultsTable quizId={quizId} questionIds={questionIds} />

        {/* Actions */}
        <div className="flex items-center justify-center gap-4">
          <button
            className="rounded-full bg-black text-white px-3 py-2 transition-colors hover:bg-neutral-700 active:bg-neutral-800 w-lg h-10 cursor-pointer"
            onClick={onClose}
          >
            مرور دوباره
          </button>

          <button
            className="rounded-full bg-gray-200 text-black px-3 py-2 transition-colors hover:bg-gray-300 active:bg-gray-400 w-lg h-10 cursor-pointer"
            onClick={onAction}
          >
            اتمام تمرین
          </button>
        </div>
      </Modal>
    </>
  );
};

export default QuizResultsModal;
