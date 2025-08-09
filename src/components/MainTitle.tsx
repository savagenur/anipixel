import React from "react";
import type { TopAnimeFilter } from "../core/enums/TopAnimeFilter";
import { useNavigate } from "react-router-dom";

export type MainTitleProps = {
  title: string;
  filter?: TopAnimeFilter | null;
  onClick?: () => void;
};
const MainTitle = ({ title, onClick, filter }: MainTitleProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={onClick}
      className="flex justify-between cursor-pointer items-center"
    >
      <p className="text-xl text-textTitle">{title}</p>
      {filter && (
        <p
          className="text-sm text-textColor3"
          onClick={() => navigate(`/top-anime/${filter}/page/1`)}
        >
          View All
        </p>
      )}
    </div>
  );
};

export default MainTitle;
