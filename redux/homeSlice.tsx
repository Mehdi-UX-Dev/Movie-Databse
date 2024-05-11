/**
 *
 *
 * @returns {Promise}
 */

import { fetchDataFromApi } from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type homeSliceTypes = {
  url: {
    backdrop?: string;
    poster?: string;
    profile?: string;
  };
  genres: any;
};

const initialState: homeSliceTypes = {
  url: {},
  genres: {},
};

/**
 * fetches the Api Configuration for images
 *
 *  @returns {Promise} A promise that resolves to an object containing the URLs for different image
 */
const fetchApiConfig = createAsyncThunk("fetch Data from api", async () => {
  const res = await fetchDataFromApi("/configuration");
  const url = {
    backdrop: res.images.secure_base_url + "original",
    poster: res.images.secure_base_url + "original",
    profile: res.images.secure_base_url + "original",
  };

  return url;
});

/**
 * Fetch all genres in one place
 *
 * @returns an Array of genres id
 *
 * @example [1,44,89]
 *
 * @async
 */

const genresCall = createAsyncThunk("fetch genres", async () => {
  let promises: any = [];
  let endPoints = ["tv", "movie"];
  let allGenres: any = {};

  endPoints.forEach((url) => {
    promises.push(fetchDataFromApi(`/genre/${url}/list`));
  });

  const data = await Promise.all(promises);

  const dataMap = data.map(({ genres }) => {
    return genres.map((item: any) => (allGenres[item.id] = item));
  });

  return dataMap[1];
});

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchApiConfig.fulfilled, (state, action) => {
      homeSlice.caseReducers.getApiConfiguration(state, action);
    });
    builder.addCase(genresCall.fulfilled, (state, action) => {
      homeSlice.caseReducers.getGenres(state, action);
    });
  },
});

export const { getApiConfiguration, getGenres } = homeSlice.actions;

export { fetchApiConfig, genresCall };

export default homeSlice.reducer;
