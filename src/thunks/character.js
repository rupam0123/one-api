import axios from 'axios';
import { setCharacter} from '../actions';

const client = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
});

client.defaults.headers.common['Authorization'] = 'Bearer ZBr1YayHfmvcC9WunJcp';

export const requestCharacter = () => async (dispatch) => {
  try {
    const response = await client.get('/character');
    dispatch(setCharacter(response.data.docs));
  } catch (err) {
    console.log(err);
  }
}
