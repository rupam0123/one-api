import axios from 'axios';
import { setMvieField} from '../actions';

const client = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
});

client.defaults.headers.common['Authorization'] = 'Bearer ZBr1YayHfmvcC9WunJcp';

export const requestMovie = (prevFilters) => async (dispatch) => {
  try {
     const params = {
      budgetInMillions: prevFilters.limit,
    };
    console.log("i am params",params.budgetInMillions)
    const {data:{docs}} = await client.get(`/movie?budgetInMillions<${params.budgetInMillions}`,);
    dispatch(setMvieField({movie:docs})); 
  } catch (err) {
    console.log(err);
  }
}
