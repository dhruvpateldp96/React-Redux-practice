import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  pokemons: searchReducer,
  cart: cartReducer
});
// export default searchReducer