import { RootState } from "../store";

export default {
  getAllNews: (state: RootState) => state.newsReducer.allNews,
  getSingleNews: (state: RootState) => state.newsReducer.singeNews,
};