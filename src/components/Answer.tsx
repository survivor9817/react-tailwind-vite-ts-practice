type Props = { answer: string | TrustedHTML };

const Answer = ({ answer }: Props) => {
  return (
    <div
      className="text-[16px] py-4 px-4 text-justify leading-7"
      dangerouslySetInnerHTML={{ __html: answer }}
    >
      {/* {"متن سوال"} */}
    </div>
  );
};

export default Answer;
