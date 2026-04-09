import QuestionTag from "./QuestionTag";

type Props = {
  tags: string[];
};

const QuizTagBar = ({ tags }: Props) => {
  return (
    <div
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full overflow-auto z-3 
      max-w-34 hover:max-w-full transition-[max-width] duration-300 ease-in-out [scrollbar-width:none] [-ms-overflow-style:none]"
    >
      {/* {"تگ ها"} */}
      <ul className="inline-flex rounded-full flex-row gap-2 mx-2 h-12">
        {tags.map((tag) => (
          <QuestionTag key={tag} tagLabel={tag} />
        ))}
      </ul>
    </div>
  );
};

export default QuizTagBar;
