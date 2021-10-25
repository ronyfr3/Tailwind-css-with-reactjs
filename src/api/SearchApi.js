import { createAsyncThunk } from '@reduxjs/toolkit';

let query = "covid19"
let startIndex = 0

const getSearchResults = createAsyncThunk(
  'searchResults/getSearchResults',
  async () => {
    return fetch(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyC_m52R0aFOf5Bg1Jto8BnExpS0PDvbEMU&cx=017576662512468239146:omuauf_lfve&q=${query}&start=${startIndex}`,
      )
      .then(async (response) => response.json())
      .catch((err) => {
        console.error(err);
      });
    },
    );
    export default getSearchResults;
