import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import reactLogo from "../assets/react.svg";
import { twx } from "../utils/utils";
import japanBg from "../assets/images/japan-bg.jpg";
import { Menu } from "lucide-react";

const Navbar = ({ url = japanBg }: { url?: string | undefined | null }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const showImage = pathname.startsWith("/anime/");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={twx(
        "relative w-full",
        showImage && "bg-cover bg-center bg-no-repeat h-[45vh] bg-darken"
      )}
      style={showImage ? { backgroundImage: `url(${url ?? japanBg})` } : undefined}
    >
      {/* Main navbar container */}
      <div
        className={twx(
          "main-padding h-20 text-textColor2 flex items-center gap-4",
          "relative", // Ensure on top
          showImage
            ? "bg-background/70 hover:bg-background transition-all duration-500 text-foreground hover:text-textColor2"
            : "bg-background",
          "lg:flex hidden" // Desktop only
        )}
      >
        <img
          onClick={() => navigate("/search/anime")}
          src={reactLogo}
          alt="Logo"
          className="h-12 w-12 cursor-pointer"
        />

        {/* Center links */}
        <div className="flex justify-center w-full items-center gap-10">
          <NavLink className="text-sm sm:text-base hover:text-foreground" to="/search/anime">
            Search
          </NavLink>
          <NavLink className="text-sm sm:text-base hover:text-foreground" to="/schedule">
            Schedule
          </NavLink>
          <NavLink className="text-sm sm:text-base hover:text-foreground" to="/recommendation">
            Recommendations
          </NavLink>
        </div>

        {/* Right actions */}
        <div className="pl-20 flex gap-5 items-center">
          <NavLink className="text-sm sm:text-base hover:text-white" to="/sign-in">
            Login
          </NavLink>
          <Button onClick={() => navigate("/sign-up")}>Sign up</Button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <Menu
        className="text-textTitle m-3 cursor-pointer lg:hidden block  relative"
        onClick={() => setShowMenu(!showMenu)}
      />

      {/* Overlay */}
      <div
        className={twx(
          "fixed inset-0 bg-black/50 transition-opacity duration-300 z-40",
          showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setShowMenu(false)}
      />

      {/* Drawer */}
      <div
        className={twx(
          "fixed top-0 left-0 h-full w-[70vw] max-w-sm bg-background shadow-lg z-50 transition-transform duration-500 ease-in-out",
          showMenu ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4 text-primary text-center">Anipixel</h2>
          <ul className="flex flex-col gap-3 text-textTitle">
            <NavLink to="/search/anime" onClick={() => setShowMenu(false)}>Search</NavLink>
            <NavLink to="/schedule" onClick={() => setShowMenu(false)}>Schedule</NavLink>
            <NavLink to="/recommendation" onClick={() => setShowMenu(false)}>Recommendations</NavLink>
            <hr />
            <NavLink to="/sign-in" onClick={() => setShowMenu(false)}>Login</NavLink>
            <NavLink to="/sign-up" onClick={() => setShowMenu(false)}>Sign up</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;