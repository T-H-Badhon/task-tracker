import { createSlice } from "@reduxjs/toolkit";

export type TUserState = {
  _id: string;
  username: string;
  email: string;
};

const initialState: TUserState = {
  _id: "",
  username: "",
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state._id = action.payload._id;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    logOut: (state) => {
      state._id = "";
      state.username = "";
      state.email = "";
    },
  },
});
export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;