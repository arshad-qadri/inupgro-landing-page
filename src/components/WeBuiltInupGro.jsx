"use client";
import Image from "next/image";
import React, { useRef } from "react";
import WeBuiltCard from "./WeBuiltCard";

const WeBuiltInupGro = () => {
  const tabs = [{ tab: "students" }, { tab: "teachers" }, { tab: "schools" }];

  const webuiltCards = [
    {
      img: "/images/image.png",
      icon: "/images/one-time.png",
      head: "One-time Document Upload",
      title: "Apply to multiple schools without resubmitting documents.",
    },
    {
      img: "/images/image2.png",
      icon: "/images/application-tracking.png",
      head: "Application Tracking",
      title: "Get real-time updates and status for each school.",
    },
    {
      img: "/images/image.png",
      icon: "/images/one-time.png",
      head: "One-time Document Upload",
      title: "Apply to multiple schools without resubmitting documents.",
    },
    {
      img: "/images/image2.png",
      icon: "/images/application-tracking.png",
      head: "Application Tracking",
      title: "Get real-time updates and status for each school.",
    },
  ];

  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount = 300;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="flex justify-between items-center px-4 md:px-10 py-4 text-sm">
        <div className="flex gap-2">
          <span>02</span>
          <span>PAIN POINTS</span>
        </div>
        <div>/07</div>
      </div>

      {/* Title + Description */}
      <div className="grid md:grid-cols-[60%_auto] px-4 md:px-10 py-5 gap-6">
        <h1 className="text-black font-medium text-[32px] md:text-[50px] leading-[40px] md:leading-[64px] tracking-[-0.02em]">
          We Built Inupgro to Solve What Actually Matters
        </h1>
        <p className="font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] tracking-normal">
          From learning struggles to school admissions chaos and underpaid
          teachers — everything you see here is shaped by real user pain points,
          not assumptions.
        </p>
      </div>

      {/* Tabs + Controls */}
      <div className="grid md:grid-cols-[60%_auto] px-4 md:px-10 py-4 gap-6 items-center">
        <div className="flex flex-wrap gap-2">
          {tabs.map((item, index) => (
            <button
              key={index}
              className={`font-medium text-[16px] md:text-[18px] leading-[28px] tracking-normal text-center capitalize rounded-[56px] px-4 py-2 ${
                index === 0
                  ? "bg-[#177CEF] text-white"
                  : "bg-[#F1F5F9] text-black"
              }`}
            >
              {item.tab}
            </button>
          ))}
        </div>
        <div className="flex gap-2 justify-end">
          <button className="font-medium text-[16px] md:text-[18px] leading-[28px] tracking-normal text-center capitalize rounded-[56px] px-6 py-2 bg-[#F1F5F9] text-black">
            See all features
          </button>
          <button
            onClick={() => scroll("left")}
            className="rounded-full w-11 h-11 flex justify-center items-center  bg-[#F1F5F9]"
          >
            <Image
              src="/images/arrow-left.png"
              width={22}
              height={22}
              alt="Left"
            />
          </button>
          <button
            onClick={() => scroll("right")}
            className="rounded-full w-11 h-11 flex justify-center items-center bg-[#F1F5F9]"
          >
            <Image
              src="/images/arrow-right.png"
              width={22}
              height={22}
              alt="Right"
            />
          </button>
        </div>
      </div>

      {/* Slider Section */}
      <div className="px-4 md:px-10 py-6">
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {webuiltCards.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[280px] md:w-[320px]">
              <WeBuiltCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeBuiltInupGro;
