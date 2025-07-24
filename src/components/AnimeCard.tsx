import React from "react";
import { useNavigate } from "react-router-dom";

const AnimeCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/anime/asd")} className="group cursor-pointer">
      <img
        className="aspect-[.7] rounded object-cover"
        src={
          "https://www.memrise.com/hubfs/SEO%20-%20Japanese/Images/Blog-Feature-Anime-Image-230621-v01.jpg"
        }
        alt=""
      />
      <p className="text-textColor4 pt-2 group-hover:text-primary">
        One punch man 3
      </p>
    </div>
  );
};

export default AnimeCard;
