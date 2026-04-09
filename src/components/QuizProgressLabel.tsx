import { toFaNums } from "../utils/toFaNums";

type Props = {
  current: number;
  max: number;
};

const QuizProgressLabel = ({ current, max }: Props) => {
  const progressLabel = `تمرین شماره ${toFaNums(current + 1)} از ${toFaNums(max + 1)}`;
  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-4.5 z-1 text-[16px]">
      {/* {"شماره تمرین"} */}
      {progressLabel}
    </div>
  );
};

export default QuizProgressLabel;
