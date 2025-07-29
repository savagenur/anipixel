export const SearchFilterEnum = {
  SEARCH: "q",
  GENRES: "genres",
  YEAR: "start_date",
  STATUS: "status",
  FORMAT: "type",
};
export const searchFilterEnumValues = () => [
  SearchFilterEnum.SEARCH,
  SearchFilterEnum.GENRES,
  SearchFilterEnum.YEAR,
  SearchFilterEnum.STATUS,
  SearchFilterEnum.FORMAT,
];
export type SearchFilterEnum =
  (typeof SearchFilterEnum)[keyof typeof SearchFilterEnum];
