import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose, VscThreeBars } from "react-icons/vsc";

import logo from "../../../public/logo.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { PiTelevisionBold } from "react-icons/pi";
import { RiMovie2Line } from "react-icons/ri";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState<boolean>();

  const { push } = useRouter();
  const location = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter" && query.length > 0) {
      push(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  return (
    <header
      className={`px-4 fixed z-10 bg-[#0A325C] bg-opacity-50  h-24  backdrop-blur-sm w-full`}
    >
      <div className="flex justify-between lg:justify-normal items-center max-w-6xl h-full mx-auto">
        <div className="cursor-pointer" onClick={() => push("/")}>
          <Image src={logo} className="w-32" alt="logo" />
        </div>

        <VscThreeBars className="lg:hidden text-white" size={48} />

        <div className="hidden lg:flex grow justify-center">
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
              onClick={openSearch}
              className="flex items-center gap-2 hover:bg-[#21B1CA] hover:py-2 hover:px-4 transition-all cursor-pointer ease-in-out duration-300 hover:rounded-full hover:text-gray-950"
            >
              <HiOutlineSearch size={24} />
              <p className="text-[1.25rem]">Search</p>
            </div>
          </div>
        </div>
      </div>

      {showSearch && (
        <div className="relativ">
          <div className="relative inputAnimate">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              className="w-full py-2"
            />
            <VscChromeClose
              className="bg-white absolute right-0 top-0  "
              size={32}
              onClick={() => setShowSearch(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
