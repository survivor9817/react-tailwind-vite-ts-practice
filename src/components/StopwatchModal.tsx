import Modal from "./Modal";

type Props = {
  onClose: () => void;
};

const StopwatchModal = ({ onClose }: Props) => {
  return <Modal onClose={onClose}>StopwatchModal</Modal>;
};

export default StopwatchModal;
