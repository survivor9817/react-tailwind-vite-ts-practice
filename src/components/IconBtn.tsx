import Spinner from "./Spinner";

type Props = {
  className?: string;
  iconName: string;
  isDisabled?: boolean;
  iconClassName?: string;
  onClick?: () => void;
  isLoading?: boolean;
  iconSize?: string;
};

const IconBtn = ({
  className,
  iconName,
  iconClassName = ``,
  isDisabled = false,
  isLoading = false,
  onClick = undefined,
  iconSize = "48px",
}: Props) => {
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <button
          className={`flex justify-center items-center disabled:opacity-30 disabled:cursor-not-allowed
          disabled:hover:bg-gray-100 cursor-pointer rounded-full transition-colors ${className}
          `}
          disabled={isDisabled}
          onClick={onClick}
        >
          <i
            style={{ fontSize: iconSize }}
            className={`msr bg-transparent transition-transform duration-100 ease-in-out 
            rounded-full select-none tap-highlight-transparent outline-none hover:scale-[1.07] 
            active:scale-[0.95] focus:outline-none ${iconClassName}`}
          >
            {iconName}
          </i>
        </button>
      )}
    </>
  );
};

export default IconBtn;
