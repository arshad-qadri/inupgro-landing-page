import Image from "next/image";
import React from "react";

const SmartApp = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8">
      <div className="flex justify-center items-center">
        <Image
          src="/images/smart-app.png"
          width={350}
          height={400}
          alt="smart app"
          className="w-[200px] md:w-[250px] h-auto"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h5 className="font-semibold text-[10px] md:text-[12px] tracking-[1px] uppercase text-[#0F6CD7]">
          Smart Application Sync
        </h5>
        <h1 className="font-medium text-[20px] md:text-[25px] leading-[32px] md:leading-[56px] tracking-[-0.02em] mt-1">
          Upload Once, Apply Anywhere
        </h1>
        <p className="font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
          Submit your documents once and use them across multiple school
          applications — no resubmitting, no stress.
        </p>
        <ul className="mt-4 flex  flex-wrap">
          {[
            "One-time upload",
            "No repeated submissions",
            "Auto-sync with new schools",
            "Smart alerts for missing files",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-x-2">
              <Image
                src="/images/check-circle.png"
                width={15}
                height={15}
                alt="check"
              />
              <span className="text-[14px]">{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
          <button className="bg-[#177CEF] py-2 px-5 rounded-3xl text-white">
            Join for Free
          </button>
          <button className="flex items-center text-black">
            See Features
            <Image
              src="/images/arrow-right.png"
              width={15}
              height={15}
              alt="right arrow"
              className="ml-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartApp;
