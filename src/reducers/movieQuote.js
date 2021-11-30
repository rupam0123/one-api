import { SET_MOVIEQUOTE } from "../actions";

const initialState = {
  movieQuote:[]
}

export const getMovieQuote=(state = initialState, action)=> {
  switch (action.type) {
    case SET_MOVIEQUOTE:
      return {
        ...state,
        movieQuote: action.payload
      }
    default:
      return state

  }
}