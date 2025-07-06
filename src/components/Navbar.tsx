import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="main-padding bg-background h-20 text-textColor2 w-full  items-center gap-4 lg:flex hidden" >
      <img
        className="h-12 w-12 justify-center items-center"
        src={"src/assets/react.svg"}
        alt=""
      />
      <div className="flex justify-center w-full items-center">
        <div className="flex justify-center gap-10">
          <NavLink className="text-sm sm:text-base" to={"/"}>
            Search
          </NavLink>
          <NavLink className="text-sm sm:text-base" to={"/social"}>
            Social
          </NavLink>
          <NavLink className="text-sm sm:text-base" to={"/forum"}>
            Forum
          </NavLink>
        </div>
        <div className="pl-20 flex justify-start gap-5 items-center">
          <NavLink className="text-sm sm:text-base" to={"/forum"}>
            Login
          </NavLink>
          <Button  children="Sign up" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
