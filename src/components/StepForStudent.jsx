import React from "react";
import Slider from "./Slider";
import Image from "next/image";

const StepForStudent = () => {
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
    <div>
      <div className="w-full border-t border-b border-[#9CA3AF]">
        <Slider
          contents={contents}
          icon={"star_blue.png"}
          bgColor="bg-[#E7F2FD]"
          textColor={"text-black"}
          numColor="text-[#177cef]"
        />
      </div>
      <div className="bg-[#E7F2FD]">
        <div className="grid grid-cols-[40%_auto] p-4 font-semibold text-[14px] leading-[20px] tracking-[1px] uppercase">
          <div className="flex justify-between">
            <span>03</span> <span className="uppercase">Steps to join</span>
          </div>
          <div className="text-end">/07</div>
        </div>
        <div className="grid grid-cols-[40%_auto]">
          <div className="h-[90vh] flex justify-center items-center ">
            <div className=" w-[350px] bg-[#177CEF] rounded-3xl overflow-hidden border-2 border-[#177CEF]">
              <div className="flex justify-between items-center px-4">
                <div className="font-semibold text-[25px] leading-[36px] tracking-[-0.02em] align-middle text-white py-2">
                  5 Steps for{" "}
                  <select className="text-[#fee86a] pr-4">
                    <option value="student">Student</option>
                  </select>{" "}
                  <br />
                  and
                  <span className="text-[#fee86a]"> Zero Stress</span>
                </div>
                <Image
                  src={"/images/medal.png"}
                  width={50}
                  height={50}
                  alt="medal"
                />
              </div>
              <div className="w-full min-h-88 bg-white py-8 px-12">
                <div className="w-full min-h-60  h-full border-l-2 border-[#177CEF] relative z-0">
                  {/* step1 */}
                  <div className="absolute -left-[15px] -top-1 z-1000 flex justify-start items-center gap-x-4 ">
                    <div className="bg-white">
                      <Image
                        src={"/images/blue-tick.png"}
                        width={30}
                        height={30}
                        alt="tick"
                      />
                    </div>
                    <button className="flex justify-center items-center bg-[#177CEF] px-3 py-[4px] gap-x-2 rounded-2xl">
                      <Image
                        src={"/images/person.png"}
                        width={15}
                        height={15}
                        alt="person"
                      />{" "}
                      <span className="text-white">Sign Up</span>
                    </button>
                  </div>
                  {/* step2 */}
                  <div className="absolute -left-[15px] top-14 z-1000 flex justify-start items-center gap-x-4 ">
                    <div className="bg-white">
                      <Image
                        src={"/images/blue-tick.png"}
                        width={30}
                        height={30}
                        alt="tick"
                      />
                    </div>
                    <button className="flex justify-center items-center bg-[#ECFCCB] px-3 py-[4px] gap-x-2 rounded-2xl">
                      <Image
                        src={"/images/edit.png"}
                        width={15}
                        height={15}
                        alt="person"
                      />{" "}
                      <span className="text-black">Complete Profile</span>
                    </button>
                  </div>
                  {/* step3 */}
                  <div className="absolute -left-[15px] top-28 z-1000 flex justify-start items-center gap-x-4 ">
                    <div className="bg-white">
                      <Image
                        src={"/images/blue-tick.png"}
                        width={30}
                        height={30}
                        alt="tick"
                      />
                    </div>
                    <button className="flex justify-center items-center bg-[#FEF3C7] px-3 py-[4px] gap-x-2 rounded-2xl">
                      <Image
                        src={"/images/chooseclass.png"}
                        width={15}
                        height={15}
                        alt="person"
                      />{" "}
                      <span className="text-black">Choose Class</span>
                    </button>
                  </div>
                  {/* step4 */}
                  <div className="absolute -left-[15px] top-42 z-1000 flex justify-start items-center gap-x-4 ">
                    <div className="bg-white">
                      <Image
                        src={"/images/blue-tick.png"}
                        width={30}
                        height={30}
                        alt="tick"
                      />
                    </div>
                    <button className="flex justify-center items-center bg-[#CCFBF1] px-3 py-[4px] gap-x-2 rounded-2xl">
                      <Image
                        src={"/images/learn.png"}
                        width={15}
                        height={15}
                        alt="person"
                      />{" "}
                      <span className="text-black">Learn</span>
                    </button>
                  </div>
                  {/* step5 */}
                  <div className="absolute -left-[15px] top-56 z-1000 flex justify-start items-center gap-x-4 ">
                    <div className="bg-white">
                      <Image
                        src={"/images/blue-tick.png"}
                        width={30}
                        height={30}
                        alt="tick"
                      />
                    </div>
                    <button className="flex justify-center items-center bg-[#EDE9FE] px-3 py-[4px] gap-x-2 rounded-2xl">
                      <Image
                        src={"/images/apply-star.png"}
                        width={15}
                        height={15}
                        alt="person"
                      />{" "}
                      <span className="text-black">Apply to Schools</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[90vh] flex justify-center items-center ">
            <div className="w-8/12 h-65 rounded-2xl bg-[#B7D7FA] relative">
              <div className="absolute w-full h-full rounded-2xl bg-[#88BCF7] -left-4 -top-4 z-10"></div>
              <div className="absolute w-full h-full rounded-2xl bg-[#0F6CD7] -left-8 -top-8 z-20 flex justify-center items-center flex-col p-6">
                <h1 className="text-[36px] text-white">
                  Whether you're learning, teaching, or managing a school
                </h1>
                <p className="text-white text-lg">
                  we simplify your journey with clear, guided steps that load as
                  you scroll. Hover to explore details in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepForStudent;
