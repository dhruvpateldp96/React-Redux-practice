import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import movieDetailReducer from './movieDetailReducer';
import seatingReducer from './seatingReducer';

export default combineReducers({
  movies: searchReducer,
  details: movieDetailReducer,
  seatings: seatingReducer
});
