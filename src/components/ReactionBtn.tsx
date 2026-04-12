import IconBtn from "./IconBtn";

type Props = {
  color: string;
  i: string;
  onClick?: () => void;
  isOn: boolean;
};

const ReactionBtn = ({ color, i, onClick, isOn }: Props) => {
  const cls = isOn ? `${color} filled` : ``;
  return <IconBtn i={i} className={cls} onClick={onClick} />;
};

export default ReactionBtn;
