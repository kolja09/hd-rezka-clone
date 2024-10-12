import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCategories, getSearchFilms } from "../../../api/home";

import { GET_CATEGORIES, GET_SEARCH_FILMS } from "./consts";

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

export const getSearchFilmsThunk = createAsyncThunk(
  GET_SEARCH_FILMS,
  async ({ onError, onSuccess }: IThunkApi) => {
    try {
      const { data } = await getSearchFilms();

      onSuccess && onSuccess(data);

      return data;
    } catch (e: any) {
      onError && onError(e);
    }
  }
);
