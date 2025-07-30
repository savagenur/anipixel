import type { Option } from "../models/Option";

const currentYear = new Date().getFullYear();
const maxYear = currentYear + 2;

export const yearOptions: Option[] = Array.from(
  { length: maxYear - 1940 + 1 },
  (_, i) => {
    const year = maxYear - i;
    return { mal_id: `${year}-01-01`, name: year.toString() };
  }
);


export const statusOptions: Option[] = [
  {
    mal_id: "airing",
    name: "Airing",
  },
  {
    mal_id: "complete",
    name: "Complete",
  },
  {
    mal_id: "upcoming",
    name: "Upcoming",
  },
];
export const typeOptions: Option[] = [
  {
    mal_id: "tv",
    name: "TV",
  },
  {
    mal_id: "movie",
    name: "Movie",
  },
  {
    mal_id: "ova",
    name: "OVA",
  },
  {
    mal_id: "special",
    name: "Special",
  },
  {
    mal_id: "ona",
    name: "ONA",
  },
  {
    mal_id: "music",
    name: "Music",
  },
  {
    mal_id: "cm",
    name: "CM",
  },
  {
    mal_id: "pv",
    name: "PV",
  },
  {
    mal_id: "tv_special",
    name: "TV Special",
  },
];
