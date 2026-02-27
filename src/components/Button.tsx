type ButtonProps = {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
};
const Button = ({ children, isActive, onClick }: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`
                  rounded-full px-4 py-2 transition-transform duration-200
                  h-10 cursor-pointer font-medium text-sm
                  ${
                    isActive
                      ? "bg-gray-950 text-white shadow-lg transform scale-105"
                      : "bg-gray-200 text-black hover:bg-gray-300"
                  }
                  hover:shadow-md active:scale-95
                `}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
