import { SET_CHARACTER } from "../actions";

const initialState = {
  character:[]
}

export const getCharacter=(state = initialState, action)=> {
  switch (action.type) {
    case SET_CHARACTER:
      return {
        ...state,
        character: action.payload
      }
    default:
      return state

  }
}