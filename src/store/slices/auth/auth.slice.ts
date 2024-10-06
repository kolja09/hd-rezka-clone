import { createSlice } from "@reduxjs/toolkit";

import { AuthStateType } from "./auth.types";

const initialState: AuthStateType = {
  isOpenLoginModal: false,
  isOpenRegisterModal: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsOpenLoginModal(state, action) {
      state.isOpenLoginModal = action.payload;
    },
    setIsOpenRegisterModal(state, action) {
      state.isOpenRegisterModal = action.payload;
    },
  },
});

export const { setIsOpenLoginModal, setIsOpenRegisterModal } =
  authSlice.actions;

export default authSlice.reducer;
