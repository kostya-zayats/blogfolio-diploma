import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {NewsPost, NewsPostsList} from "../../Constants/@types";

type NewsReducerState = {
  allNews: NewsPostsList;
  singeNews: NewsPost | null;
}

const initialState: NewsReducerState  = {
  allNews: [],
  singeNews: null,
};

const newsSlice = createSlice({
  name: "newsReducer",
  initialState,
  reducers: {
    getNews: (state, action: PayloadAction<undefined>) => {},
    setNews: (state, action: PayloadAction<NewsPostsList>) => {
      state.allNews = action.payload;
    },
    getSingleNews: (state, action: PayloadAction<string>) => {},
    setSingleNews: (state, action: PayloadAction<NewsPost>) => {
      state.singeNews = action.payload;
    },
  },
});

export const {
  getNews,
  setNews,
  getSingleNews,
  setSingleNews
} = newsSlice.actions;

const newsReducer = newsSlice.reducer;
export default newsReducer;