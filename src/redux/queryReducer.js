import { createSlice } from '@reduxjs/toolkit';

const queryStringSlice = createSlice({
  name: 'queryString',
  initialState: {
    string: '',
  },
  reducers: {
    addQueryString(state, action) {
      // console.log(action.payload);
      state.string = action.payload;
      localStorage.setItem('query', JSON.stringify(action.payload));
    },
  },
});
export const { addQueryString } = queryStringSlice.actions;
export default queryStringSlice.reducer;
