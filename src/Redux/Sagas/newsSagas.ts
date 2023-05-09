import { all, call, takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { getNews, setNews, getSingleNews, setSingleNews} from "../Reducers/newsReducer";
import API from "../utils/api";

function* getNewsWorker(action: PayloadAction<undefined>) {
  const { ok, data, problem } = yield call(API.getAllNews);
  if (ok && data) {
    yield put(setNews(data.results));
  } else {
    console.warn("Error fetching news: ", problem);
  }
}

function* getSingleNewsWorker(action: PayloadAction<string>) {
  const { ok, data, problem } = yield call(API.getSingleNews, action.payload);
  if (ok && data) {
    yield put(setSingleNews(data));
  } else {
    console.warn("Error fetching single news: ", problem);
  }
}

export default function* newsSaga() {
  yield all([
    takeLatest(getNews, getNewsWorker),
    takeLatest(getSingleNews, getSingleNewsWorker)
  ]);
}