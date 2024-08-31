import { combineReducers } from "@reduxjs/toolkit";

import categoriesReducer from "./categories/categories.slice";

export const reducers = combineReducers({
  categories: categoriesReducer,
});
