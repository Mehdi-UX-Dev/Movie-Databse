import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative px-12 py-6">
      <ul className="list-none flex items-center justify-center gap-4 mb-5 ">
        <li className="transition-all ease-in duration-300 cursor-pointer text-[12px] hover:text-pink-500">
          Terms Of Use
        </li>
        <li className="transition-all ease-in duration-300 cursor-pointer text-[12px] hover:text-pink-500">
          Privacy-Policy
        </li>
        <li className="transition-all ease-in duration-300 cursor-pointer text-[12px] hover:text-pink-500">
          About
        </li>
        <li className="transition-all ease-in duration-300 cursor-pointer text-[12px] hover:text-pink-500">
          Blog
        </li>
        <li className="transition-all ease-in duration-300 cursor-pointer text-[12px] hover:text-pink-500">
          FAQ
        </li>
      </ul>
      <div className="text-[12px] leading-5 opacity-50 text-center max-w-[800px] mx-auto mb-5 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
      <div className="flex justify-center items-center gap-3 ">
        <span className="w-12 h-12 rounded-[50%] bg-black flex justify-center items-center cursor-pointer transition-all duration-300 hover:shadow-sm hover:shadow-pink-500 hover:text-pink-500 ">
          <FaFacebookF />
        </span>
        <span className="w-12 h-12 rounded-[50%] bg-black flex justify-center items-center cursor-pointer transition-all duration-300 hover:shadow-sm hover:shadow-pink-500 hover:text-pink-500">
          <FaInstagram />
        </span>
        <span className="w-12 h-12 rounded-[50%] bg-black flex justify-center items-center cursor-pointer transition-all duration-300 hover:shadow-sm hover:shadow-pink-500 hover:text-pink-500">
          <FaTwitter />
        </span>
        <span className="w-12 h-12 rounded-[50%] bg-black flex justify-center items-center cursor-pointer transition-all duration-300 hover:shadow-sm hover:shadow-pink-500 hover:text-pink-500">
          <FaLinkedin />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
