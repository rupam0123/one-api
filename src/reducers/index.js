import { combineReducers } from 'redux';
import {getBook} from './book'
import {getMovie} from './movie'
import { getCharacter } from './character';
import { getMovieQuote } from './movieQuote';


export default combineReducers({
 getBook,
 getMovie,
 getCharacter,
 getMovieQuote

});