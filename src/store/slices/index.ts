import { combineReducers } from "@reduxjs/toolkit";

import categoriesReducer from "./categories/categories.slice";
import authReducer from "./auth/auth.slice";

export const reducers = combineReducers({
  categories: categoriesReducer,
  auth: authReducer,
});
