import axios from 'axios';
import { setMvieField } from '../actions';

const client = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
});

client.defaults.headers.common['Authorization'] = 'Bearer ZBr1YayHfmvcC9WunJcp';

export const requestMovie = (prevFilters) => async (dispatch) => {
  try {
    const params = {
      budgetInMillions: prevFilters,
    };
    const { data: { docs } } = await client.get(`/movie?budgetInMillions<${params.budgetInMillions}`,);
    dispatch(setMvieField({ movie: docs }));
  } catch (err) {
    console.log(err);
  }
}
export const requestUser = () => async (dispatch) => {
  const { data: { docs } } = await client.get("/movie");
  dispatch(setMvieField({ movie: docs }));
}
export const requestMovieRunTime = (prevFilters) => async (dispatch) => {
  try {
    const params = {
      runtimeInMinutes: prevFilters,
    };
    console.log("i am minute", params.runtimeInMinutes)
    console.log("i am params", params.budgetInMillions)
    const { data: { docs } } = await client.get(`/movie?runtimeInMinutes>=${params.runtimeInMinutes}`,);
    dispatch(setMvieField({ movie: docs }));
  } catch (err) {
    console.log(err);
  }
}