import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import { reducers } from "./slices";

const makeStore = () =>
  configureStore({
    reducer: reducers,
  });

export const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;
