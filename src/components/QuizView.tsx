import { useQuizAnswer } from "../hooks/useQuizAnswer";
import type { QuestionType } from "../data/questionsData";
import IconBtn from "./IconBtn";
import QuizProgressLabel from "./QuizProgressLabel";
import QuizTagBar from "./QuizTagBar";
import QuizProgressBar from "./QuizProgressBar";
import Question from "./Question";
import QuestionDetails from "./QuestionDetails";
import Author from "./Author";
import Answer from "./Answer";
import QuizReactionButtons from "./QuizReactionButtons";
import QuizReactionMessages from "./QuizReactionMessages";
import ShowAnswerBtn from "./ShowAnswerBtn";
import Collapsible from "./Collapsible";
import { useQuizReactions } from "../hooks/useQuizReactions";

type Props = {
  questionData: QuestionType;
  currentQuestionIndex: number;
  lastQuestionIndex: number;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  prevLoading: boolean;
  goToPrevQuestion: () => Promise<void>;
  nextLoading: boolean;
  goToNextQuestion: () => Promise<void>;
  openEndConfirm: () => void;
};

const QuizView = ({
  questionData,
  currentQuestionIndex,
  lastQuestionIndex,
  isFirstQuestion,
  isLastQuestion,
  prevLoading,
  goToPrevQuestion,
  nextLoading,
  goToNextQuestion,
  openEndConfirm,
}: Props) => {
  const {
    id,
    reactions,
    tags,
    question,
    authorId: author,
    sourceId: source,
    date,
    score,
    descriptiveAnswer,
  } = questionData;

  // needs user id from context or somewhere
  const { btnsMeta, msgsMeta, onClickOnReactionBtn } = useQuizReactions(id, "123", reactions);

  const { answerContent, isAnswerVisible, toggleAnswer } = useQuizAnswer(
    descriptiveAnswer,
    currentQuestionIndex,
  );

  return (
    <div className="quiz-box flex flex-col p-2 overflow-hidden">
      {/* Quiz card */}

      {/* <!-- Row 1 : Navigation Buttons of Quiz Section --> */}
      <div className="flex justify-between items-center h-12 mb-1">
        <div className="flex">
          <IconBtn
            i={"arrow_circle_right"}
            isLoading={prevLoading}
            isDisabled={nextLoading || isFirstQuestion}
            onClick={goToPrevQuestion}
          />
        </div>

        <div className="flex">
          <IconBtn
            className={"text-red-700"}
            i={"power_settings_circle"}
            onClick={openEndConfirm}
          />

          <IconBtn
            i={"arrow_circle_left"}
            isLoading={nextLoading}
            isDisabled={prevLoading || isLastQuestion}
            onClick={goToNextQuestion}
          />
        </div>
      </div>

      {/* Question Box */}
      <div
        className="border-2 rounded-t-3xl rounded-b-2xl transition-[border-radius]"
        style={{ borderBottomLeftRadius: isAnswerVisible ? "6px" : "16px" }}
      >
        {/* <!-- Row 2 : Quiz Number and Tags --> */}
        <div className="relative h-14.5">
          <QuizProgressLabel current={currentQuestionIndex} max={lastQuestionIndex} />
          <QuizTagBar tags={tags} />
        </div>

        {/* <!-- Row 3 : Quiz Number and Tags --> */}
        <QuizProgressBar current={currentQuestionIndex} max={lastQuestionIndex} />

        {/* <!-- Row 4 : Question Box --> */}
        <div className="relative min-h-30">
          <Question question={question} />
          <QuizReactionMessages msgs={msgsMeta} />
        </div>
      </div>

      {/* <!-- Row 5 : Middle Row : answerToggle-authorLink-userInputs --> */}
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-2 my-2 w-full text-[16px]">
        <div
          className="flex items-center w-full sm:w-85 h-16 border-2 rounded-full overflow-hidden transition-[border-radius] duration-400"
          style={{ borderRadius: isAnswerVisible ? "150px 150px 25px 150px" : "150px" }}
        >
          <ShowAnswerBtn onClick={toggleAnswer} isAnswerVisible={isAnswerVisible} />
          <Author author={author} />
        </div>

        <div
          className="grid items-center overflow-hidden sm:w-85 h-16 border-2 rounded-full transition-[border-radius] duration-400"
          style={{ borderRadius: isAnswerVisible ? "25px 150px 150px 150px" : "150px" }}
        >
          <div
            className="grid grid-cols-2 w-[200%] justify-center content-center h-12 transition-transform duration-400 ease-in-out"
            style={{ transform: isAnswerVisible ? "translateX(50%)" : "translateX(0%)" }}
          >
            <QuestionDetails source={source} date={date} score={score} />
            <QuizReactionButtons btnsMeta={btnsMeta} onClick={onClickOnReactionBtn} />
          </div>
        </div>
      </div>

      {/* <!-- Row 6 : Answer Box --> */}
      <Collapsible isExpanded={isAnswerVisible}>
        <Answer answer={answerContent} />
      </Collapsible>
    </div>
  );
};

export default QuizView;
