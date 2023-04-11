import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "./Reducers/themeReducer";
import newsReducer from "./Reducers/newsReducer";

export const store = configureStore({
  reducer: { themeReducer, newsReducer },
});

export type RootState = ReturnType<typeof store.getState>