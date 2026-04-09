type Props = {
  isAnswerVisible: boolean;
  onClick: () => void;
};

const ShowAnswerBtn = ({ isAnswerVisible, onClick }: Props) => {
  return (
    <div
      className="shrink-0 w-full px-2 transition-[width] ease-in-out duration-400"
      style={{
        width: isAnswerVisible ? "120px" : "100%",
      }}
    >
      <button
        className={`shrink-0 w-full p-2 flex items-center justify-center h-12 bg-black text-white
                      text-center whitespace-nowrap overflow-hidden cursor-pointer hover:bg-[#333] transition-[width,border-radius]
                      duration-400 ease-in-out`}
        style={{
          borderRadius: isAnswerVisible ? "150px 150px 25px 150px" : "150px",
        }}
        onClick={onClick}
      >
        {isAnswerVisible ? "بستن پاسخ" : "مشاهده پاسخ تشریحی"}
      </button>
    </div>
  );
};

export default ShowAnswerBtn;
