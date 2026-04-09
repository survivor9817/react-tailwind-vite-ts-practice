import FeedbackMsg from "./FeedbackMsg";

type Props = {
  msgs: {
    id: string;
    isOn: boolean;
    label: string;
    icon: string;
    color: string;
  }[];
};

const FeedbackMessages = ({ msgs }: Props) => {
  return (
    <div className="absolute left-0 bottom-0 pointer-events-none">
      <ul className="relative overflow-hidden w-62.5 h-30 z-2">
        {msgs.map((item) => (
          <FeedbackMsg
            key={item.id}
            label={item.label}
            icon={item.icon}
            color={item.color}
            isOn={item.isOn}
          />
        ))}
      </ul>
    </div>
  );
};

export default FeedbackMessages;
