import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black/70 backdrop-filter backdrop-blur-md overflow-x-hidden sfpro text-white w-full fixed z-50">
      <div className="mx-4 md:mx-[50px] lg:mx-[72px]">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-lg font-bold">
              <img className="h-8" src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="flex text-[18px] items-baseline space-x-10">
              <Link
                to="/"
                className={`cursor-pointer ${activeMenu === "home"
                    ? "scale-110 transform transition-transform duration-300 border-[#C23DF5] border-b-2"
                    : "hover:text-slate-400"
                  }`}
                onClick={() => handleMenuClick("home")}
              >
                Home
              </Link>
              <Link
                to="/games"
                className={`cursor-pointer ${activeMenu === "games"
                    ? "scale-110 transform transition-transform duration-300 border-[#C23DF5] border-b-2"
                    : "hover:text-slate-400"
                  }`}
                onClick={() => handleMenuClick("games")}
              >
                Games
              </Link>
              {/* <Link
                to="/playground"
                className={`cursor-pointer ${
                  activeMenu === "playground"
                    ? "text-slate-400 border-[#C23DF5] border-b-2"
                    : "hover:hover:text-slate-400"
                }`}
                onClick={() => handleMenuClick("playground")}
              >
                Playground
              </Link> */}
              <Link
                to="/contactus"
                className={`cursor-pointer ${activeMenu === "contact"
                    ? "scale-110 transform transition-transform duration-300 border-[#C23DF5] border-b-2"
                    : "hover:text-slate-400"
                  }`}
                onClick={() => handleMenuClick("contact")}
              >
                Contact Us
              </Link>
              <div className="hidden md:block">
                <div className=" flex gap-6">
                  <a
                    href="https://github.com/m4-team/spin-sdk/blob/main/guide/2_INTRODUCTION.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="Btn-Container"
                  >
                    <span className="text">Github</span>
                    <span class="icon-Container">
                      <svg
                        width="16"
                        height="19"
                        viewBox="0 0 16 19"
                        fill="nones"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.61321"
                          cy="1.61321"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="5.73583"
                          cy="1.61321"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="5.73583"
                          cy="5.5566"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="9.85851"
                          cy="5.5566"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="9.85851"
                          cy="9.5"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="13.9811"
                          cy="9.5"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="5.73583"
                          cy="13.4434"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="9.85851"
                          cy="13.4434"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="1.61321"
                          cy="17.3868"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="5.73583"
                          cy="17.3868"
                          r="1.5"
                          fill="black"
                        ></circle>
                      </svg>
                    </span>
                  </a>
                  <a
                    href="https://thirumurugan7.hashnode.dev/spin-up-an-onchain-game-with-zk-spin?ref=twitter-share"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="Btn-Container"
                  >
                    <span className="text">Docs</span>
                    <span class="icon-Container">
                      <svg
                        width="16"
                        height="19"
                        viewBox="0 0 16 19"
                        fill="nones"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.61321"
                          cy="1.61321"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="5.73583"
                          cy="1.61321"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="5.73583"
                          cy="5.5566"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="9.85851"
                          cy="5.5566"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="9.85851"
                          cy="9.5"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="13.9811"
                          cy="9.5"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="5.73583"
                          cy="13.4434"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="9.85851"
                          cy="13.4434"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="1.61321"
                          cy="17.3868"
                          r="1.5"
                          fill="black"
                        ></circle>
                        <circle
                          cx="5.73583"
                          cy="17.3868"
                          r="1.5"
                          fill="black"
                        ></circle>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={`${isOpen ? "block" : "hidden"} lg:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium hover:underline ${activeMenu === "home" ? "scale-110 transform transition-transform duration-300" : ""
              }`}
            onClick={() => handleMenuClick("home")}
          >
            Home
          </Link>
          <Link
            to="/games"
            className={`block px-3 py-2 rounded-md text-base font-medium hover:underline ${activeMenu === "games" ? "scale-110 transform transition-transform duration-300" : ""
              }`}
            onClick={() => handleMenuClick("games")}
          >
            Games
          </Link>
          {/* <Link
            to="/playground"
            className={`block px-3 py-2 rounded-md text-base font-medium hover:underline ${
              activeMenu === "playground" ? "scale-110 transform transition-transform duration-300" : ""
            }`}
            onClick={() => handleMenuClick("playground")}
          >
            Playground
          </Link> */}
          <Link
            to="/contactus"
            className={`block px-3 py-2 rounded-md text-base font-medium hover:underline ${activeMenu === "contact" ? "scale-110 transform transition-transform duration-300" : ""
              }`}
            onClick={() => handleMenuClick("contact")}
          >
            Contact Us
          </Link>
          <div className=" px-3 py-3">
            <div className="space-x-4 ">
              <a
                href="https://github.com/m4-team/spin-sdk/blob/main/guide/2_INTRODUCTION.md"
                target="_blank"
                rel="noopener noreferrer"
                class="customButton"
              >Github</a>
              <a
                href="https://thirumurugan7.hashnode.dev/spin-up-an-onchain-game-with-zk-spin?ref=twitter-share"
                target="_blank"
                rel="noopener noreferrer"
                class="customButton"
              >Docs</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
