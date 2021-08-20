import { combineReducers } from 'redux'
import Hello from './Hello';
import Movie from './Movie.reducer';

export default combineReducers({
    hello : Hello,
    movie : Movie
});