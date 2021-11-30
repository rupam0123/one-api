import { SET_MOVIE } from "../actions";

const initialState = {
  movie:[]
}

export const getMovie=(state = initialState, action)=> {
  switch (action.type) {
    case SET_MOVIE:
      return {
        ...state,
        movie: action.payload
      }
    default:
      return state

  }
}