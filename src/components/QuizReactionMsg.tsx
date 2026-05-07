type Props = {
  icon: string;
  label: string;
  color: string;
  isOn: boolean;
};

const QuizReactionMsg = ({ icon, label, color, isOn }: Props) => {
  const popInClass = isOn ? "translate-x-0" : "-translate-x-[105%]";
  return (
    <li
      id={`id-${color}`}
      className={`absolute left-2 bottom-2 flex items-center justify-center w-41.25 p-2 
        rounded-[16px_4px_16px_4px] text-center transition-transform duration-300 ease-in-out 
        ${color} ${popInClass}`}
    >
      <i className="msr text-2xl font-normal"> {icon} </i>
      <span className="mr-2"> {label} </span>
    </li>
  );
};

export default QuizReactionMsg;
