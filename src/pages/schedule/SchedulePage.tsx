import React from "react";
import Navbar from "../../components/Navbar";
import { BG_JAPAN } from "../../utils/constants";
import { useSchedules } from "../../hooks/schedule/useSchedules";
import { Heart, Users2 } from "lucide-react";
import SkeletonCard from "../../components/SkeletonCard";

const SchedulePage = () => {
  const schedulesQuery = useSchedules(1);
  const { data: schedules, isLoading, error } = schedulesQuery;
  console.log(schedules);

  return (
    <div className="flex gap-5 w-full main-padding pt-10">
      {/* Left side */}
      <div className="flex flex-col gap-5 w-full">
        {/* Card */}
        {isLoading?<div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 mt-5 pb-10">
          <SkeletonCard count={6} />
        </div>:schedules?.map((anime) => (
          <div key={anime.mal_id} className="flex rounded-lg bg-background gap-2 overflow-hidden">
            <img
              className="h-40 aspect-[.75] object-cover"
              src={anime.images.jpg.image_url}
              alt=""
            />
            <div className="flex  flex-col sm:flex-row justify-between p-3 w-full">
              <div className="flex flex-col gap-1">
                <p className="text-textTitle">{anime.title}</p>
                <div className="flex flex-col justify-between h-full">
                  <p className="text-textColor4 text-sm line-clamp-3">{anime.synopsis}</p>

                  <p className="text-textTitle text-sm ">
                    Episodes: {anime.episodes ?? "N/A"}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1 justify-between items-end">
                <p className="text-textTitle">{anime.type}</p>
                <div className="flex gap-2 text-sm">
                  <div className="flex gap-.6 text-textTitle items-center">
                    <Heart className="h-4 fill-textTitle" />
                    <p>{anime.popularity}</p>
                  </div>
                  <div className="flex gap-.6 text-textTitle items-center">
                    <Users2 className="h-4 fill-textTitle" />
                    <p>{anime.members}</p>
                  </div>
                  <div className="flex gap-.6 text-textTitle items-center">
                    <Heart className="h-4 fill-textTitle" />
                    <p>{anime.popularity}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
