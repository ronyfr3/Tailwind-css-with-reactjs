import { createSlice } from "@reduxjs/toolkit";
import getSearchResults from "../api/SearchApi";

const searchResultSlice = createSlice({
  name: "searchResults",
  initialState: {
    results: [],
    loading: null,
  },
  extraReducers: {
    [getSearchResults.pending]: (state) => {
      state.loading = "true";
    },
    [getSearchResults.fulfilled]: (state, action) => {
      state.results = action.payload;
      state.loading = "false";
    },
    [getSearchResults.rejected]: (state) => {
      state.loading = "true";
    },
  },
});

export default searchResultSlice.reducer;