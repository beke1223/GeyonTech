import React from "react";
import Button from "../components/Button";
import { useState } from "react";

const TabBar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/" },
    { name: "About", link: "/about-us" },
    { name: "Blog's", link: "/" },
    { name: "About", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left">
      <div className="md:flex bg-white items-center justify-between py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer
      flex imtem-center font-[poppins] text-gray-800
      "
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">G</span>
          Gyeon
        </div>
        <div
          className="text-3xl top-6 right-8 absolute cuser-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12
      absolute md:static bg-white w-full md:z-auto z-[-1] left-0 md:w-auto md:pl-0 pl-9
      transition-all duration-500 ease-in-out  ${
        open ? "top-20" : "top-[-490px]"
      }
  `}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7  text-xl" key={link.name}>
              <a
                className="hover: text-gray-400 duration-500"
                href={link.link}
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Get Started </Button>
          <Button>Join For Free</Button>
        </ul>
      </div>
    </div>
  );
};

export default TabBar;
