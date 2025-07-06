import clsx from "clsx";
import React, { type ReactNode } from "react";
import { twx } from "../utils/utils";

export type ButtonType = {
  children: ReactNode;
  className?: string | null;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const Button = ({
  children,
  className,
  type = "button",
  onClick,
}: ButtonType) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={twx(
        "bg-blue-500 text-white text-nowrap  px-4 py-2 cursor-pointer rounded-lg",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
