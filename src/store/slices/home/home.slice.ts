import { createSlice } from "@reduxjs/toolkit";

import { CategoriesStateType, TCategoreis, TSearchFilms } from "./home.types";
import { getCategoriesThunk, getSearchFilmsThunk } from "./home.thunk";

const initialState: CategoriesStateType = {
  categories: [],
  searchFilms: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getCategoriesThunk.fulfilled,
      (state, { payload }: { payload: TCategoreis[] }) => {
        state.categories = payload;
      }
    );
    builder.addCase(
      getSearchFilmsThunk.fulfilled,
      (state, { payload }: { payload: TSearchFilms[] }) => {
        state.searchFilms = payload;
      }
    );
  },
});

export default homeSlice.reducer;
