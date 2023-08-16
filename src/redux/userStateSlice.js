import { createSlice } from "@reduxjs/toolkit";
import { localStorageServices } from "../Services/localStorageServices";

const initialState = {
  userInfo: localStorageServices.getUser("USER_LOGIN"),
};

const userStateSlice = createSlice({
  name: "userStateSlice",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setLogin } = userStateSlice.actions;
export default userStateSlice.reducer;
