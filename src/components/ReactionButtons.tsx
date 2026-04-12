import ReactionBtn from "./ReactionBtn";
import type { ReactionBtnType, UiReactionId } from "../data/reactionData";

type Props = {
  btnsMeta: ReactionBtnType[];
  onClick: (reactionId: UiReactionId) => void;
};

const ReactionButtons = ({ btnsMeta, onClick }: Props) => {
  return (
    <div className="flex justify-between items-center mx-2">
      {/* dokme haaye feedback */}
      {btnsMeta.map((item) => (
        <ReactionBtn
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

export default ReactionButtons;
