import { RootState } from "../store";

export default {
  getAllNews: (state: RootState) => state.newsReducer.allNews
};