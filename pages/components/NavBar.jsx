import { useState, useEffect } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../public/images/logo2.png";

const NavBarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center py-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <div className="cursor-pointer">
          {/* <Image src={logo} width={80} height={80}alt="logo"  /> */}
          <h1 className="text-white font-mono font-semibold text-xl">Leo.</h1>
        </div>
      </div>
      <ul className=" md:flex hidden list-none flex-row justify-between flex-initial">
        {["About Me", "Skills", "Education", "Portfolio", "Contact"].map(
          (item, index) => (
            <NavBarItem
              key={item + index}
              title={item}
              classProps="text-white font-mono font-semibold hover:text-blue-400"
            />
          )
        )}
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animatee-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallet"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classProps="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
