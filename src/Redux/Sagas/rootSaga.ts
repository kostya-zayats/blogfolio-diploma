import {all} from "redux-saga/effects";
import authSaga from "./authSagas";
import newsSaga from "./newsSagas";


export default function* rootSaga() {
  yield all([authSaga(), newsSaga()])
}