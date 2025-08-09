import { useQuery } from "@tanstack/react-query";
import { ArrowDown, ChevronDown, Heart, HeartIcon } from "lucide-react";
import React, { useEffect } from "react";
import { data, useNavigate, useParams } from "react-router-dom";
import { useAnime } from "../hooks/useAnime";
import { useAnimeStore } from "../stores/animeStore";
import { useCharacters } from "../hooks/useCharacters";
import type { CharacterModel } from "../models/CharacterModel";
import SkeletonCard from "../components/SkeletonCard";
import { twx } from "../utils/utils";
import type { Relation } from "../models/AnimeModel";
import { useRelations } from "../hooks/useRelations";

const AnimeDetailPage = () => {
  const { id } = useParams();
  const { setAnime } = useAnimeStore.getState();

  const {
    data: anime,
    isLoading: isAnimeLoading,
    error: animeError,
  } = useAnime(id ?? "");

  const {
    data: characters,
    isLoading: isCharactersLoading,
    error: charactersError,
  } = useCharacters(id ?? "");

  const {
    data: relations,
    isLoading: isRelationsLoading,
    error: relationsError,
  } = useRelations(id ?? "");

  useEffect(() => {
    if (anime) {
      setAnime(anime);
    }
    return () => {
      useAnimeStore.setState({ anime: null });
    };
  }, [anime, setAnime]);

  return (
    <div className="absolute pb-10">
      {/* Header section */}
      <div className="main-padding flex w-screen bg-background sm:flex-row flex-col items-center">
        {/* Image */}
        <div className="flex flex-col gap-4 pb-5">
          <img
            className={twx(
              " w-[250px] aspect-[.7] rounded object-cover mt-[-15vh] bg-gray-600",
              isAnimeLoading && "animate-pulse bg-gray-300"
            )}
            src={anime?.images.jpg?.large_image_url ?? undefined}
            alt=""
          />
          <div className="flex  ">
            <button className="w-full bg-primary text-foreground rounded-l py-2 sm:py-2 px-3 items-center justify-center flex sm:text-base text-xs text-nowrap">
              Add to List
            </button>
            <button className="items-center bg-primary/80 text-foreground px-2 rounded-r justify-center flex cursor-pointer">
              <ChevronDown />
            </button>
            <button className="ml-4 items-center bg-red-500 text-foreground px-2 rounded justify-center flex cursor-pointer">
              <Heart className="w-5 h-5 fill-current text-white" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-between">
          {/* Description */}
          <div className="flex flex-col gap-4 m-5">
            <p className="text-lg text-textTitle">{anime?.title_english}</p>
            <p className="text-textColor4 line-clamp-8 text-sm">
              {anime?.synopsis}
            </p>
            <p className="text-textColor4">Source: {anime?.source}</p>
          </div>
          {/* Tabbar */}
          <div className="flex justify-evenly p-5">
            <p className="cursor-pointer hover:text-foreground text-textTitle">
              Overview
            </p>
            <p className="cursor-pointer hover:text-foreground text-textTitle">
              Characters
            </p>
            <p className="cursor-pointer hover:text-foreground text-textTitle">
              Staff
            </p>
          </div>
        </div>
      </div>
      {/* Main */}
      <div className="main-padding mt-8 flex gap-8">
        {/* Left side */}
        <div className="flex flex-col bg-background p-3  rounded lg:w-[20vw] gap-4 max-lg:hidden ">
          {smallInfoTitle({ title: "Score", subtitle: anime?.score ?? "N/A" })}
          {smallInfoTitle({ title: "Rating", subtitle: anime?.rating ?? "" })}
          {smallInfoTitle({
            title: "Scored by",
            subtitle: anime?.scored_by ?? "",
          })}
          {smallInfoTitle({ title: "Airing", subtitle: anime?.status ?? "" })}
          {smallInfoTitle({ title: "Format", subtitle: anime?.type ?? "" })}
          {smallInfoTitle({
            title: "Episodes",
            subtitle: anime?.episodes?.toString() ?? "",
          })}
          {smallInfoTitle({ title: "Season", subtitle: anime?.season ?? "" })}
        </div>
        {/* Right side */}
        <div className="w-full">
          <p className="font-semibold text-textTitle pb-4">Relations</p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {relations?.map((relation, index) => (
              <RelationItem relation={relation} index={index} />
            ))}
          </div>

          <p className="mt-5 font-semibold text-textTitle pb-4">Characters</p>
          <div className="grid lg:grid-cols-2 gap-x-8 gap-y-4">
            {isCharactersLoading ? (
              <SkeletonCard count={6} />
            ) : (
              characters?.map((character) => characterItem(character))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailPage;

const RelationItem = ({
  relation,
  index,
}: {
  relation: Relation;
  index: number;
}) => {
  const navigate = useNavigate();
  return (
    <div
      key={index}
      className="flex bg-background overflow-hidden rounded h-[120px]"
      onClick={() => navigate(`/anime/${relation.entry[0].mal_id}`)}
    >
      {/* <img
        className="aspect-[.7] object-contain"
        src={
          relation.entry[0].url
        }
        alt=""
      /> */}
      <div className="flex flex-col p-2 pl-3 justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-primary overflow-hidden">
            {relation.relation}
          </p>
          <p className="text-textTitle overflow-hidden">
            {relation.entry[0].name}
          </p>
        </div>
        <p className="text-textColor4 overflow-hidden">
          {relation.entry[0].type}
        </p>
      </div>
    </div>
  );
};

function characterItem(character: CharacterModel) {
  const actor =
    character.voice_actors.length !== 0 ? character.voice_actors[0] : null;

  return (
    <div
      key={character.character.mal_id}
      className="flex bg-background overflow-hidden rounded h-[90px]"
    >
      <img
        className="aspect-[.7] object-contain"
        src={character.character.images.jpg.image_url}
        alt=""
      />
      <div className="flex  w-full flex-col px-3 py-2 justify-between">
        <div className="flex justify-between gap-2">
          <p className="text-textTitle overflow-hidden">
            {character.character.name}
          </p>
          <p className="text-textTitle overflow-hidden">{actor?.person.name}</p>
        </div>
        <div className="flex justify-between gap-2">
          <p className="text-textColor4 overflow-hidden">{character.role}</p>
          <p className="text-textColor4 overflow-hidden">{actor?.language}</p>
        </div>
      </div>
      <img
        className="aspect-[.7] object-contain"
        src={actor?.person.images.jpg.image_url}
        alt=""
      />
    </div>
  );
}
function smallInfoTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string | number;
}) {
  return (
    <div>
      <p className="text-textTitle text-sm">{title}</p>
      <p className="text-textColor4 text-sm">{subtitle}</p>
    </div>
  );
}
