import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full px-4 md:px-20 lg:px-40 bg-main z-10">
      <NavBar></NavBar>
    </div>
  );
};

const headerStyle = {
  color: "red",
};

export default Header;
