import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./queryReducer";
import searchReducer from "./searchReducer";

export default configureStore({
  reducer: {
    searchResults: searchReducer,
    query: queryReducer
  },
});