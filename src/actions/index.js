export const SET_BOOK = 'SET_BOOK'
export const SET_MOVIE  = 'SET_MOVIE'
export const SET_CHARACTER = 'SET_CHARACTER'
export const SET_MOVIEQUOTE = 'SET_MOVIEQOUTE'
export const SET_MOVIE_FIELD = 'SET_MOVIEQUOTE_FIELD'
export const SET_MOVIE_FILTER = 'SET_MOVIEQUOTE_FILTER'

export const setBook =(payload)=>({type:SET_BOOK, payload})
export const setMovie = (payload)=>({type:SET_MOVIE,payload})
export const setCharacter =(payload) =>({type:SET_CHARACTER,payload})
export const setMovieQuote =(payload) =>({type:SET_MOVIEQUOTE,payload})
export const setMvieField =(payload) =>({type:SET_MOVIE_FIELD,payload})
export const setMovieFilter =(payload) =>({type:SET_MOVIE_FILTER,payload})