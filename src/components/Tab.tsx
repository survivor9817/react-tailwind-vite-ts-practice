import { useContext } from "react";
import { TabsContext } from "./TabsContainer";

// 3. کامپوننت Tab
type TabProps = {
  children: React.ReactNode;
};

const Tab = ({ children }: TabProps) => {
  const { totalTabs } = useContext(TabsContext);
  const width = totalTabs > 0 ? 100 / totalTabs : 100;

  return (
    <div className="shrink-0 overflow-auto h-full relative" style={{ width: `${width}%` }}>
      {children}
    </div>
  );
};

export default Tab;
