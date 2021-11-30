import axios from 'axios';
import {setMovie } from '../actions';

const client = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
});

client.defaults.headers.common['Authorization'] = 'Bearer ZBr1YayHfmvcC9WunJcp';

export const requestMovie = () => async (dispatch) => {
  try {
    const response = await client.get('/movie');
    dispatch(setMovie(response.data.docs));
  } catch (err) {
    console.log(err);
  }
}
