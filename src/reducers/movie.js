import { SET_MOVIE_FIELD, SET_MOVIE_FILTER } from "../actions";

const initialState = {
  movie: {
    movie: [],
    filter: { page: 1, limit: undefined, minute: undefined }

  }
}

export const getMovie = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE_FIELD:
      return {
        ...state,
        movie: {
          ...state.movie,
          ...action.payload
        }

      }
    case SET_MOVIE_FILTER:
      return {
        ...state,
        movie: {
          ...state.movie,
          filter: {
            ...state.movie.filter,
            ...action.payload,
          }
        }
      }

    default:
      return state

  }
}