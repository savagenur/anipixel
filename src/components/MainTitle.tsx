import React from "react";

export type MainTitleProps = {
  title: string;
  onClick?: () => void;
};
const MainTitle = ({ title, onClick }: MainTitleProps) => {
  return (
    <div onClick={onClick} className="flex justify-between cursor-pointer items-center">
      <p className="text-xl text-textTitle">{title}</p>
      <p className="text-sm text-textColor3">View All</p>
    </div>
  );
};

export default MainTitle;
