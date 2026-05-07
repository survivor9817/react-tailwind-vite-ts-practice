import QuizReactionBtn from "./QuizReactionBtn";
import type { ReactionBtnType, UiReactionId } from "../data/reactionData";

type Props = {
  btnsMeta: ReactionBtnType[];
  onClick: (reactionId: UiReactionId) => void;
};

const QuizReactionButtons = ({ btnsMeta, onClick }: Props) => {
  return (
    <div className="flex justify-between items-center mx-2">
      {/* dokme haaye feedback */}
      {btnsMeta.map((item) => (
        <QuizReactionBtn
          key={item.id}
          i={item.icon}
          color={item.color}
          isOn={item.isOn}
          onClick={() => onClick(item.id)}
        />
      ))}
    </div>
  );
};

export default QuizReactionButtons;
