import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { VscChromeClose, VscThreeBars } from "react-icons/vsc";

import logo from "../../../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PiTelevisionBold } from "react-icons/pi";
import { RiMovie2Line } from "react-icons/ri";
import { FaX } from "react-icons/fa6";

const Header = () => {
  const [query, setQuery] = useState("");
  const [{ showInputBar, closeAnimation }, setShowSearch] = useState<{
    closeAnimation: boolean;
    showInputBar: boolean;
  }>({
    closeAnimation: false,
    showInputBar: false,
  });

  const [showNav, setNav] = useState(false);
  const { push } = useRouter();

  const searchQueryHandler: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter" && query.length > 0) {
      push(`/search/${query}`);
    }
  };

  return (
    <header
      className={`px-4 fixed z-10 bg-[#0A325C] bg-opacity-50  h-24  backdrop-blur-sm w-full`}
    >
      <div className="flex justify-between lg:justify-normal items-center max-w-6xl h-full mx-auto">
        {!showNav && (
          <div className="cursor-pointer lg:hidden" onClick={() => push("/")}>
            <Image src={logo} className="w-32" alt="logo" />
          </div>
        )}

        <div
          className="cursor-pointer hidden lg:block"
          onClick={() => push("/")}
        >
          <Image src={logo} className="w-32 lg:w-44" alt="logo" />
        </div>

        {!showNav && (
          <VscThreeBars
            className="lg:hidden text-white"
            size={48}
            onClick={() => {
              setNav(true);
            }}
          />
        )}

        {/* for mobile */}
        <div
          className={`${
            showNav ? "flex" : "hidden"
          }  lg:hidden  justify-center`}
        >
          <div className="flex   text-white items-center gap-4 rounded-full min-[375px]:bg-gray-950 py-4 min-[375px]:px-8">
            <div className="flex items-center gap-2 hover:bg-[#21B1CA] hover:py-2 hover:px-4 transition-all cursor-pointer ease-in-out duration-300 hover:rounded-full hover:text-gray-950">
              <PiTelevisionBold className="hidden sm:block" size={24} />
              <Link className="text-[1.25rem]" href={"/explore/movie"}>
                Movie
              </Link>
            </div>
            <div className="flex items-center gap-2 hover:bg-[#21B1CA] hover:py-2 hover:px-4 transition-all cursor-pointer ease-in-out duration-300 hover:rounded-full hover:text-gray-950">
              <RiMovie2Line className="hidden sm:block" size={24} />
              <Link className="text-[1.25rem] truncate" href={"/explore/tv"}>
                TV Shows
              </Link>
            </div>
            <div
              onClick={() =>
                setShowSearch(() => ({
                  showInputBar: true,
                  closeAnimation: false,
                }))
              }
              className="flex items-center gap-2 hover:bg-[#21B1CA] hover:py-2 hover:px-4 transition-all cursor-pointer ease-in-out duration-300 hover:rounded-full hover:text-gray-950"
            >
              <HiOutlineSearch size={24} className="hidden sm:block" />
              <p className="text-[1.25rem]">Search</p>
            </div>
          </div>
        </div>
        {/* for large screens */}
        <div className={`hidden lg:flex  grow justify-center`}>
          <div className="flex  text-white items-center gap-8 rounded-full bg-gray-950 py-4 px-16">
            <div className="flex items-center gap-2 hover:bg-[#21B1CA] hover:py-2 hover:px-4 transition-all cursor-pointer ease-in-out duration-300 hover:rounded-full hover:text-gray-950">
              <PiTelevisionBold size={24} />
              <Link className="text-[1.25rem]" href={"/explore/movie"}>
                Movie
              </Link>
            </div>
            <div className="flex items-center gap-2 hover:bg-[#21B1CA] hover:py-2 hover:px-4 transition-all cursor-pointer ease-in-out duration-300 hover:rounded-full hover:text-gray-950">
              <RiMovie2Line size={24} />
              <Link className="text-[1.25rem]" href={"/explore/tv"}>
                TV Shows
              </Link>
            </div>
            <div
              onClick={() =>
                setShowSearch(() => ({
                  showInputBar: true,
                  closeAnimation: false,
                }))
              }
              className="flex items-center gap-2 hover:bg-[#21B1CA] hover:py-2 hover:px-4 transition-all cursor-pointer ease-in-out duration-300 hover:rounded-full hover:text-gray-950"
            >
              <HiOutlineSearch size={24} />
              <p className="text-[1.25rem]">Search</p>
            </div>
          </div>
        </div>
        {showNav && (
          <FaX
            size={32}
            className="text-white lg:hidden"
            onClick={() => setNav(false)}
          />
        )}
      </div>

      {showInputBar && (
        <div
          className={`relative openAnimate   ${
            closeAnimation && "closeAnimate"
          } `}
        >
          <input
            type="text"
            placeholder="Search for a movie or tv show...."
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            className="w-full py-4 px-4 outline-blue-500 outline-2   rounded-full"
          />
          <VscChromeClose
            className=" absolute right-4 top-2 cursor-pointer  "
            size={32}
            onClick={() =>
              setShowSearch(() => ({
                closeAnimation: true,
                showInputBar: true,
              }))
            }
          />
        </div>
      )}
    </header>
  );
};

export default Header;
