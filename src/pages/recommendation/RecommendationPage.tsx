import React from "react";
import { useRecommendations } from "../../hooks/recommendation/useRecommendation";
import { convertToFullDate } from "../../utils/utils";
import SkeletonCard from "../../components/SkeletonCard";

const RecommendationPage = () => {
  const { data: recommendations, isLoading, error } = useRecommendations(1);
  return (
    <div className="main-padding gap-5 flex flex-col pt-5">
      {isLoading?<div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 mt-5 pb-10">
          <SkeletonCard count={6} />
        </div>:recommendations?.map((recommendation) => (
        <div className="w-full max-w-3xl mx-auto p-4 space-y-4 rounded-lg border bg-background shadow-md">
          {/* User Info */}
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <a
              href={recommendation.user.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:underline"
            >
              @{recommendation.user.username}
            </a>
            <span className="text-textColor2">
              {convertToFullDate(recommendation.date)}
            </span>
          </div>

          {/* Review Content */}
          <div className="text-base text-textColor2">
            <p>{recommendation.content}</p>
          </div>

          {/* Anime Entries */}
          <div className="grid gap-4 grid-cols-2 sm:mx-20 md:mx-30">
            {recommendation.entry.map((anime) => (
              <a
                key={anime.mal_id}
                href={anime.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col  gap-3 rounded-lg border border-gray-600 p-3 hover:shadow transition hover:bg-hoverBG"
              >
                <img
                  src={anime.images.jpg.large_image_url}
                  alt={anime.title}
                  className="aspect-[.7] object-cover rounded-md"
                />
                <div className="flex flex-col h-full justify-between">
                  <h2 className="font-semibold text-textTitle text-sm">
                    {anime.title}
                  </h2>
                  <span className="text-sm text-muted-foreground text-textColor4">
                    View on MyAnimeList
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationPage;
