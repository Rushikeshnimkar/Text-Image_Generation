import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiFillStar,
} from "react-icons/ai";
import { FiUser, FiFileText } from "react-icons/fi";

import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import MobileNav from "./MobileNav";

function Header() {
  const [showNav, setShowNav] = useState(false);  
  const location = useLocation();

  // Function to get the active link color
  const getLinkColor = (path) => {
    return location.pathname === path ? " bg-blue text-blue-800 bg-opacity-50 backdrop-blur-lg " : " bg-transparent bg-opacity-50 backdrop-blur-lg";
  };

  return (
    <div className="flex items-center justify-between px-5 z-50  backdrop-blur-lg shadow-md shadow-black relative top-5 rounded-full">
      <span className="capitalize md:w-1/3 lg:w-1/2 flex items-center justify-start py-5 px-4 relative">
        <h1 className="text-shadow  shadow-purple-400 text-white cursor-pointer text-xl lg:text-3xl font-bold bg-gradient-to-r from-gray-50 to-blue-100 bg-clip-text text-transparent uppercase">
          Lazarus AI
        </h1>
      </span>
      <div className="w-2/3 hidden lg:flex items-center justify-end text-white px-5">
        <ul className="flex gap-8 lg:gap-12">
          <li className="relative group">
            <Link
              to={"/"}
              className={`flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] ${getLinkColor(
                "/"
              )}`}
            >
              <AiOutlineHome fontSize={20} />
              <span className="">Home</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/imagegenerate"}
              className={`flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] ${getLinkColor(
                "/imagegenerate"
              )}`}
            >
              <FiUser fontSize={20} />
              <span className="">Image Generation</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/textgenerate"}
              className={`flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] ${getLinkColor(
                "/textgenerate"
              )}`}
            >
              <AiOutlineFundProjectionScreen fontSize={20} />
              <span className="">Text Generation</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/about"}
              className={`flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] ${getLinkColor(
                "/resume"
              )}`}
            >
              <FiFileText fontSize={20} />
              <span className="">About</span>
            </Link>
          </li>
        </ul>
      </div>
      <span>
        <div className="h-full lg:hidden flex items-center justify-center cursor-pointer relative">
          {showNav ? (
            <MdClose
              fontSize={25}
              className="text-white"
              onClick={() => setShowNav(!showNav)}
            />
          ) : (
            <RiMenu3Fill
              fontSize={25}
              className="text-white"
              onClick={() => setShowNav(!showNav)}
            />
          )}
          <MobileNav showNav={showNav} setShowNav={setShowNav} />
        </div>
      </span>
    </div>
  );
}

export default Header;
