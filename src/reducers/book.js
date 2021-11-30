import { SET_BOOK } from "../actions";

const initialState = {
  book:[]
}

export const getBook=(state = initialState, action)=> {
  switch (action.type) {
    case SET_BOOK:
      return {
        ...state,
        book: action.payload
      }
    default:
      return state

  }
}