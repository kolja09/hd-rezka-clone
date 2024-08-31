import { createSlice } from "@reduxjs/toolkit";

import { CategoriesStateType, TCategoreis } from "./cateogiries.types";
import { getCategoriesThunk } from "./categories.thunk";

const initialState: CategoriesStateType = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getCategoriesThunk.fulfilled,
      (state, { payload }: { payload: TCategoreis[] }) => {
        state.categories = payload;
      }
    );
  },
});

export default categoriesSlice.reducer;
