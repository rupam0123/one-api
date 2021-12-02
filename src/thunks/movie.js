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
    if (prevFilters===undefined){
      const { data: { docs } } = await client.get(`/movie`);
      dispatch(setMvieField({ movie: docs }));
    }
    else{
    const { data: { docs } } = await client.get(`/movie?budgetInMillions<${params.budgetInMillions}`,);
    dispatch(setMvieField({ movie: docs }));
    }
  } catch (err) {
    console.log(err);
  }
}

export const requestMovieRunTime = (prevFilters) => async (dispatch) => {
  try {
    const params = {
      runtimeInMinutes: prevFilters,
    };
    if (prevFilters===undefined){
      const { data: { docs } } = await client.get(`/movie`);
      dispatch(setMvieField({ movie: docs }));
    }
    else{
    const { data: { docs } } = await client.get(`/movie?runtimeInMinutes>=${params.runtimeInMinutes}`,);
    dispatch(setMvieField({ movie: docs }));
    }
  } catch (err) {
    console.log(err);
  }
}