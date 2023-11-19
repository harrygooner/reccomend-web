import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
  isLogin: false,
};

const loginSlices = createSlice({
  name: "login",
  initialState: initialDataState,
  reducers: {
    switchLoginStatus(state) {
      if (state.isLogin) {
        state.isLogin = false;
      } else {
        state.isLogin = true;
      }
    },
  },
});

const loginReducer = loginSlices.reducer;

export const loginAction = loginSlices.actions;
export default loginReducer;
