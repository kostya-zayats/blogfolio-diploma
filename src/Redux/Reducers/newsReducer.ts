import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {NewsPostsList} from "../../Constants/@types";

type NewsReducerState = {
  allNews: NewsPostsList;
}

const initialState: NewsReducerState  = {
  allNews: []
};

const newsSlice = createSlice({
  name: "newsReducer",
  initialState,
  reducers: {
    getNews: (state, action: PayloadAction<undefined>) => {},
    setNews: (state, action: PayloadAction<NewsPostsList>) => {
      state.allNews = action.payload;
    }
  },
});

export const {
  getNews,
  setNews,
} = newsSlice.actions;

const newsReducer = newsSlice.reducer;
export default newsReducer;