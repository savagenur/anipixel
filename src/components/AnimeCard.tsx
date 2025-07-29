import React from "react";
import { useNavigate } from "react-router-dom";
import type { AnimeModel } from "../models/AnimeModel";

const AnimeCard = ({anime}:{anime:AnimeModel}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/anime/${anime.mal_id}`)} className="group cursor-pointer">
      <img
        className="aspect-[.7] rounded object-cover"
        src={
          anime.images.jpg?.image_url
        }
        alt=""
      />
      <p className="text-textColor4 pt-2 group-hover:text-primary">
        {anime.title}
      </p>
    </div>
  );
};

export default AnimeCard;
