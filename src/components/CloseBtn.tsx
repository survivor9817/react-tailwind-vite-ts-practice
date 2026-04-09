import IconBtn from "./IconBtn";

interface Props {
  onClick?: () => void;
}

const CloseBtn = ({ onClick }: Props) => {
  return (
    <>
      <IconBtn i="cancel" iconSize="36px" onClick={onClick} />
    </>
  );
};

export default CloseBtn;
