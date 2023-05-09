import { all, call, takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { getNews, setNews } from "../Reducers/newsReducer";
import API from "../utils/api";

function* getNewsWorker(action: PayloadAction<undefined>) {
  const { ok, data, problem } = yield call(API.getAllNews);
  if (ok && data) {
    yield put(setNews(data.results));
  } else {
    console.warn("Error fetching news: ", problem);
  }
}

export default function* newsSaga() {
  yield all([takeLatest(getNews, getNewsWorker)]);
}