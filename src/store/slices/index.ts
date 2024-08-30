import { combineReducers } from "@reduxjs/toolkit";

import homeReducer from "./home/home.slice";

export const reducers = combineReducers({
  home: homeReducer,
});
