import api from "./apiInterceptor";

export const getCategories = () => {
  return api.get("categories.json");
};

export const getSearchFilms = () => {
  return api.get("searchFilms.json");
};
