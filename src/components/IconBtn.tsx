type Props = {
  className: string;
  icon: string;
  isDisabled?: boolean;
  iconClassName?: string;
  onClick?: () => void;
};

const IconBtn = ({
  className,
  icon,
  iconClassName = ``,
  isDisabled = true,
  onClick = undefined,
}: Props) => {
  return (
    <button className={className} disabled={isDisabled} onClick={onClick}>
      <i
        className={`msr text-[48px] bg-transparent transition-transform duration-100 ease-in-out 
            rounded-full select-none tap-highlight-transparent outline-none hover:scale-[1.07] 
            active:scale-[0.95] focus:outline-none cursor-pointer ${iconClassName}`}
      >
        {icon}
      </i>
    </button>
  );
};

export default IconBtn;
