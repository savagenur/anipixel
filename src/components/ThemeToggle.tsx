import React, { useEffect, useState } from "react";
import { twx } from "../utils/utils";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = (color: string) => {
    if (theme !== color) {
      setTheme(color);
      localStorage.setItem("theme", color);
    }
    console.log(color);
  };
  return (
    <div className="flex gap-3">
      <button
        onClick={() => toggleTheme("dark")}
        className={classNameMethod("")}
      >
        A
      </button>
      <button
        onClick={() => toggleTheme("light")}
        className={classNameMethod("bg-white text-black border border-black ")}
      >
        A
      </button>

      <button
        onClick={() => toggleTheme("coffee")}
        className={classNameMethod("bg-amber-900 text-white")}
      >
        A
      </button>
    </div>
  );

  function classNameMethod(text: string): string {
    return twx(
      "w-10 h-10  flex justify-center items-center p-3 rounded bg-black text-white border cursor-pointer",
      text
    );
  }
};

export default ThemeToggle;
