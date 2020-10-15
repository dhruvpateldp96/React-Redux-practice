import {
    // SEARCH_MOVIE,
    FETCH_MOVIE_DETAILS,
    // FETCH_MOVIES,
    // LOADING
  } from '../actions/types';
  
  const initialState = {
    // text: '',
    details: [],
    // loading: false,
    // movie: []
  };
  
  export default function(state = initialState, action) {
    // console.log(action.payload)
    switch (action.type) {
      // case SEARCH_MOVIE:
      //   return {
      //     ...state,
      //     text: action.payload,
      //     loading: false
      //   };
    //   case FETCH_MOVIES:
    //     return {
    //       ...state,
    //       movies: action.payload,
    //       loading: false
    //     };
      case FETCH_MOVIE_DETAILS:
        return {
          ...state,
          details: action.payload,
        };
    //   case LOADING:
    //     return {
    //       ...state,
    //       loading: true
    //     };
      default:
        return state;
    }
  }
  