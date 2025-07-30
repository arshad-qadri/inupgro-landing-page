import Image from "next/image";
import React from "react";

const Footer = () => {
  const icons = [
    {
      icon: "/images/facebook.png",
    },
    {
      icon: "/images/google.png",
    },
    {
      icon: "/images/instagram.png",
    },
    {
      icon: "/images/telegram.png",
    },
    {
      icon: "/images/youtube.png",
    },
    {
      icon: "/images/whatsapp.png",
    },
  ];
  return (
    <div className="bg-white w-full py-10 lg:px-14 px-4">
      <div className="grid md:grid-cols-[40%_auto] xl:grid-cols-2 grid-cols-1 ">
        <div>
          <Image
            src="/images/logo-black.png"
            width={200}
            height={100}
            alt="logo"
          />
        </div>
        <div className="grid lg:grid-cols-[10%_auto] grid-cols-1 my-8 md:my-0">
          <div></div>
          <div className="">
            <h2 className="font-semibold text-[20px] leading-[20px] tracking-[-0.02em] align-middle">
              Sign Up Today
            </h2>
            <div className="flex gap-x-3 my-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-[#F5F5F5] py-2 px-3 rounded-2xl md:min-w-80 outline-0"
              />
              <button className="bg-[#177CEF] py-2 px-3 rounded-2xl text-white text-sm flex justify-center items-center gap-x-2">
                Get Started
                <Image
                  src={"/images/right-arrow-white.png"}
                  width={15}
                  height={15}
                  alt="arrow"
                />
              </button>
            </div>
            <p className="text-[12px] text-[#737373]">
              By proceeding you agree to our{" "}
              <a href="/" className="font-semibold">
                Platform Terms
              </a>{" "}
              &{" "}
              <a href="/" className="font-semibold">
                Privacy Notice
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-[250px_auto] grid-cols-1 mm-2 mt-6 pb-10 border-b border-[#E2E8F0]">
        <div className="px-6">
          <div className="flex justify-between items-center  ">
            {icons.map((icon, index) => (
              <a href="/" key={index}>
                <Image src={icon.icon} width={20} height={20} alt="Icon" />
              </a>
            ))}
          </div>
          <div className="flex justify-between items-center my-2">
            <Image
              src={"/images/appstore.png"}
              width={100}
              height={100}
              alt="appstore"
            />
            <Image
              src={"/images/playstore.png"}
              width={100}
              height={100}
              alt="playstore"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-7 grid-cols-2 my-5 md:my-0 ">
          <div className="">
            <h4 className="text-sm font-bold">About Inupgro</h4>
            <ul>
              <li>
                <a href="/" className="text-sm text-[#737373]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="text-sm text-[#737373]">
                  Leadership Team
                </a>
              </li>
              <li>
                <a href="/" className="text-sm text-[#737373]">
                  Careers
                </a>
              </li>
              <li>
                <a href="/" className="text-sm text-[#737373]">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="">
              <h4 className="text-sm font-bold">Explore</h4>
              <ul>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    For Students
                  </a>
                </li>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    For Teachers
                  </a>
                </li>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    For Institutions
                  </a>
                </li>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    Blog / Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-span-3 my-3.5 md:my-0">
            <div className="w-full">
              <h4 className="text-sm font-bold">Features</h4>
            </div>
            <div className="flex justify-start gap-x-1">
              <ul>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    Smart Application Sync
                  </a>
                </li>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    Flipbooks with Embedded Videos
                  </a>
                </li>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    Teacher Analytics Dashboard
                  </a>
                </li>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    Automated School Dashboard
                  </a>
                </li>
              </ul>{" "}
              <ul>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    Unified Student Profile
                  </a>
                </li>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    Job & News Publishing
                  </a>
                </li>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    Skill-Based Search Filters
                  </a>
                </li>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    Multilingual Experience
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="">
              <h4 className="text-sm font-bold">Support</h4>
              <ul>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    Community
                  </a>
                </li>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="">
              <h4 className="text-sm font-bold">Legal</h4>
              <ul>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    Accessibility
                  </a>
                </li>
                <li>
                  <a href="/" className="text-sm text-[#737373]">
                    Cookie Preferences
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm mb-2 mt-8">Copyleft © 2025</div>
      <p className="text-sm">
        Built with purpose, passion, and way too much coffee.
      </p>
    </div>
  );
};

export default Footer;
