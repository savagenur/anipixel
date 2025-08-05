import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { AnimeModel } from "../models/AnimeModel";
import { twx } from "../utils/utils";

const AnimeCard = ({ anime }: { anime: AnimeModel }) => {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);

  useEffect(() => {
    const handlePosition = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const spaceRight = window.innerWidth - rect.right;
      const popupWidth = 256; // same as w-64
      setShowLeft(spaceRight < popupWidth + 20); // if not enough space on right
    };

    handlePosition(); // run once
    window.addEventListener("resize", handlePosition);
    return () => window.removeEventListener("resize", handlePosition);
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={() => navigate(`/anime/${anime.mal_id}`)}
      className="relative group cursor-pointer"
    >
      <img
        className="aspect-[.7] rounded object-cover"
        src={anime.images.jpg?.image_url}
        alt={anime.title}
      />
      <p className="text-textColor4 pt-2 group-hover:text-primary">
        {anime.title}
      </p>

      {/* Hover Popup */}
      <div
        className={twx(
          "absolute z-50 hidden group-hover:flex flex-col bg-background p-3 rounded shadow-lg w-64 text-textTitle",
          showLeft ? "right-full mr-4 top-0" : "left-full ml-4 top-0"
        )}
      >
        <p className="text-sm font-semibold">{anime.title}</p>
        <p className="text-xs text-gray-500 mt-1 line-clamp-3">
          {anime.synopsis}
        </p>
       <div className="flex gap-2 pt-2 font-semibold">
         {
          anime.genres.slice(0,3).map((genre, index) => {
            return <div className="rounded flex text-center bg-yellow-400 items-center justify-center text-black text-xs py-1 px-2">{genre.name}</div>
          })
        }
       </div>
        <p className={"text-xs mt-2 text-textTitle  font-semibold"}>
          Score:{" "}
          <span
            className={twx(
              "text-base text-textTitle",
              anime.score > 8 ? "text-green-600" : "text-yellow-500"
            )}
          >
            {anime.score ?? "N/A"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AnimeCard;
