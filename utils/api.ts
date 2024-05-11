import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = process.env.NEXT_PUBLIC_API_KEY;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

/**
 * Calls the TMDB Api
 * @param url is combined with the base url and sent to get the desired data
 *
 * @example GET(https://api.themoviedb.org/3/movie/45)
 *
 * @returns the desired data based on the url provided
 *
 * @async
 */

export const fetchDataFromApi = async (url: string, params?: string) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
