import {
    SEATING,
  } from '../actions/types';
  
  const initialState = {
    reservedSeating: [],
    totalSeats: 100
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
      case SEATING:
        let retrievedReservedSeating = JSON.parse(localStorage.getItem("newReservedSeating"))
        let newReservedSeating 
        // console.log(retrievedReservedSeating)
        if (retrievedReservedSeating !== null){
            state.reservedSeating = retrievedReservedSeating
        }
        if (state.reservedSeating.includes(action.payload)){
            newReservedSeating = state.reservedSeating.filter((seat) => seat !== action.payload)
        }else{
            newReservedSeating = [...state.reservedSeating, action.payload]
        }

        localStorage.setItem("newReservedSeating", JSON.stringify(newReservedSeating));

        return {
          ...state,
          reservedSeating: newReservedSeating,
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
  