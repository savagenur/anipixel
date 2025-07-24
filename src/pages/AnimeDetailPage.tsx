import { ArrowDown, ChevronDown, Heart, HeartIcon } from "lucide-react";
import React from "react";

const AnimeDetailPage = () => {
  return (
    <div>
      {/* Header section */}
      <div className="main-padding flex w-screen bg-background">
        {/* Image */}
        <div className="flex flex-col gap-4 pb-5">
          <img
            className="min-w-[250px] aspect-[.7] rounded object-cover mt-[-15vh]"
            src={
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx178025-cWJKEsZynkil.jpg"
            }
            alt=""
          />
          <div className="flex">
            <button className="w-full bg-primary text-foreground rounded-l py-2 px-3 items-center justify-center flex">
              Add to List{" "}
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
            <p className="text-lg text-textTitle">Gachiakuta</p>
            <p className="text-textColor4 line-clamp-8 text-sm">
              A boy lives in a floating town, where the poor scrape by and the
              rich live a sumptuous life, simply casting their garbage off the
              side, into the abyss. When he’s falsely accused of murder, though,
              his wrongful conviction leads to an unimaginable punishment—exile
              off the edge, with the rest of the trash. Down on the surface, the
              cast-off waste of humanity has bred vicious monsters, and to
              travel the path to vengeance against those who cast him into Hell,
              a boy will have to become a warrior…
            </p>
            <p className="text-textColor4">Source: Kodansha USA)</p>
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
        <div className="flex flex-col bg-background p-3  rounded w-[15vw] gap-4">
          {smallInfoTitle({ title: "Format", subtitle: "TV" })}
          {smallInfoTitle({ title: "Format", subtitle: "TV" })}
          {smallInfoTitle({ title: "Format", subtitle: "TV" })}
          {smallInfoTitle({ title: "Format", subtitle: "TV" })}
          {smallInfoTitle({ title: "Format", subtitle: "TV" })}
          {smallInfoTitle({ title: "Format", subtitle: "TV" })}
          {smallInfoTitle({ title: "Format", subtitle: "TV" })}
          {smallInfoTitle({ title: "Format", subtitle: "TV" })}
        </div>
        {/* Right side */}
        <div className="w-full">
          <p className="font-semibold text-textTitle pb-4">Relations</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {relationItem()}
            {relationItem()}
            {relationItem()}
          </div>

          <p className="mt-5 font-semibold text-textTitle pb-4">Characters</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {characterItem()}
            {characterItem()}
            {characterItem()}
            {characterItem()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailPage;
function relationItem() {
  return (
    <div className="flex bg-background overflow-hidden rounded h-[120px]">
      <img
        className="aspect-[.7] object-contain"
        src={
          "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx101583-VI1PT2QGGT8W.jpg"
        }
        alt=""
      />
      <div className="flex flex-col p-2 pl-3 justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-primary overflow-hidden">Source</p>
          <p className="text-textTitle overflow-hidden">Source</p>
        </div>
        <p className="text-textColor4 overflow-hidden">Source</p>
      </div>
    </div>
  );
}

function characterItem() {
  return (
    <div className="flex bg-background overflow-hidden rounded h-[90px]">
      <img
        className="aspect-[.7] object-contain"
        src={
          "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx101583-VI1PT2QGGT8W.jpg"
        }
        alt=""
      />
      <div className="flex  w-full flex-col px-3 py-2 justify-between">
        <div className="flex justify-between gap-2">
          <p className="text-textTitle overflow-hidden">Source</p>
          <p className="text-textTitle overflow-hidden">Source</p>
        </div>
        <div className="flex justify-between gap-2">
          <p className="text-textColor4 overflow-hidden">Source</p>
          <p className="text-textColor4 overflow-hidden">Source</p>
        </div>
      </div>
      <img
        className="aspect-[.7] object-contain"
        src={
          "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx101583-VI1PT2QGGT8W.jpg"
        }
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
  subtitle: string;
}) {
  return (
    <div>
      <p className="text-textTitle text-sm">{title}</p>
      <p className="text-textColor4 text-sm">{subtitle}</p>
    </div>
  );
}
