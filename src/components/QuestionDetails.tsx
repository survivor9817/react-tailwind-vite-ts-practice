import { toFaNums } from "../utils/toFaNums";

type Props = {
  source: string;
  date: string;
  score: number;
};

const QuestionDetails = ({ source, date, score }: Props) => {
  const questionDetails = `${source} - ${date} - ${toFaNums(score)} نمره`;
  return (
    <div className="flex justify-center items-center h-full border-2 rounded-full mx-2 bg-black text-white text-center">
      {/* {"نمره تاریخ منبع"} */}
      {questionDetails}
    </div>
  );
};

export default QuestionDetails;
