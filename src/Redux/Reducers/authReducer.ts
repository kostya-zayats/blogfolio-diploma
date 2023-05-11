import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit/dist/createAction";
import {ActivateUserPayload, RegisterUserPayload, SignInUserPayload} from "../Types/auth";
import {ACCESS_TOKEN_KEY} from "../../Constants/const";

const INITIAL_STATE = {
  isLoggedIn: !!localStorage.getItem(ACCESS_TOKEN_KEY),
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisterUserPayload>) => {},
    activateUser: (state, action: PayloadAction<ActivateUserPayload>) => {},
    signInUser: (state, action: PayloadAction<SignInUserPayload>) => {},
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    }
  }
});
export const {registerUser, activateUser, signInUser, setLoggedIn} = authSlice.actions;

export default authSlice.reducer;