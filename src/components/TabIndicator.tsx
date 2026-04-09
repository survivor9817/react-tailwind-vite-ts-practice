type Props = {
  activeTab: number;
};

const TabIndicator = ({ activeTab }: Props) => {
  return (
    <div
      className="absolute top-1 bottom-1 right-0 w-[33.33%] rounded-xl bg-[rgba(30,144,255,0.2)]
                   transition-transform duration-300 ease-in-out z-0"
      style={{ transform: `translateX(${activeTab * -100}%)` }}
    />
  );
};

export default TabIndicator;
