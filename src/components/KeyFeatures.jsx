"use client";
import React, { useState } from "react";
import SmartApp from "./tabs/SmartApp";

const KeyFeatures = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      tab: "Smart Application Sync",
    },
    {
      tab: "Flipbooks with Embedded Videos",
    },
    {
      tab: "Performance Analytics for Teachers",
    },
    {
      tab: "Automated School Dashboard",
    },
  ];
  return (
    <div className="bg-white pb-15 pt-5">
      <div className="grid grid-cols-[40%_auto] p-4 font-semibold text-[14px] leading-[20px] tracking-[1px] uppercase">
        <div className="flex justify-between">
          <span>04</span> <span className="uppercase">Key Features</span>
        </div>
        <div className="text-end">/07</div>
      </div>
      <div className="grid grid-cols-2 gap-x-15 px-5 ">
        <h1 className="text-center p-4 font-medium text-[46px] leading-[64px] tracking-[-0.02em]">
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Key
          Features That Power Inupgro
        </h1>
        <p className="p-4 text-center mt-10">
          Everything You Need, Nothing You Don’t. From student learning to
          school hiring — Inupgro’s features are designed for simplicity, speed,
          and real results.
        </p>
      </div>

      <div className="w-4/6 min-h-[404px] bg-[#E7F2FD] mx-auto my-2 rounded-2xl overflow-hidden">
        <div className="w-full h-12  overflow-x-auto [&::-webkit-scrollbar]:hidden scrollbar-none">
          <div className="flex items-center   h-full whitespace-nowrap ">
            {tabs.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer border-b px-5 py-2  ${
                  activeTab === index
                    ? "text-[#177CEF] border-[#177CEF]"
                    : "text-black border-[#d6d8d9] "
                }`}
                onClick={() => setActiveTab(index)}
              >
                {item.tab}
              </div>
            ))}
          </div>
        </div>
        {activeTab === 0 ? <SmartApp /> : "No Data Available"}
      </div>
    </div>
  );
};

export default KeyFeatures;
