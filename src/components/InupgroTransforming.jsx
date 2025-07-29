"use client";
import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Neha",
    role: "Student, Class 9",
    image: "/images/Polygon 1.png",
    text: `I applied to three schools using the same profile — no more paperwork stress! Inupgro saved me days. I could track my application status in real-time and got accepted without ever visiting an office. It felt like the entire school system came online — just for me.`,
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Parent",
    image: "/images/Polygon 1.png",
    text: `Inupgro simplified everything for us. My son’s school applications were completed in just a few clicks. No queues, no confusion.`,
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "School Administrator",
    image: "/images/Polygon 1.png",
    text: `Managing applications used to be a mess. Inupgro has streamlined our process and improved parent satisfaction drastically.`,
  },
];
const logos = [
  { img: "/images/unilever.png" },
  { img: "/images/navigator.png" },
  { img: "/images/ibm.png" },
  { img: "/images/o.png" },
  { img: "/images/calem.png" },
  { img: "/images/aquafresh.png" },
];
const InupgroTransforming = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const current = testimonials[currentIndex];
  const next = testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <div className="bg-[#e7f2fd]">
      {/* Header Row */}
      <div className="grid grid-cols-2 md:grid-cols-[40%_auto] px-4 py-7 font-semibold text-[14px] leading-[20px] tracking-[1px] uppercase">
        <div className="flex justify-between">
          <span>04</span> <span>Testimonials</span>
        </div>
        <div className="text-end">/07</div>
      </div>

      {/* Background Section */}
      <div className="w-full bg-[url('/images/transforming-bg.png')] bg-cover bg-center bg-no-repeat pb-12">
        <h1 className="text-center font-medium text-[28px] md:text-[46px] leading-[36px] md:leading-[64px] tracking-[-0.02em] max-w-[90%] md:max-w-[80%] mx-auto px-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hear
          how Inupgro is transforming lives and institutions across India.
        </h1>

        {/* Slider */}
        <div className="flex justify-center items-center my-10 flex-col ">
          <div className="w-full flex justify-center items-center overflow-hidden relative h-auto md:h-[420px]">
            <div className="flex gap-x-6 transition-all duration-500 ease-in-out">
              <div className="relative">
                {/* Current Testimonial */}

                <div className="w-[90vw] max-w-[500px] shrink-0 bg-white rounded-3xl p-6 border-2 border-[#2886F0] z-10 scale-100">
                  <div className="mb-4">
                    <Image
                      className="rounded-full"
                      src={current.image}
                      width={100}
                      height={100}
                      alt={current.name}
                    />
                  </div>
                  <p className="font-normal text-[16px] tracking-[-0.02em] mb-3 text-left">
                    {current.text}
                  </p>
                  <div className="text-left text-sm">{current.name}</div>
                  <div className="text-left text-sm">{current.role}</div>
                </div>
                <div className="absolute -right-[530px] top-5 hidden md:block w-[90vw] max-w-[500px] shrink-0 bg-white rounded-3xl p-6 border border-gray-300  scale-90 translate-x-[-40px]">
                  <div className="mb-4">
                    <Image
                      className="rounded-full"
                      src={next.image}
                      width={80}
                      height={80}
                      alt={next.name}
                    />
                  </div>
                  <p className="font-normal text-sm tracking-[-0.02em] mb-2 text-left line-clamp-3">
                    {next.text}
                  </p>
                  <div className="text-left text-sm ">{next.name}</div>
                  <div className="text-left text-sm">{current.role}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[90%] max-w-[500px] h-16 bg-white rounded-xl flex justify-between items-center px-4 shadow my-3 lg:my-0">
            <span className="text-sm font-medium">
              {String(currentIndex + 1).padStart(2, "0")} -{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-x-4">
              <button
                onClick={handlePrev}
                className="text-sm text-black cursor-pointer"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="text-sm text-black cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start items-center lg:gap-x-28 gap-x-10 gap-y-6 px-4">
          {logos.map((img, ind) => (
            <Image
              src={img.img}
              key={ind}
              width={100}
              height={100}
              alt="logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InupgroTransforming;
