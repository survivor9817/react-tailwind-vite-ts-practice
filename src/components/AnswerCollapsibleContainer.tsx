type Props = {
  isExpanded: boolean;
  children: React.ReactNode;
};

const AnswerCollapsibleContainer = ({ isExpanded, children }: Props) => {
  return (
    <div
      className="border-2 rounded-[16px_6px_28px_28px] mb-4 leading-[1.6] text-justify overflow-hidden 
              transition-[max-height,opacity] duration-400 ease-in-out pb-12 min-h-32.5 relative"
      style={{
        opacity: isExpanded ? 1 : 0,
        maxHeight: isExpanded ? "500%" : "0",
      }}
    >
      {children}
    </div>
  );
};

export default AnswerCollapsibleContainer;
