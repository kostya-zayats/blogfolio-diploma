import {RootState} from "../store";

export default {
  getSelectedNews: (state: RootState) => state.newsReducer.selectedNews,
  getSelectedNewsModalVisible: (state: RootState) => state.newsReducer.isSelectedNewsModalOpened,
}