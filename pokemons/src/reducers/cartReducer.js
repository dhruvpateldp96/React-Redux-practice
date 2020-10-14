import {
    // SEARCH_MOVIE,
    // FETCH_MOVIES,
    // FETCH_MOVIE,
    ADD_TO_CART,
    LOADING
  } from '../actions/types';
  
  const initialState = {
    // text: '',
    pokemons: [],
    loading: false,
    // movie: []
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      // case SEARCH_MOVIE:
      //   return {
      //     ...state,
      //     text: action.payload,
      //     loading: false
      //   };
      case ADD_TO_CART:
        return {
          ...state,
          pokemons: [...state.pokemons,action.payload],
          loading: false
        };
      // case FETCH_MOVIE:
      //   return {
      //     ...state,
      //     movie: action.payload,
      //     loading: false
      //   };
      case LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }
  