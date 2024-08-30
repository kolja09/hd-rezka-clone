import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { HomeStateType } from "./home.types";
const initialState: HomeStateType = {
  theme: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setTheme(state, { payload }: PayloadAction<string>) {
      state.theme = payload;
    },
  },
  extraReducers: () => {},
});

export const { setTheme } = homeSlice.actions;

export default homeSlice.reducer;
