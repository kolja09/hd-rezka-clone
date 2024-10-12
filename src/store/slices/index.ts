import { combineReducers } from "@reduxjs/toolkit";

import homeReducer from "./home/home.slice";
import authReducer from "./auth/auth.slice";

export const reducers = combineReducers({
  home: homeReducer,
  auth: authReducer,
});
