"use client";

import Image from "next/image";

const Navbar = () => {
  const menus = [
    {
      title: "Explore",
      link: "/",
      icon: "/images/explore.png",
    },
    {
      title: "Inspiration",
      link: "/",
      icon: "/images/inspiration.png",
    },
    {
      title: "Career",
      link: "/",
      icon: "/images/career.png",
    },
    {
      title: "News",
      link: "/",
      icon: "/images/news.png",
    },
  ];

  return (
    <header className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        {/* Left section: Logo + Search */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex items-center gap-x-3">
            <Image
              src="/images/logo.png"
              width={120}
              height={100}
              alt="Logo"
              priority
            />
            <div className="w-[1px] h-3 bg-[#88BCF7] hidden sm:block"></div>
          </div>

          <select className="text-white border-0 outline-0 text-[12px] bg-transparent cursor-pointer">
            <option
              value="default"
              className="text-[8px] text-black font-light"
            >
              Choose Goal
            </option>
          </select>

          <div className="relative w-full sm:w-auto">
            <button
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2"
              aria-label="Search"
            >
              <Image
                src="/images/search.png"
                width={15}
                height={15}
                alt="Search icon"
              />
            </button>
            <input
              type="text"
              placeholder="Search for School, College, and more..."
              className="border border-[#58A1F3] h-8 rounded-full outline-none w-full min-w-[230px] sm:min-w-[289px] text-[12px] pl-10 pr-2 placeholder:text-white bg-transparent text-white"
            />
          </div>
        </div>

        {/* Right section: Menus + Icons */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center md:justify-between lg:justify-end gap-3">
          <ul className="flex flex-wrap items-center justify-start sm:justify-center gap-x-6 gap-y-2">
            {menus.map((item, index) => (
              <li
                key={item.title + index}
                className="flex items-center gap-x-1 text-[14px]"
              >
                <Image
                  src={item.icon}
                  width={18}
                  height={18}
                  alt={`${item.title} icon`}
                />
                <span className="text-white whitespace-nowrap">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-start sm:justify-center gap-x-2">
            <div className="flex items-center gap-x-3 border border-[#58A1F3] py-2 px-3 rounded-full">
              <Image src="/images/bar.png" width={18} height={18} alt="Bar" />
              <Image
                src="/images/person.png"
                width={15}
                height={15}
                alt="Person"
              />
            </div>
            <div className="border border-[#58A1F3] p-2 rounded-full">
              <Image
                src="/images/world.png"
                width={15}
                height={15}
                alt="World"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
