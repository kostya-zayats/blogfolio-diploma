import {takeLatest, all, call, put} from 'redux-saga/effects';
import {registerUser, activateUser, signInUser, setLoggedIn} from '../Reducers/authReducer';
import {PayloadAction} from "@reduxjs/toolkit/dist/createAction";
import {ActivateUserPayload, RegisterUserPayload, SignInUserPayload} from "../Types/auth";
import API from '../utils/api'
import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY} from "../../Constants/const";

function* registerUserWorker(action: PayloadAction<RegisterUserPayload>) {
  const {data: registerData, callback} = action.payload;
  const {ok, problem} = yield call(API.registerUser, registerData);

  if (ok) {
    callback();
  } else {
    console.warn('Cannot register user:', problem);
  }
}

function* activateUserWorker(action: PayloadAction<ActivateUserPayload>) {
  const {data: activateData, callback} = action.payload;
  const {ok, problem} = yield call(API.activateUser, activateData);

  if (ok) {
    callback();
  } else {
    console.warn('Cannot activate user:', problem);
  }
}

function* signInUserWorker(action: PayloadAction<SignInUserPayload>) {
  const {data: signInData, callback} = action.payload;
  const {ok, problem, data} = yield call(API.signInUser, signInData);

  if (ok) {
    localStorage.setItem(ACCESS_TOKEN_KEY, data?.access);
    localStorage.setItem(REFRESH_TOKEN_KEY, data?.refresh);
    yield put(setLoggedIn(true));
    callback();
  } else {
    console.warn('Cannot activate user:', problem);
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(registerUser, registerUserWorker),
    takeLatest(activateUser, activateUserWorker),
    takeLatest(signInUser, signInUserWorker),
  ]);
}