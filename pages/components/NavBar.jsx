import { useState } from "react";
import { Link, ScrollLink } from "react-scroll";
import AnimatedText from "./AnimatedText";

const NavBarItem = ({ title, classProps }) => {
  //   return <li className={`${classProps}`}>{title}</li>;
  return (
    <Link to={title} smooth={true} duration={500} spy={true} offset={-64}>
      {
        <AnimatedText
          classProps={classProps}
          text={title}
          animation="show-right"
        ></AnimatedText>
      }
    </Link>
  );
};

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="w-full flex justify-between items-center py-4 hidden sm:flex">
        <Link
          to="About Me"
          smooth={true}
          duration={500}
          spy={true}
          offset={-64}
        >
          <AnimatedText
            classProps=" bg-main text-white font-mono font-semibold cursor-pointer md:text-xl lg:text-3xl"
            text="Leo Ionescu."
            animation="show-right"
          ></AnimatedText>
        </Link>

        <ul className="flex list-none flex-row justify-betweens flex-initial">
          {["About Me", "Skills", "Education", "Experience", "Portfolio"].map(
            (item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                classProps={`text-white font-mono font-semibold hover:text-accent cursor-pointer lg:text-lg lg:pt-4 mx-4 delay-${index}`}
              />
            )
          )}
        </ul>
      </div>
      <div className="-mr-2 flex md:hidden justify-between items-center">
        {/* Hamburger menu icon */}
        <Link
          to="About Me"
          smooth={true}
          duration={500}
          spy={true}
          offset={-64}
        >
          <AnimatedText
            classProps=" bg-main text-white font-mono font-semibold cursor-pointer md:text-xl lg:text-3xl"
            text="Leo Ionescu."
            animation="show-right"
          ></AnimatedText>
        </Link>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-white"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Burger menu items */}

      <div className={showMenu ? " md:hidden pb-2" : "hidden "}>
        {["About Me", "Skills", "Education", "Portfolio"].map((item, index) => (
          <NavBarItem
            key={item + index}
            title={item}
            classProps={`text-white font-mono font-semibold hover:text-accent cursor-pointer lg:text-lg lg:pt-4 delay-0`}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
