import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {NewsPost} from "../../Constants/@types";

type NewsReducerState = {
  selectedNews: NewsPost | null;
  isSelectedNewsModalOpened: boolean;
}

const initialState: NewsReducerState = {
  selectedNews: null,
  isSelectedNewsModalOpened: false
};

const newsSlice = createSlice({
  name: 'newsReducer',
  initialState,
  reducers: {
    setSelectedNews: (state, action: PayloadAction<NewsPost | null>) => {
      state.selectedNews = action.payload;
      state.isSelectedNewsModalOpened = true;
    },
    setSelectedNewsModalVisible: (state, action: PayloadAction<boolean>) => {
      if(!action.payload) {
        state.selectedNews = null;
      }
      state.isSelectedNewsModalOpened = action.payload;
    }
  }
});

export const { setSelectedNews, setSelectedNewsModalVisible } = newsSlice.actions;

const newsReducer = newsSlice.reducer;
export default newsReducer;