import axios from 'axios';
import { setBook } from '../actions';

const client = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
});

client.defaults.headers.common['Authorization'] = 'Bearer ZBr1YayHfmvcC9WunJcp';

export const requestBooks = () => async (dispatch) => {
  try {
    const response = await client.get('/book');
    dispatch(setBook(response.data.docs));
  } catch (err) {
    console.log(err);
  }
}
