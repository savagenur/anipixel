import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import clsx from "clsx";
import reactLogo from "../assets/react.svg";
import { twx } from "../utils/utils";
import japanBg from "../assets/images/japan-bg.jpg";
import { Menu } from "lucide-react";

const Navbar = ({ url = japanBg }: { url?: string | undefined | null }) => {
  const { pathname } = useLocation();
  const showImage = pathname.startsWith("/anime/");
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
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
        <img onClick={() => navigate('/search/anime')} src={reactLogo} alt="Logo" className="h-12 w-12 cursor-pointer" />

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
      <div>
        {/* Menu Bar */}
        <Menu
          className="text-textTitle m-3 cursor-pointer lg:hidden block"
          onClick={() => setShowMenu(!showMenu)}
        />

        {/* Overlay (click outside to close) */}
        <div
          className={twx(
            "fixed inset-0 bg-black/50 transition-opacity duration-300 z-40",
            [showMenu ? "opacity-100" : "opacity-0 pointer-events-none"]
          )}
          onClick={() => setShowMenu(false)}
        />

        {/* Drawer */}
        <div
          className={twx(
            "fixed top-0 left-0 h-full w-[70vw] max-w-sm bg-background shadow-lg z-50 transition-transform duration-500 ease-in-out",
            [showMenu ? "translate-x-0" : "-translate-x-full"]
          )}
        >
          {/* Drawer Content */}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4 text-primary text-center">Anipixel</h2>
            <ul className="space-y-2 h-full ">
              <div className="flex flex-col justify-between h-full items-start">
                {/* Left links */}
                <div className="flex flex-col justify-center gap-3 text-textTitle w-full">
                  <NavLink
                    className="text-sm sm:text-base hover:text-foreground"
                    to="/search/anime"
                    onClick={() => setShowMenu(false)}
                  >
                    Search
                  </NavLink>
                  <NavLink
                    className="text-sm sm:text-base hover:text-foreground"
                    to="/schedule"
                    onClick={() => setShowMenu(false)}
                  >
                    Schedule
                  </NavLink>
                  <NavLink
                    className="text-sm sm:text-base hover:text-foreground"
                    to="/recommendation"
                    onClick={() => setShowMenu(false)}
                  >
                    Recommendations
                  </NavLink>
                  <hr />
                  <NavLink
                    className="text-sm sm:text-base hover:text-white"
                    to="/sign-in"
                    onClick={() => setShowMenu(false)}
                  >
                    Login
                  </NavLink>

                  <NavLink
                    className="text-sm sm:text-base hover:text-white"
                    to="/sign-up"
                    onClick={() => setShowMenu(false)}
                  >
                    Sign up
                  </NavLink>

                </div>

                {/* Right actions */}
                <div className="flex flex-col gap-5 items-start">
                  
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
