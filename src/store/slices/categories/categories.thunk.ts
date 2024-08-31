import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCategories } from "../../../api/categories";

import { GET_CATEGORIES } from "./consts";

export const getCategoriesThunk = createAsyncThunk(
  GET_CATEGORIES,
  async ({ onError, onSuccess }: IThunkApi) => {
    try {
      const { data } = await getCategories();

      onSuccess && onSuccess(data);

      return data;
    } catch (e: any) {
      onError && onError(e);
    }
  }
);
