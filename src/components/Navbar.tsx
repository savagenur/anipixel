import React, { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import clsx from "clsx";
import reactLogo from "../assets/react.svg";
import { twx } from "../utils/utils";
import japanBg from "../assets/images/japan-bg.jpg";

const Navbar = ({ url = japanBg }: { url?: string | undefined | null }) => {
  const { pathname } = useLocation();
  const showImage = pathname.startsWith("/anime/");
  const navigate = useNavigate();

  return (
    <div
      className={twx(
        "w-full",
        showImage && "bg-cover bg-center bg-no-repeat h-[45vh] bg-darken"
      )}
      style={
        showImage ? { backgroundImage: `url(${url ?? japanBg})` } : undefined
      }
    >
      <div
        className={twx(
          "main-padding h-20 text-textColor2 w-full items-center gap-4 lg:flex hidden",
          showImage
            ? "bg-background/70 hover:bg-background transition-all duration-500 text-foreground hover:text-textColor2 absolute"
            : "bg-background"
        )}
      >
        
        <img src={reactLogo} alt="Logo" className="h-12 w-12" />

        <div className="flex justify-center w-full items-center">
          {/* Left links */}
          <div className="flex justify-center gap-10">
            <NavLink
              className="text-sm sm:text-base hover:text-foreground"
              to="/search/anime"
            >
              Search
            </NavLink>
            <NavLink
              className="text-sm sm:text-base hover:text-foreground"
              to="/schedule"
            >
              Schedule
            </NavLink>
            <NavLink
              className="text-sm sm:text-base hover:text-foreground"
              to="/recommendation"
            >
              Recommendations
            </NavLink>
          </div>

          {/* Right actions */}
          <div className="pl-20 flex gap-5 items-center">
            <NavLink
              className="text-sm sm:text-base hover:text-white"
              to="/sign-in"
            >
              Login
            </NavLink>
            <Button onClick={() => navigate("/sign-up")}>Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
