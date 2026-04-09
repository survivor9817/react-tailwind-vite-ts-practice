import FeedbackBtn from "./FeedbackBtn";
import type { FeedbackBtnType } from "../data/feedbackData";

type Props = {
  btnsMeta: FeedbackBtnType[];
  onClick: (id: string) => void;
};

const FeedbackButtons = ({ btnsMeta, onClick }: Props) => {
  return (
    <div className="flex justify-between items-center mx-2">
      {/* dokme haaye feedback */}
      {btnsMeta.map((item) => (
        <FeedbackBtn
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

export default FeedbackButtons;
