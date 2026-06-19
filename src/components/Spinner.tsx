type Props = {
  className: string;
};

const Spinner = ({ className }: Props) => {
  if (!className) className = "w-8 h-8";
  return (
    <>
      <span
        className={`${className} border-4 border-t-4 border-gray-300 border-t-gray-900 animate-spin rounded-full`}
      ></span>
    </>
  );
};

export default Spinner;
