type Props = {
  btnClass?: string;
  iconName: string;
  iconClass?: string;
  label?: string;
  labelClass?: string;
  onClick: () => void;
};

const NavBtn = ({ btnClass, iconName, iconClass, label, labelClass, onClick }: Props) => {
  return (
    <>
      <button
        className={`relative z-1 flex flex-col sm:flex-row justify-center items-center h-14 flex-1 cursor-pointer
            before:content-[''] before:absolute before:inset-1 before:rounded-xl before:bg-black/5 before:opacity-0
            before:transition-opacity before:duration-200 before:ease-linear before:z-[-1] hover:before:opacity-100 ${btnClass}`}
        onClick={onClick}
      >
        <i className={`msr ${iconClass}`}> {iconName} </i>
        <span className={`mr-0 text-sm sm:text-base sm:mr-2 ${labelClass}`}>{label}</span>
      </button>
    </>
  );
};

export default NavBtn;
