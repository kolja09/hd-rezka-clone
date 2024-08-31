import api from "./apiInterceptor";

export const getCategories = () => {
  return api.get("categories.json");
};
