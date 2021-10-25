import { createAsyncThunk } from '@reduxjs/toolkit';

const getSearchResults = createAsyncThunk(
  'searchResults/getSearchResults',
  async () => {
    return fetch(
      `https://google-search3.p.rapidapi.com/api/v1/search/q=${
        localStorage.getItem('query') ? localStorage.getItem('query') : 'news'
      }`,
      {
        method: 'GET',
        headers: {
          'x-user-agent': 'desktop',
          'x-rapidapi-host': 'google-search3.p.rapidapi.com',
          'x-rapidapi-key':
            '339966592amsha238b38d42f34d0p11ec8ejsnde126bc24803',
        },
      },
    )
      .then(async (response) => response.json())
      .catch((err) => {
        console.error(err);
      });
  },
);
export default getSearchResults;
