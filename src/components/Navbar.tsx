import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "./Button";
import clsx from "clsx";
import reactLogo from "../assets/react.svg";
import { twx } from "../utils/utils";

type NavbarProps = {
  imageUrl?: string | null;
};

const Navbar: React.FC<NavbarProps> = ({ imageUrl = null }) => {
  const { pathname } = useLocation();
  const showImage = imageUrl && pathname.startsWith("/anime/");

  return (
    <div
      className={twx(
        "w-full",
        showImage && "bg-cover bg-center bg-no-repeat h-[45vh]"
      )}
      style={showImage ? { backgroundImage: `url(${imageUrl})` } : undefined}
    >
      <div
        className={twx(
          "main-padding h-20 text-textColor2 w-full items-center gap-4 lg:flex hidden",
          showImage
            ? "bg-background/70 hover:bg-background transition-all duration-500 text-foreground hover:text-textColor2"
            : "bg-background"
        )}
      >
        <img src={reactLogo} alt="Logo" className="h-12 w-12" />

        <div className="flex justify-center w-full items-center">
          {/* Left links */}
          <div className="flex justify-center gap-10">
            <NavLink
              className="text-sm sm:text-base hover:text-foreground"
              to="/"
            >
              Search
            </NavLink>
            <NavLink
              className="text-sm sm:text-base hover:text-foreground"
              to="/social"
            >
              Social
            </NavLink>
            <NavLink
              className="text-sm sm:text-base hover:text-foreground"
              to="/forum"
            >
              Forum
            </NavLink>
          </div>

          {/* Right actions */}
          <div className="pl-20 flex gap-5 items-center">
            <NavLink
              className="text-sm sm:text-base hover:text-white"
              to="/forum"
            >
              Login
            </NavLink>
            <Button>Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
