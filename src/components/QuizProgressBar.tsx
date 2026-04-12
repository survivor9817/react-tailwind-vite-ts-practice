import { useEffect, useState } from "react";

type Props = {
  current: number;
  max: number;
};

const QuizProgressBar = ({ current, max }: Props) => {
  // nemikhaadaa... mikhaad?! ina taghir konan rerender mishe dg khodesh
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const progressBarLength = ((current + 1) / (max + 1)) * 100;
    // send progress percent to server
    // state baraye progress besaaz va agar az ghablish bishtar shod save kon toye server.
    // saveProgressPercent(progressBarLength)
    requestAnimationFrame(() => {
      setProgressPercent(progressBarLength);
    });
  }, [current, max]);

  return (
    <div className="px-2">
      <div className="bg-[#e0e0e0] rounded-[20px] h-3 w-full overflow-hidden">
        <div
          id="ProgressBar"
          className="h-full bg-linear-to-r from-[#4caf50] to-[#8bc34a] rounded-[20px] w-0 
                  transition-[width] duration-400 ease-in-out"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuizProgressBar;
