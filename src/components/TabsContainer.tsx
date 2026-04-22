import React, { createContext } from "react";

interface TabsContextType {
  totalTabs: number;
}

export const TabsContext = createContext<TabsContextType>({ totalTabs: 0 });

type TabsContentProps = {
  activeTab: number;
  className?: string;
  children: React.ReactNode;
};

const TabsContainer = ({ activeTab, className = "", children }: TabsContentProps) => {
  const childrenArray = React.Children.toArray(children);
  const tabsCount = childrenArray.length;

  return (
    <TabsContext.Provider value={{ totalTabs: tabsCount }}>
      <div className={`overflow-hidden ${className}`}>
        <div
          className="flex flex-row transition-transform duration-300 ease-in-out h-full"
          style={{
            width: `${tabsCount * 100}%`,
            transform: `translateX(${(100 / tabsCount) * activeTab}%)`,
          }}
        >
          {children}
        </div>
      </div>
    </TabsContext.Provider>
  );
};

export default TabsContainer;
