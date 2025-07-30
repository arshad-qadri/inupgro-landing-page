import Image from "next/image";
import React from "react";
import Slider from "./Slider";

const StayUpdated = () => {
  const contents = [
    {
      text: "Students learning with flipbooks & video",
      num: "70%  /",
    },
    {
      text: "Students receive at least one school response in under 5 days",
      num: "85% / ",
    },
    {
      text: "Students uses both flipbooks and videos",
      num: "1 in 3 /  ",
    },
  ];

  return (
    <>
      <div className="bg-[url('/images/stayUpdatedBg.png')] bg-cover bg-no-repeat bg-center p-4">
        <div className="grid grid-cols-2 md:grid-cols-[40%_auto] px-2 md:px-4 py-6 text-xs md:text-sm font-semibold leading-5 tracking-[1px] uppercase">
          <div className="flex justify-between">
            <span>06</span> <span>BLOG & RESOURCES</span>
          </div>
          <div className="text-end">/07</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[70%_auto] gap-y-6 gap-x-8 my-6">
          <h1 className="font-medium text-[28px] md:text-[46px] leading-[36px] md:leading-[54px] tracking-[-0.02em] px-2 md:px-3">
            Stay updated on the latest trends and strategies to enhance your
            learning platform.
          </h1>
          <div className="flex justify-start md:justify-end items-end px-2 md:px-0">
            <a
              href="/"
              className="bg-[#177CEF] flex items-center gap-x-3 py-2 pl-4 pr-1 rounded-full text-white text-sm md:text-base"
            >
              Checkout More
              <div className="bg-white p-2  md:p-3  rounded-full">
                <Image
                  src="/images/blue-arrow.png"
                  width={12}
                  height={12}
                  alt="arrow"
                />
              </div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2 md:px-0">
          <div>
            <div className="w-full h-[240px] md:h-[360px] relative rounded-2xl overflow-hidden">
              <Image
                src="/images/stay_updated1.png"
                alt="image"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3">
              <small className="text-[#737373]">Oct 10, 2025</small>
              <p className="mt-2 text-black text-sm md:text-base">
                How to Choose the Right School for Your Child
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="w-full h-[200px] md:h-[230px] relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/stay_updated2.png"
                  alt="image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3">
                <small className="text-[#737373]">Oct 10, 2025</small>
                <p className="mt-2 text-black text-sm md:text-base">
                  How Teachers Can Monetize Their Passion
                </p>
              </div>
            </div>
            <div>
              <div className="w-full h-[200px] md:h-[230px] relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/stay_updated3.png"
                  alt="image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3">
                <small className="text-[#737373]">Oct 10, 2025</small>
                <p className="mt-2 text-black text-sm md:text-base">
                  How Teachers Can Monetize Their Passion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-b border-[#bcc2ce]">
        <Slider
          contents={contents}
          icon="star_blue.png"
          bgColor="bg-[#f8fafc]"
          textColor="text-black"
          numColor="text-[#177cef]"
        />
      </div>
    </>
  );
};

export default StayUpdated;
