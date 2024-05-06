import React, { useState } from "react";

const SwitchTabs = ({ data, onTabChange }: any) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab: any, index: number) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className=" bg-white rounded-3xl p-2 ">
      <div className="flex items-center h-8 relative ">
        {data.map((tab: any, index: any) => (
          <span
            key={index}
            className={`h-full flex items-center justify-center w-[100px] text-black relative z-10 cursor-pointer transition-colors ease-in  ${
              selectedTab === index ? "text-white" : ""
            }`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span
          className="h-[30px] w-[100px] rounded-2xl bg-gradient-to-r from-[#21B1CA] to-[#424DE0] absolute left-0 transition-all duration-400 ease-[cubic-bezier(0.88,-0.35,0.565,1.35)] "
          style={{ left }}
        />
      </div>
    </div>
  );
};

export default SwitchTabs;
