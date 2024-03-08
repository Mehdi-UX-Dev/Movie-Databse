import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../../public/assets/movix-logo.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

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

  const navigationHandler = (type: string) => {
    if (type === "movie") {
      push("/explore/movie");
    } else {
      push("/explore/tv");
    }
    setMobileMenu(false);
  };

  return (
    <header
      className={`fixed translate-y-0 z-10 bg-black bg-opacity-25  h-16  backdrop-blur-sm    w-full   `}
    >
      <div className="flex justify-between items-center max-w-6xl h-full mx-auto">
        <div className="cursor-pointer  " onClick={() => push("/")}>
          <Image src={logo} alt="logo" height={150} width={150} className="" />
        </div>
        <ul className="list-none hidden md:flex items-center space-x-4 ">
          <li
            className=" text-white cursor-pointer hover:text-pink-500"
            onClick={() => navigationHandler("movie")}
          >
            Movies
          </li>
          <li
            className=" text-white cursor-pointer hover:text-pink-500"
            onClick={() => navigationHandler("tv")}
          >
            TV Shows
          </li>
          <li className=" text-white cursor-pointer hover:text-pink-500 ">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-5 md:hidden">
        <HiOutlineSearch onClick={openSearch} />
        {mobileMenu ? (
          <VscChromeClose onClick={() => setMobileMenu(false)} />
        ) : (
          <SlMenu onClick={openMobileMenu} />
        )}
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
