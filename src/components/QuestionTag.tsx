type Props = {
  tagLabel: string;
};

const QuestionTag = ({ tagLabel }: Props) => {
  return (
    <>
      <li
        className="shrink-0 bg-black text-white text-[16px] my-1 px-4 py-2 rounded-[48px] flex items-center justify-center 
        cursor-pointer hover:bg-[#333] first:w-30 whitespace-nowrap"
      >
        {tagLabel}
      </li>
    </>
  );
};

export default QuestionTag;
