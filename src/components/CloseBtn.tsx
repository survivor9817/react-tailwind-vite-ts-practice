import IconBtn from "./IconBtn";

interface Props {
  iconSize?: string;
  onClick?: () => void;
}

const CloseBtn = ({ iconSize = "36px", onClick }: Props) => {
  return (
    <>
      <IconBtn i="cancel" iconSize={iconSize} onClick={onClick} />
    </>
  );
};

export default CloseBtn;
