import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit/dist/createAction";
import {ActivateUserPayload, RegisterUserPayload} from "../Types/auth";

const INITIAL_STATE = {

};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisterUserPayload>) => {},
    activateUser: (state, action: PayloadAction<ActivateUserPayload>) => {},
  }
});
export const {registerUser, activateUser} = authSlice.actions;

export default authSlice.reducer;