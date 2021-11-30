import axios from 'axios';
import {setMovieQuote } from '../actions';

const client = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
});

client.defaults.headers.common['Authorization'] = 'Bearer ZBr1YayHfmvcC9WunJcp';

export const requestMovieQuote = (id) => async (dispatch) => {
  try {
    const response = await client.get(`/movie/${id}/quote`);
    dispatch(setMovieQuote(response.data.docs));
  } catch (err) {
    console.log(err);
  }
}
